import { JSX, useEffect, useRef } from "react";

interface MatrixRainingBackgroundProps {
  color?: string;
  backgroundColor?: string;
  speed?: number; // frames per second
  density?: number;
  yapanese?: boolean;
  hoverColor?: string;
  hoverRadius?: number;
}

function MatrixRainingBackground({
  color = "#aff",
  backgroundColor = "rgba(0, 0, 0, 0.04)",
  speed = 25,
  density = 20,
  yapanese = false,
  hoverColor = "#fff",
  hoverRadius = 80,
  ...props
}: MatrixRainingBackgroundProps &
  React.HTMLProps<HTMLCanvasElement>): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: -9999,
    y: -9999,
    active: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let columns = Math.floor(width / 20); // Number of columns based on character width
    const characters = yapanese
      ? "あいうえおかきくけこさしすせそたちつてと"
      : "abcdefghijklmnopqrstuvwxyz0123456789";
    const charArray = characters.split("");
    let drops: number[] = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    let frameRate = speed; // frames per second
    let lastFrameTime = Date.now();
    let animationId: number | null = null;

    const draw = () => {
      // Create a translucent rectangle to create the fading effect
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, width, height);

      ctx.font = "15px monospace";

      for (let i = 0; i < drops.length; i++) {
        const x = i * 20;
        const y = drops[i] * 20;
        const text = charArray[Math.floor(Math.random() * charArray.length)];

        // determine color based on distance to mouse
        const dx = mouseRef.current.x - x;
        const dy = mouseRef.current.y - y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (mouseRef.current.active && dist < hoverRadius) {
          // interpolate a simple highlight (hoverColor)
          ctx.fillStyle = hoverColor;
        } else {
          ctx.fillStyle = color;
        }

        ctx.fillText(text, x, y);

        // Reset drops when it reaches the bottom of the canvas
        if (drops[i] * 20 > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const animate = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - lastFrameTime;

      // Update the animation only if enough time has passed
      if (elapsedTime > 1000 / frameRate) {
        draw();
        lastFrameTime = currentTime;
      }

      animationId = requestAnimationFrame(animate);
    };

    // mouse handlers on canvas
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
      console.log(mouseRef.current);
    };

    const handlePointerLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handlePointerLeave);
    canvas.addEventListener("touchmove", (e: TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const t = e.touches[0];
      mouseRef.current.x = t.clientX - rect.left;
      mouseRef.current.y = t.clientY - rect.top;
      mouseRef.current.active = true;
    });
    canvas.addEventListener("touchend", handlePointerLeave);

    animate();

    // Update canvas dimensions on window resize
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      columns = Math.floor(width / 20);
      drops = [];
      for (let i = 0; i < columns; i++) {
        drops[i] = 1;
      }
    };

    // Check if the user is on a mobile device before handling resize events
    const isMobileDevice = /Mobi/i.test(window.navigator.userAgent);
    if (!isMobileDevice) {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      // cleanup
      if (animationId) cancelAnimationFrame(animationId);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handlePointerLeave);
      canvas.removeEventListener("touchend", handlePointerLeave);
      if (!isMobileDevice) {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, [color, backgroundColor, yapanese, speed, hoverColor, hoverRadius]);

  return (
    <canvas
      className={`matrix-canvas fixed top-0 left-0 z-[-1]`}
      ref={canvasRef}
      {...props}
    />
  );
}

export type { MatrixRainingBackgroundProps };
export { MatrixRainingBackground as default };
