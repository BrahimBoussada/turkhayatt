import Link from "next/link";
import { Container } from "./container";
import { Logo } from "./icons/logo";
import { CompanyLinks, LegalLinks, ServicesLinks } from "@/lib/data";

export const Footer = () => {
  return (
    <footer className=" bg-grey py-[34px] md:py-[55px] mt-[55px] md:mt-[144px]">
      <Container>
        {/* 1 */}
        <Link href={"/"}>
          <Logo className="h-[21px] mb-[21px] hidden md:flex" />
        </Link>
        <div className="flex flex-col gap-[21px] md:flex-row justify-between">
          <div className=" flex flex-col items-start gap-[13px]">
            <Link href={"/"}>
              <Logo className="h-[21px] mb-[21px] md:hidden" />
            </Link>
            <h3 className="w-3/4 leading-tight font-medium text-[21px]">
              Need Help? We are always here when you need us.
            </h3>

            <ul className="text-[16px] ">
              <li className="mb-[5px]">
                <Link
                  className="text-red hover:text-red/80 hover:underline duration-150 transition-all  "
                  href={"/contact"}
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  href={"/faqs"}
                  className=" hover:text-darkGrey duration-150 transition-all"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div className=" flex flex-col gap-[8px]">
            <p className=" text-[16px] text-darkGrey">Services</p>
            <ul>
              {ServicesLinks.map((service) => (
                <li
                  key={service.name}
                  className="mb-[5px] hover:text-darkGrey duration-150 transition-all"
                >
                  <Link href={service.hash}>{service.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Comapny */}
          <div className=" flex flex-col gap-[8px]">
            <p className=" text-[16px] text-darkGrey">Company</p>
            <ul>
              {CompanyLinks.map((company) => (
                <li
                  key={company.name}
                  className="mb-[5px] hover:text-darkGrey duration-150 transition-all"
                >
                  <Link href={company.hash}>{company.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* LEGAL */}
          <div className=" flex flex-col gap-[8px]">
            <p className=" text-[16px] text-darkGrey">Legal</p>
            <ul>
              {LegalLinks.map((legal) => (
                <li
                  key={legal.name}
                  className="mb-[5px] hover:text-darkGrey duration-150 transition-all"
                >
                  <Link href={legal.hash}>{legal.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* UNDER FOOTER */}
        <div className=" flex flex-col md:flex-row justify-between mt-[34px] md:mt-[89px] gap-[13px] md:gap-0">
          <div className="text-[14px]">Social Media</div>

          <div className="text-[14px] select-none hidden md:flex">
            &copy; 2024 TÜRKHAYATT
          </div>

          <div className="text-[14px]">English</div>
          <div className="text-[14px] mt-[21px] select-none md:hidden">
            &copy; 2024 TÜRKHAYATT
          </div>
        </div>
      </Container>
    </footer>
  );
};
