import { useEffect, useRef } from "react";

interface MatrixRainingBackgroundProps {
  color?: string;
  backgroundColor?: string;
  speed?: number;
  hoverColor?: string;
  hoverRadius?: number;
  charset?: "hiragana" | "binary" | "hex" | "mix";
}

const HIRAGANA = "あいうえおかきくけこさしすせそたちつてと";
const BINARY = "01";
const HEX = "0123456789ABCDEF";
const MIX = "アイウエオカキクケコサシスセソタチツテト0123456789ABCDEF";

function getCharset(type: MatrixRainingBackgroundProps["charset"]): string {
  switch (type) {
    case "binary": return BINARY;
    case "hex": return HEX;
    case "hiragana": return HIRAGANA;
    case "mix": return MIX;
    default: return MIX;
  }
}

function MatrixRainingBackground({
  color = "#00d4ff",
  backgroundColor = "transparent",
  speed = 25,
  hoverColor = "#ffffff",
  hoverRadius = 80,
  charset = "mix",
  ...props
}: MatrixRainingBackgroundProps & React.HTMLProps<HTMLCanvasElement>) {
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

    const chars = getCharset(charset);
    const charArray = chars.split("");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let fontSize = Math.max(14, Math.floor(width / 80));
    let columns = Math.floor(width / fontSize);
    let drops: number[] = [];
    const neonColors = ["#00d4ff", "#00fff0", "#ff00ff", "#00d4ff"];
    const glitchColumns: Map<number, number> = new Map();

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -height / fontSize);
    }

    const frameRate = speed;
    let lastFrameTime = Date.now();
    let animationId: number | null = null;

    const draw = () => {
      if (backgroundColor === "transparent") {
        ctx.clearRect(0, 0, width, height);
      } else {
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, width, height);
      }

      ctx.font = `${fontSize}px monospace`;

      if (Math.random() < 0.002) {
        const col = Math.floor(Math.random() * columns);
        glitchColumns.set(col, Date.now() + 100);
      }

      for (let i = 0; i < drops.length; i++) {
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        const isGlitching = glitchColumns.has(i) && glitchColumns.get(i)! > Date.now();

        const dx = mouseRef.current.x - x;
        const dy = mouseRef.current.y - y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const nearMouse = mouseRef.current.active && dist < hoverRadius;

        const leadChar = charArray[Math.floor(Math.random() * charArray.length)];
        ctx.fillStyle = isGlitching ? "#ffffff" : nearMouse ? hoverColor : neonColors[0];
        ctx.fillText(leadChar, x, y);

        for (let j = 1; j < 6; j++) {
          const trailY = y - j * fontSize;
          if (trailY < 0) break;
          const trailChar = charArray[Math.floor(Math.random() * charArray.length)];
          const neonColor = isGlitching ? "#ffffff" : neonColors[Math.floor(Math.random() * neonColors.length)];
          const alpha = Math.max(0.05, 1 - j * 0.15);
          ctx.fillStyle = `${neonColor}${Math.floor(alpha * 255).toString(16).padStart(2, "0")}`;
          ctx.fillText(trailChar, x, trailY);
        }

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      for (const [col, expiry] of glitchColumns) {
        if (Date.now() > expiry) glitchColumns.delete(col);
      }
    };

    const animate = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - lastFrameTime;

      if (elapsedTime > 1000 / frameRate) {
        draw();
        lastFrameTime = currentTime;
      }

      animationId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
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

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      fontSize = Math.max(14, Math.floor(width / 80));
      columns = Math.floor(width / fontSize);
      drops = [];
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.floor(Math.random() * -height / fontSize);
      }
    };

    if (!/Mobi/i.test(window.navigator.userAgent)) {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handlePointerLeave);
      canvas.removeEventListener("touchend", handlePointerLeave);
      if (!/Mobi/i.test(window.navigator.userAgent)) {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, [color, backgroundColor, speed, hoverColor, hoverRadius, charset]);

  return (
    <canvas
      className="fixed inset-0 z-0"
      ref={canvasRef}
      style={{ background: "transparent" }}
      {...props}
    />
  );
}

export type { MatrixRainingBackgroundProps };
export default MatrixRainingBackground;
