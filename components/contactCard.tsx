import Image from "next/image";

interface ContactCardProps {
  children: React.ReactNode;
}

export const ContactCardWrapper = ({ children }: ContactCardProps) => {
  return (
    <div className=" flex flex-col lg:flex-row gap-[21px] lg:gap-[55px] justify-center">
      {children}
    </div>
  );
};

export const ContactCard = ({ children }: ContactCardProps) => {
  return (
    <div className=" border border-divider rounded-xl w-full lg:w-[377px] px-[34px] py-[34px]  ">
      {children}
    </div>
  );
};

export const ContactCardImage = ({ children }: ContactCardProps) => {
  return (
    <div className=" border border-divider w-fit p-[8px] rounded-lg mb-[21px] ">
      {children}
    </div>
  );
};

export const ContactCardHeading = ({ children }: ContactCardProps) => {
  return <h2 className=" font-bold text-[21px]">{children}</h2>;
};

export const ContactCardSubHeading = ({ children }: ContactCardProps) => {
  return <p className=" text-darkGrey mb-[21px]">{children}</p>;
};

export const ContactCardContact = ({ children }: ContactCardProps) => {
  return (
    <p className=" underline font-medium hover:text-dark/80 duration-150 transition-all">
      {children}
    </p>
  );
};
