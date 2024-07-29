import { Container } from "@/components/container";
import {
  PageHeadings,
  PageHeadingsTitle,
} from "@/components/sections/pageHeadings";
import Image from "next/image";

export default function About() {
  return (
    <main>
      <Container>
        <PageHeadings>
          <PageHeadingsTitle>About Us</PageHeadingsTitle>
        </PageHeadings>

        <div className=" flex flex-col gap-[13px] mb-[34px]">
          <h2 className="text-[27px] md:text-[34px] font-medium">
            <br />
            Your Trusted Partner in Turkey
          </h2>
          <div className=" w-full h-[2px] bg-divider"></div>
        </div>

        <div className="flex flex-col xl:flex-row justify-between gap-[34px] items-start ">
          <Image
            className="object-contain mt-[13px]"
            src={"/AboutPhoto.png"}
            alt={"Beautiful Turkish Scenery"}
            width={646}
            height={235}
            quality={95}
            priority
          ></Image>

          <p className=" font-medium text-[16px] md:text-[21px] xl:px-[55px] leading-relaxed text-balance">
            <span className="text-red">Our mission</span> is to empower every
            individual's journey, near or far, by offering an all-encompassing
            suite of services that redefine convenience, elevate experiences,
            and foster lasting connections. We are dedicated to being more than
            just service facilitators; we are your partners in realizing dreams
            and creating cherished memories.
          </p>
        </div>
      </Container>
    </main>
  );
}
