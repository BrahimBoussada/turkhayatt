import { cn } from "@/lib/utils";
import { CircleArrowRight } from "lucide-react";
import Link from "next/link";

interface ServiceCardsProps {
  children?: React.ReactNode;
  className?: string;
}

interface ServiceCardsLinksProps {
  children?: React.ReactNode;
  className?: string;
  href?: string;
}

export const ServiceCardsWrapper = ({
  children,
  className,
}: ServiceCardsProps) => {
  return (
    <div
      className={cn(
        " flex flex-col lg:flex-row lg:flex-wrap items-center justify-center gap-x-6 gap-y-4 lg:gap-y-6",
        className
      )}
    >
      {children}
    </div>
  );
};

export const ServiceCards = ({
  children,
  className,
  href = "/",
}: ServiceCardsLinksProps) => {
  return (
    <Link href={href} className=" w-full lg:w-fit">
      <div
        className={cn(
          " flex flex-row items-center lg:items-stretch    lg:flex-col  border border-red/40 rounded-md  lg:w-[338px] lg:h-[272px]  p-[21px] justify-between  hover:border-red duration-300 transition-all hover:scale-105 lg:hover:-translate-y-4 active:scale-95 hover:m-1 ",
          className
        )}
      >
        {children}
      </div>
    </Link>
  );
};

export const ServiceCardsTitle = ({
  children,
  className,
}: ServiceCardsProps) => {
  return <h2 className={cn("font-bold text-[34px]", className)}>{children}</h2>;
};

export const ServiceCardsIcon = ({ className }: ServiceCardsProps) => {
  return (
    <div className={cn("", className)}>
      <CircleArrowRight className=" text-dark ml-auto w-[29px] h-[29px]" />
    </div>
  );
};
