import type { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "elevated";
}

const variantStyles: Record<string, string> = {
  default: "bg-white border border-border rounded-xl shadow-sm",
  glass: "glass-card",
  elevated: "bg-white rounded-xl shadow-lg",
};

export function Card({
  variant = "default",
  className = "",
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={`${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
