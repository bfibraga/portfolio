import { Card } from "@/components/ui/card";

type TransparentCardProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export function TransparentCard({ children, ...props }: TransparentCardProps) {
  return (
    <Card
      {...props}
      className={
        `
        bg-background/30 backdrop-blur-lg
        border border-transparent 
        outline-1 outline-border
        ` + (props.className ? ` ${props.className}` : "")
      }
    >
      {children}
    </Card>
  );
}

export default TransparentCard;
