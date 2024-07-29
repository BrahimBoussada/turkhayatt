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
import { Mail, MapPin } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <main>
      <Container>
        <PageHeadings>
          <PageHeadingsTitle>Contact us</PageHeadingsTitle>
          <PageHeadingsSubtitle className=" text-darkGrey">
            Let us know how we can help.
          </PageHeadingsSubtitle>
        </PageHeadings>

        <ContactCardWrapper>
          {/* Email */}

          <ContactCard>
            <ContactCardImage>
              <Whatsapp />
            </ContactCardImage>
            <ContactCardHeading>Chat with us</ContactCardHeading>
            <ContactCardSubHeading>
              Mon-Fri from 7am to 10pm
            </ContactCardSubHeading>
            <ContactCardContact>+90 (552) 667-82-30</ContactCardContact>
          </ContactCard>

          {/* Phone */}

          <ContactCard>
            <ContactCardImage>
              <Mail className=" w-[27px] h-[27px]" />
            </ContactCardImage>
            <ContactCardHeading>Email us</ContactCardHeading>
            <ContactCardSubHeading>We are here to help.</ContactCardSubHeading>
            <ContactCardContact>
              <a href="mailto: merhaba@turkhayatt.com">
                merhaba@turkhayatt.com
              </a>
            </ContactCardContact>
          </ContactCard>

          {/* Office */}

          <ContactCard>
            <ContactCardImage>
              <MapPin className=" w-[27px] h-[27px]" />
            </ContactCardImage>
            <ContactCardHeading>Visit us</ContactCardHeading>
            <ContactCardSubHeading>
              Visit our office HQ. <br />
              We are located on 9th floor, Office 907
            </ContactCardSubHeading>
            <ContactCardContact>
              <a href="https://maps.app.goo.gl/9WVzEA6fprpgVSnaA">
                View on Google Maps.
              </a>
            </ContactCardContact>
          </ContactCard>
        </ContactCardWrapper>

        <Headings>
          <HeadingsTitle>Ready to start your journey?</HeadingsTitle>
          <HeadingsSubtitle>We are here anytime you need us.</HeadingsSubtitle>
        </Headings>
      </Container>
    </main>
  );
}
