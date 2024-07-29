import { Bubbles } from "@/components/bubbles";
import { ContactBtn } from "@/components/contactbtn";
import { Container } from "@/components/container";
import { Arrow } from "@/components/icons/arrow";
import {
  Headings,
  HeadingsTitle,
  HeadingsSubtitle,
} from "@/components/sections/headings";
import { Hero, HeroTitle, HeroSubtitle } from "@/components/sections/hero";
import { Services } from "@/components/services";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Container>
        <Hero className="md:mt-[55px]">
          <HeroTitle className="text-dark">
            EXPERIENCE LIFE IN TURKEY WITH{" "}
            <span className=" text-red">TÜRKHAYATT</span>
          </HeroTitle>
          <HeroSubtitle>
            We strive to help international visitors and local residents in
            Turkey by offering expert services in
            <span className=" text-red">
              {" "}
              Health, Education, Tourism, and more.
            </span>
          </HeroSubtitle>
          <Image
            src={"/HeroPhoto.png"}
            alt={"Istanbul Bridge photo"}
            width={1312}
            height={632}
            quality={95}
          ></Image>
        </Hero>

        <Headings>
          <HeadingsTitle>Why TÜRKHAYATT?</HeadingsTitle>
          <HeadingsSubtitle>
            TÜRKHAYATT isn't just a service provider; we're a dynamic team of
            professionals with a passion for what we do.
          </HeadingsSubtitle>
        </Headings>
        <Bubbles />

        <Headings>
          <HeadingsTitle>Our Services</HeadingsTitle>
          <HeadingsSubtitle>
            Elevating Your Journey with Our Comprehensive Services.
          </HeadingsSubtitle>
        </Headings>

        <Services />

        <Headings>
          <HeadingsTitle>Ready to Start?</HeadingsTitle>
          <HeadingsSubtitle>Begin Your Journey Today.</HeadingsSubtitle>
          <Arrow className=" mx-auto w-[34px] mt-[8px]" />
          <ContactBtn className="mt-[13px]" />
        </Headings>
      </Container>
    </main>
  );
}
