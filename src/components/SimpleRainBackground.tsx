import React from "react";

type Props = {
  variant?: "about" | "skills" | "projects" | "contact" | "default";
};

const tints: Record<NonNullable<Props["variant"]>, string> = {
  default: "bg-gradient-to-b from-background via-background/95 to-background",
  about: "bg-gradient-to-br from-foreground/[0.02] via-background to-foreground/[0.01]",
  skills: "bg-gradient-to-tr from-foreground/[0.02] via-background to-foreground/[0.01]",
  projects: "bg-gradient-to-bl from-foreground/[0.02] via-background to-foreground/[0.01]",
  contact: "bg-gradient-to-tr from-foreground/[0.02] via-background to-foreground/[0.01]",
};

export default function SimpleRainBackground({ variant = "default" }: Props) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
     
      <div className={`absolute inset-0 ${tints[variant]}`} />
    </div>
  );
}
