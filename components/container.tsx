import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("max-w-screen-xl mx-auto px-4 md:px-14", className)}>
      {children}
    </div>
  );
};
