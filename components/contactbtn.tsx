import { cn } from "@/lib/utils";
import Link from "next/link";

export const ContactBtn = ({ className }: { className?: string }) => {
  return (
    <Link href={"/contact"}>
      <div
        className={cn(
          " bg-red text-white rounded-full p-[1.5rem] md:py-[2rem] md:px-[4rem] w-full md:w-fit justify-center mx-auto hover:bg-red/80 transition-all duration-150",
          className
        )}
      >
        <p className=" text-center text-[27px] md:text-[55px] "> Contact Us</p>
      </div>
    </Link>
  );
};
