import { ContactBtn } from "@/components/contactbtn";
import { Container } from "@/components/container";
import {
  PageHeadings,
  PageHeadingsSubtitle,
  PageHeadingsTitle,
} from "@/components/sections/pageHeadings";
import { Article, ArticleParagraph } from "@/components/services/article";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faqs() {
  return (
    <main>
      <Container>
        <PageHeadings>
          <PageHeadingsTitle>FAQs</PageHeadingsTitle>
          <PageHeadingsSubtitle className=" text-darkGrey">
            Find answers to your questions here.
          </PageHeadingsSubtitle>
        </PageHeadings>

        {/* ACCORDION */}

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              What is TÜRKHAYATT, and what services do you offer?
            </AccordionTrigger>
            <AccordionContent>
              TÜRKHAYATT is a premier service provider in Turkey, offering a
              wide array of services, including tourism, education, health,
              translation, counseling, accommodations, and assistance with
              government inquiries like residence permits and more. We are your
              one-stop solution for all your needs in Turkey.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              Can you help me plan my trip to Turkey?
            </AccordionTrigger>
            <AccordionContent>
              Yes, TÜRKHAYATT offers expert trip planning services to help you
              organize every aspect of your visit to Turkey, including
              accommodation, transportation, and activities.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              Do you offer educational services for international students?
            </AccordionTrigger>
            <AccordionContent>
              Absolutely. We provide educational services to international
              students, including assistance with school enrollment, language
              courses, and academic counseling.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>
              How can I book accommodation through TÜRKHAYATT?
            </AccordionTrigger>
            <AccordionContent>
              You can book accommodation through TÜRKHAYATT by contacting our
              team via phone, email, or visit our office in Bursa. We offer a
              range of rental options to suit your needs and preferences.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>
              Can TÜRKHAYATT help with health-related services in Turkey?
            </AccordionTrigger>
            <AccordionContent>
              Yes, TÜRKHAYATT offers assistance with health-related services,
              including finding the right healthcare providers, scheduling
              appointments, and providing translation services during medical
              consultations.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger>
              What languages do you provide translation services for?
            </AccordionTrigger>
            <AccordionContent>
              TÜRKHAYATT provides translation services in multiple languages,
              including English, Arabic, French, and more. Contact us to find
              out if we support your language.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger>
              How does TÜRKHAYATT assist with government inquiries like
              residence permits?
            </AccordionTrigger>
            <AccordionContent>
              We assist with government inquiries by providing guidance on the
              required documentation, helping you complete and submit
              applications, and offering support throughout the entire process
              for residence permits and other legal matters.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-10">
            <AccordionTrigger>
              What payment methods are accepted for TÜRKHAYATT services?
            </AccordionTrigger>
            <AccordionContent>
              TÜRKHAYATT accepts various payment methods, including Cash, debit
              cards, bank transfers, and online payment platforms. Please
              contact us for specific payment options.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-11">
            <AccordionTrigger>
              Can I modify or cancel my bookings with TÜRKHAYATT?
            </AccordionTrigger>
            <AccordionContent>
              Yes, you can modify or cancel your bookings with TÜRKHAYATT.
              Please contact our team for assistance.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Article className="my-[34px] md:my-[89px]">
          <ArticleParagraph className=" text-center">
            Didn't find the answers you're looking for? Contact us today and get
            the information you need.
          </ArticleParagraph>
        </Article>

        <ContactBtn />
      </Container>
    </main>
  );
}
