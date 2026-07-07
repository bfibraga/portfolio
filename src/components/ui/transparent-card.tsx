import { Card } from "@/components/ui/card";

type TransparentCardProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export function TransparentCard({ children, ...props }: TransparentCardProps) {
  return (
    <Card
      {...props}
      className={
        `bg-card border border-primary/40 text-card-foreground transition-all duration-300 hover:border-primary hover:shadow-[0_0_15px_color-mix(in_srgb,var(--primary)_30%,transparent)] shadow-[0_0_8px_color-mix(in_srgb,var(--primary)_20%,transparent)]` +
        (props.className ? ` ${props.className}` : "")
      }
    >
      {children}
    </Card>
  );
}

export default TransparentCard;
