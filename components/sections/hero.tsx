import { cn } from "@/lib/utils";

interface HeroProps {
  children: React.ReactNode;
}

interface HeroElementsProps {
  children: React.ReactNode;
  className?: string;
}

/* ////////////////// */

export const HeroTitle = ({ children, className }: HeroElementsProps) => {
  return (
    <h1
      className={cn(
        "font-bold text-[44px] md:text-[89px] leading-tight mb-[21px]",
        className
      )}
    >
      {children}
    </h1>
  );
};

export const HeroSubtitle = ({ children, className }: HeroElementsProps) => {
  return (
    <p
      className={cn(
        "mb-[8px] text-left text-[14px] max-w-[520px] md:text-base md:text-left md:ml-auto",
        className
      )}
    >
      {children}
    </p>
  );
};

export const Hero = ({ children, className }: HeroElementsProps) => {
  return <div className={cn("", className)}>{children}</div>;
};
