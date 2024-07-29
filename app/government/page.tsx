import { Container } from "@/components/container";
import {
  PageHeadings,
  PageHeadingsTitle,
} from "@/components/sections/pageHeadings";
import {
  ArticleWrapper,
  Article,
  ArticleHeading,
  ArticleParagraph,
  ArticleContact,
  ArticleList,
  ArticleListTitle,
} from "@/components/services/article";
import React from "react";

export default function Goverment() {
  return (
    <Container>
      <PageHeadings>
        <PageHeadingsTitle>Goverment</PageHeadingsTitle>
      </PageHeadings>

      {/* START */}

      {/* 1 */}

      <ArticleWrapper>
        <Article>
          <ArticleHeading>TÜRKHAYATT and Legal Expertise</ArticleHeading>
          <ArticleParagraph>
            At TÜRKHAYATT, we understand the importance of accurate legal
            information and seamless interactions with government agencies. We
            collaborate with experienced lawyers and legal experts to ensure
            that you receive precise and up-to-date information regarding
            various government processes in Turkey.
          </ArticleParagraph>
        </Article>

        {/* 2 */}
        <Article>
          <ArticleHeading>Residence Permits</ArticleHeading>
          <ArticleParagraph>
            If you plan to live in Turkey for an extended period, you may need a
            residence permit. TÜRKHAYATT can assist you in understanding the
            requirements, preparing necessary documents, and guiding you through
            the application process, ensuring that your transition to life in
            Turkey is hassle-free.
          </ArticleParagraph>
        </Article>

        {/* 3 */}
        <Article>
          <ArticleHeading>Nationality Applications</ArticleHeading>
          <ArticleParagraph>
            Turkey offers a pathway to Turkish citizenship for eligible
            applicants. TÜRKHAYATT can provide information about the criteria
            for citizenship, assist in preparing your application, and guide you
            through the steps required for acquiring Turkish nationality.
          </ArticleParagraph>
        </Article>

        {/* 4 */}
        <Article>
          <ArticleHeading>Property Purchase Assistance</ArticleHeading>
          <ArticleParagraph>
            Investing in real estate in Turkey is an attractive option for many.
            TÜRKHAYATT collaborates with experts in real estate law and can
            assist you in finding suitable properties, understanding legal
            aspects, and facilitating the purchase process, making property
            acquisition in Turkey a smooth experience.
          </ArticleParagraph>
        </Article>

        {/* 5 */}
        <Article>
          <ArticleHeading>Property Purchase Assistance</ArticleHeading>
          <ArticleParagraph>
            TÜRKHAYATT offers a wide range of government-related services,
            including:
          </ArticleParagraph>

          <ArticleList>
            <ArticleListTitle>Legal Consultation: </ArticleListTitle>Our
            partnership with lawyers and legal experts can provide advice on
            various legal matters, ensuring you make informed decisions.
          </ArticleList>

          <ArticleList>
            <ArticleListTitle>Legal Consultation: </ArticleListTitle>We can act
            as intermediaries between you and government agencies, helping you
            communicate effectively and resolve any issues that may arise during
            your stay in Turkey.
          </ArticleList>

          <ArticleList>
            <ArticleListTitle>Document Translation: </ArticleListTitle>Türk
            Hayatt provides translation services for official documents,
            ensuring that all your paperwork is accurate and in compliance with
            Turkish regulations.
          </ArticleList>
        </Article>

        {/* 6 */}
        <Article>
          <ArticleHeading>
            Contact TÜRKHAYATT for Expert Assistance
          </ArticleHeading>
          <ArticleParagraph>
            If you require assistance or information regarding
            government-related matters in Turkey, don't hesitate to reach out to
            TÜRKHAYATT. Our team of experts is ready to provide guidance, answer
            your questions, and assist you in navigating the legal landscape of
            Turkey.
          </ArticleParagraph>
        </Article>

        {/* Contact */}

        <Article>
          <ArticleParagraph>
            <ArticleContact /> today to begin your journey through Turkish
            governance, and let TÜRKHAYATT's expertise guide you to successful
            outcomes in legal and governmental matters.
          </ArticleParagraph>
        </Article>
      </ArticleWrapper>
    </Container>
  );
}
