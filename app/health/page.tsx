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

export default function Health() {
  return (
    <Container>
      <PageHeadings>
        <PageHeadingsTitle>Heath</PageHeadingsTitle>
      </PageHeadings>

      {/* START */}

      {/* 1 */}

      <ArticleWrapper>
        <Article>
          <ArticleHeading>Health in Turkey</ArticleHeading>
          <ArticleParagraph>
            Turkey has a well-developed healthcare system, with modern
            hospitals, clinics, and skilled medical professionals. Healthcare
            standards in Turkey are in line with international norms, and many
            medical practitioners are trained in Western countries. This makes
            Turkey a popular destination for medical tourism.
          </ArticleParagraph>
        </Article>

        {/* 2 */}

        <Article>
          <ArticleHeading>Medication in Turkey (Ezcane)</ArticleHeading>
          <ArticleParagraph>
            In Turkey, you can find pharmacies, known as "Ezcane," throughout
            the country. These pharmacies offer a wide range of medications,
            both prescription and over-the-counter drugs. Pharmacists in Turkey
            are highly trained and can provide expert advice on medications.
            Türk Haya can assist you in finding the nearest ezcane and obtaining
            any necessary medications.
          </ArticleParagraph>
        </Article>

        {/* 3 */}

        <Article>
          <ArticleHeading>
            How TÜRKHAYATT Can Help with Your Health Needs?
          </ArticleHeading>
          <ArticleParagraph>
            At Türk Haya, we are committed to ensuring your health and
            well-being during your stay in Turkey. Our services include:
          </ArticleParagraph>

          <ArticleList>
            <ArticleListTitle>Medical Appointments:</ArticleListTitle> We can
            schedule medical appointments with trusted healthcare providers,
            ensuring you receive timely care.
          </ArticleList>

          <ArticleList>
            <ArticleListTitle>Medication Assistance:</ArticleListTitle> Türk
            Hayatt can help you obtain your prescribed medications from local
            pharmacies.
          </ArticleList>

          <ArticleList>
            <ArticleListTitle>Translation Services:</ArticleListTitle> We
            provide translation services to bridge language barriers during
            medical consultations.
          </ArticleList>
        </Article>

        {/* 4 */}

        <Article>
          <ArticleHeading>
            Procedure for Accessing Healthcare in Turkey
          </ArticleHeading>
          <ArticleParagraph>
            Accessing healthcare in Turkey is straightforward:
          </ArticleParagraph>

          <ArticleList>
            If you have a medical emergency, dial 112 for assistance.
          </ArticleList>

          <ArticleList>
            For non-emergency medical needs, contact TÜRKHAYATT for guidance and
            appointment scheduling.
          </ArticleList>

          <ArticleList>
            Always carry your identification, insurance, and any relevant
            medical documents when visiting healthcare facilities.
          </ArticleList>
        </Article>

        {/* 5 */}

        <Article>
          <ArticleHeading>Specific Health Treatments in Turkey</ArticleHeading>

          <ArticleList>
            <ArticleListTitle>Cancer Treatment:</ArticleListTitle> Turkey offers
            advanced cancer treatments and therapies in specialized oncology
            centers. Türk Haya can help you connect with renowned oncologists
            and cancer treatment facilities.
          </ArticleList>

          <ArticleList>
            <ArticleListTitle>Diabetes Management:</ArticleListTitle> Access to
            diabetes care in Turkey is excellent. You can find diabetes clinics
            and experienced endocrinologists for comprehensive management.
          </ArticleList>

          <ArticleList>
            <ArticleListTitle>Eye Treatment:</ArticleListTitle> Turkey is a hub
            for eye treatments, including LASIK, cataract surgery, and retinal
            procedures. TÜRKHAYATT can assist you in finding reputable eye
            clinics.
          </ArticleList>

          <ArticleList>
            <ArticleListTitle>Bone Fracture Care:</ArticleListTitle> In case of
            a bone fracture, Türk Haya can arrange immediate medical attention
            and connect you with orthopedic specialists.
          </ArticleList>
        </Article>

        {/* 6 */}

        <Article>
          <ArticleHeading>Specific Health Treatments in Turkey</ArticleHeading>

          <ArticleList>
            <ArticleListTitle>Cancer Treatment:</ArticleListTitle> Turkey offers
            advanced cancer treatments and therapies in specialized oncology
            centers. Türk Haya can help you connect with renowned oncologists
            and cancer treatment facilities.
          </ArticleList>

          <ArticleList>
            <ArticleListTitle>Diabetes Management:</ArticleListTitle> Access to
            diabetes care in Turkey is excellent. You can find diabetes clinics
            and experienced endocrinologists for comprehensive management.
          </ArticleList>

          <ArticleList>
            <ArticleListTitle>Eye Treatment:</ArticleListTitle> Turkey is a hub
            for eye treatments, including LASIK, cataract surgery, and retinal
            procedures. TÜRKHAYATT can assist you in finding reputable eye
            clinics.
          </ArticleList>

          <ArticleList>
            <ArticleListTitle>Dental Care:</ArticleListTitle> Turkey boasts
            world-class dental clinics offering a wide range of services, from
            routine check-ups to cosmetic dentistry.
          </ArticleList>

          <ArticleList>
            <ArticleListTitle>Bone Fracture Care:</ArticleListTitle> In case of
            a bone fracture, Türk Haya can arrange immediate medical attention
            and connect you with orthopedic specialists.
          </ArticleList>

          <ArticleList>
            <ArticleListTitle>Mental Health:</ArticleListTitle> Turkey boasts
            world-class dental clinics offering a wide range of services, from
            routine check-ups to cosmetic dentistry.
          </ArticleList>
        </Article>

        {/* 7 */}

        <Article>
          <ArticleParagraph>
            Your health and well-being are our top priorities at Türk Haya.
            Whether you require urgent medical attention or are seeking
            preventative care, our team is dedicated to ensuring you receive the
            best healthcare services in Turkey.
          </ArticleParagraph>
        </Article>

        <Article>
          <ArticleParagraph>
            <ArticleContact /> for personalized assistance and a worry-free
            experience in managing your health during your stay.
          </ArticleParagraph>
        </Article>

        {/* Contact */}
      </ArticleWrapper>
    </Container>
  );
}
