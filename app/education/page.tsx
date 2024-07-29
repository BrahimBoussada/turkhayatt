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

export default function Education() {
  return (
    <Container>
      <PageHeadings>
        <PageHeadingsTitle>Education</PageHeadingsTitle>
      </PageHeadings>

      {/* START */}

      {/* 1 */}

      <ArticleWrapper>
        <Article>
          <ArticleHeading>Education in Turkey</ArticleHeading>
          <ArticleParagraph>
            Turkey has a rich educational heritage with a mix of traditional and
            modern institutions. Turkish universities offer a wide range of
            programs, from undergraduate to doctoral studies, making it an
            attractive destination for international students seeking quality
            education.
          </ArticleParagraph>
        </Article>

        {/* 2 */}

        <Article>
          <ArticleHeading>TÖMER Language Courses</ArticleHeading>

          <ArticleList>
            <ArticleListTitle>What is TÖMER?:</ArticleListTitle> TÖMER (Türkçe
            Öğretim Merkezi) is the Turkish Language Teaching Center, offering
            Turkish language courses to non-native speakers. These courses help
            international students improve their language skills and meet
            language requirements for university admission.
          </ArticleList>

          <ArticleList>
            <ArticleListTitle>Why TÖMER?:</ArticleListTitle> Proficiency in
            Turkish is often required for admission to Turkish universities.
            TÖMER courses provide the necessary language skills to excel in
            academic studies and daily life in Turkey.
          </ArticleList>

          <ArticleList>
            <ArticleListTitle>TÜRKHAYATT Assistance:</ArticleListTitle> Türk
            Hayatt can assist you in enrolling in TÖMER courses, helping you
            meet language proficiency requirements for your desired program.
          </ArticleList>
        </Article>

        {/* 3 */}

        <Article>
          <ArticleHeading>Private and Public Universities</ArticleHeading>

          <ArticleList>
            <ArticleListTitle>Private Universities:</ArticleListTitle> Turkey
            has numerous private universities known for their quality education
            and international programs. These universities often offer
            instruction in English, making them accessible to international
            students.
          </ArticleList>

          <ArticleList>
            <ArticleListTitle>Public Universities:</ArticleListTitle>
            Public universities in Turkey offer a wide range of programs and are
            known for their strong academic traditions. Some public universities
            offer English-taught programs, while others may require Turkish
            proficiency.
          </ArticleList>

          <ArticleList>
            <ArticleListTitle>Admission Requirements:</ArticleListTitle>
            Admission requirements vary between universities and programs. Türk
            Hayatt can help you navigate these requirements and assist with the
            application process.
          </ArticleList>
        </Article>

        {/* 4 */}

        <Article>
          <ArticleHeading>Admission Requirements</ArticleHeading>

          <ArticleList>A completed application form.</ArticleList>
          <ArticleList>
            A high school diploma or equivalent for undergraduate programs.
          </ArticleList>
          <ArticleList>
            A bachelor's degree for master's and doctoral programs.
          </ArticleList>
          <ArticleList>
            Proof of language proficiency (usually Turkish or English).
          </ArticleList>
          <ArticleList>
            Transcripts, letters of recommendation, and a statement of purpose.
          </ArticleList>
        </Article>

        {/* 5 */}

        <Article>
          <ArticleHeading>How TÜRKHAYATT Can Help?</ArticleHeading>
          <ArticleParagraph>
            TÜRKHAYATT is dedicated to helping you achieve your educational
            goals in Turkey. Our services include:
          </ArticleParagraph>
          <ArticleList>
            <ArticleListTitle>University Application Support:</ArticleListTitle>{" "}
            We assist you in the application process, ensuring all documents are
            correctly prepared and submitted on time.
          </ArticleList>

          <ArticleList>
            <ArticleListTitle>Visa Assistance:</ArticleListTitle>
            TÜRKHAYATT helps you navigate the visa application process,
            providing guidance and support.
          </ArticleList>

          <ArticleList>
            <ArticleListTitle>Language Assistance:</ArticleListTitle>
            TÜRKHAYATT provides language translation and interpretation services
            to bridge any language barriers.
          </ArticleList>
        </Article>

        {/* 6 */}
        <Article>
          <ArticleHeading>Your Educational Journey Begins</ArticleHeading>
          <ArticleParagraph>
            Pursuing education in Turkey is an exciting endeavor. Whether you
            aim to gain proficiency in Turkish through TÖMER, study at a
            prestigious Turkish university, or need assistance with admissions
            and visa processes, TÜRKHAYATT is here to support you every step of
            the way.
          </ArticleParagraph>
        </Article>

        {/* Contact */}

        <Article>
          <ArticleParagraph>
            <ArticleContact /> today to start your educational journey in
            Turkey, and let Türk Haya be your guide to success in academics and
            beyond.
          </ArticleParagraph>
        </Article>
      </ArticleWrapper>
    </Container>
  );
}
