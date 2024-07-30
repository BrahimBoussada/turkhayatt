import {
  ContactCard,
  ContactCardContact,
  ContactCardHeading,
  ContactCardImage,
  ContactCardSubHeading,
  ContactCardWrapper,
} from "@/components/contactCard";
import { Container } from "@/components/container";
import { Whatsapp } from "@/components/icons/whatsApp";
import {
  Headings,
  HeadingsSubtitle,
  HeadingsTitle,
} from "@/components/sections/headings";
import {
  PageHeadings,
  PageHeadingsTitle,
  PageHeadingsSubtitle,
} from "@/components/sections/pageHeadings";
import {
  ServiceCards,
  ServiceCardsIcon,
  ServiceCardsTitle,
  ServiceCardsWrapper,
} from "@/components/serviceCards";
import { Mail, MapPin } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <main>
      <Container>
        <PageHeadings>
          <PageHeadingsTitle>Services</PageHeadingsTitle>
          <PageHeadingsSubtitle className=" text-darkGrey">
            We’re here to help with whatever you need.
          </PageHeadingsSubtitle>
        </PageHeadings>

        <ServiceCardsWrapper>
          {/* 1 */}
          <ServiceCards href="/tourism">
            <ServiceCardsTitle>Tourism</ServiceCardsTitle>
            <ServiceCardsIcon></ServiceCardsIcon>
          </ServiceCards>

          {/* 2 */}
          <ServiceCards href="/education">
            <ServiceCardsTitle>Education</ServiceCardsTitle>
            <ServiceCardsIcon></ServiceCardsIcon>
          </ServiceCards>

          {/* 3 */}
          <ServiceCards href="/health">
            <ServiceCardsTitle>Health</ServiceCardsTitle>
            <ServiceCardsIcon></ServiceCardsIcon>
          </ServiceCards>

          {/* 4 */}
          <ServiceCards href="/transportation">
            <ServiceCardsTitle>Transporation</ServiceCardsTitle>
            <ServiceCardsIcon></ServiceCardsIcon>
          </ServiceCards>

          {/* 5 */}
          <ServiceCards href="/translation">
            <ServiceCardsTitle>Translation</ServiceCardsTitle>
            <ServiceCardsIcon></ServiceCardsIcon>
          </ServiceCards>

          {/* 6 */}
          <ServiceCards href="/rent">
            <ServiceCardsTitle>Rent</ServiceCardsTitle>
            <ServiceCardsIcon></ServiceCardsIcon>
          </ServiceCards>

          {/* 7 */}
          <ServiceCards href="/government">
            <ServiceCardsTitle>
              Government <br />
              Inquiries
            </ServiceCardsTitle>
            <ServiceCardsIcon></ServiceCardsIcon>
          </ServiceCards>
        </ServiceCardsWrapper>
      </Container>
    </main>
  );
}
