import { cn } from "@/lib/utils";
import Link from "next/link";

interface ArticleProps {
  children: React.ReactNode;
  className?: string;
}

export const ArticleWrapper = ({ children, className }: ArticleProps) => {
  return (
    <div className="md:text-[18px] flex flex-col gap-[34px]">{children}</div>
  );
};

export const Article = ({ children, className }: ArticleProps) => {
  return (
    <div className={cn(" flex flex-col gap-[13px] ", className)}>
      {children}
    </div>
  );
};

export const ArticleHeading = ({ children, className }: ArticleProps) => {
  return <h2 className={cn("font-bold text-[27px]", className)}>{children}</h2>;
};

export const ArticleParagraph = ({ children, className }: ArticleProps) => {
  return (
    <p className={cn("md:leading-relaxed text-darkGrey", className)}>
      {children}
    </p>
  );
};

export const ArticleContact = () => {
  return (
    <Link
      className="inline-block underline text-red hover:text-red/80 duration-150 transition-all"
      href={"/contact"}
    >
      Contact us
    </Link>
  );
};

export const ArticleList = ({ children, className }: ArticleProps) => {
  return (
    <ul className="px-4 md:leading-relaxed flex flex-col gap-[8px] text-darkGrey">
      <li className="list-disc ">{children}</li>
    </ul>
  );
};

export const ArticleListTitle = ({ children, className }: ArticleProps) => {
  return <span className=" font-bold">{children}</span>;
};
