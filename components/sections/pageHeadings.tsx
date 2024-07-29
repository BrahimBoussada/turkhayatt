import { cn } from "@/lib/utils";

export const PageHeadings = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" mt-[55px] mb-[34px] md:mt-[144px] md:mb-[144px]">
      {children}
    </div>
  );
};

interface HeadingsProps {
  children: React.ReactNode;
  className?: string;
}
export const PageHeadingsTitle = ({ children, className }: HeadingsProps) => {
  return (
    <h1
      className={cn(
        " text-dark font-bold text-center text-[55px] md:text-[89px]",
        className
      )}
    >
      {children}
    </h1>
  );
};

export const PageHeadingsSubtitle = ({
  children,
  className,
}: HeadingsProps) => {
  return (
    <div>
      <p className={cn(" text-center text-[14px] md:text-[17px] ", className)}>
        {children}
      </p>
    </div>
  );
};
