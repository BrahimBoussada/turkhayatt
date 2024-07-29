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

export default function Translation() {
  return (
    <Container>
      <PageHeadings>
        <PageHeadingsTitle>Translation</PageHeadingsTitle>
      </PageHeadings>

      {/* START */}

      {/* 1 */}

      <ArticleWrapper>
        <Article>
          <ArticleHeading>Paper Translation and Notary Services</ArticleHeading>

          <ArticleList>
            TÜRKHAYATT offers professional translation services for a wide range
            of documents, including legal, medical, academic, and more.
          </ArticleList>

          <ArticleList>
            We ensure that your translated documents are notarized, making them
            legally valid and recognized in Turkey.
          </ArticleList>
        </Article>

        {/* 2 */}

        <Article>
          <ArticleHeading>Personal Interpreter Services</ArticleHeading>

          <ArticleList>
            Our team of experienced interpreters is fluent in English, Arabic,
            French, and Turkish, making it easier for you to communicate
            effectively in various settings.
          </ArticleList>

          <ArticleList>
            Whether it's a business meeting, a medical appointment, or a legal
            consultation, TÜRKHAYATT's interpreters ensure accurate and smooth
            communication.
          </ArticleList>
        </Article>

        {/* 3 */}

        <Article>
          <ArticleHeading>How TÜRKHAYATT Can Assist You?</ArticleHeading>

          <ArticleList>
            TÜRKHAYATT is your partner in breaking language barriers in Turkey.
            We provide precise translations, reliable notary services, and
            experienced interpreters.
          </ArticleList>

          <ArticleList>
            Our commitment to quality and accuracy ensures that your
            interactions and documents are effectively conveyed in the language
            of your choice.
          </ArticleList>
        </Article>

        {/* 4 */}

        <Article>
          <ArticleParagraph>
            Whether you need documents translated, notarized, or require
            personal interpreters for important meetings, TÜRKHAYATT is your
            trusted partner for all your translation and interpretation
            requirements.
          </ArticleParagraph>
        </Article>

        {/* Contact */}

        <Article>
          <ArticleParagraph>
            <ArticleContact /> today, and let TÜRKHAYATT be your bridge to
            seamless and accurate communication in multiple languages.
          </ArticleParagraph>
        </Article>
      </ArticleWrapper>
    </Container>
  );
}
