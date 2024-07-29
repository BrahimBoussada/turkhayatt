import { cn } from "@/lib/utils";

export const Headings = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" mt-[55px] mb-[34px] md:mt-[89px] md:mb-[55px]">
      {children}
    </div>
  );
};

interface HeadingsProps {
  children: React.ReactNode;
  className?: string;
}
export const HeadingsTitle = ({ children, className }: HeadingsProps) => {
  return (
    <h2
      className={cn(
        " text-red text-center text-[27px] md:text-[44px] my-[8px]",
        className
      )}
    >
      {children}
    </h2>
  );
};

export const HeadingsSubtitle = ({ children, className }: HeadingsProps) => {
  return (
    <div>
      <p className={cn(" text-center text-[14px] md:text-[17px] ", className)}>
        {children}
      </p>
    </div>
  );
};
