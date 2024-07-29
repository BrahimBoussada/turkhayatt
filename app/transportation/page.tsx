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

export default function Transportaion() {
  return (
    <Container>
      <PageHeadings>
        <PageHeadingsTitle>Transportaion</PageHeadingsTitle>
      </PageHeadings>

      {/* START */}

      {/* 1 */}

      <ArticleWrapper>
        <Article>
          <ArticleHeading>
            Skilled Personal Drivers: Your Dedicated Chauffeur
          </ArticleHeading>

          <ArticleList>
            <ArticleListTitle>Personal Driver Service:</ArticleListTitle> Türk
            Hayatt provides skilled personal drivers who are experienced in
            navigating Turkish roads and traffic. They offer a personalized and
            convenient way to travel around Turkey, ensuring that you reach your
            destination safely and comfortably.
          </ArticleList>

          <ArticleList>
            <ArticleListTitle>Airport Transfers:</ArticleListTitle> Our personal
            drivers can greet you at the airport, help with your luggage, and
            provide a smooth and stress-free transfer to your accommodation.
          </ArticleList>

          <ArticleList>
            <ArticleListTitle>Customized Tours:</ArticleListTitle> TÜRKHAYATT's
            personal drivers can also serve as local guides, taking you to the
            most iconic landmarks and hidden gems in Turkey.
          </ArticleList>
        </Article>

        {/* 2 */}

        <Article>
          <ArticleHeading>Public Transportation in Turkey</ArticleHeading>

          <ArticleList>
            <ArticleListTitle>Metro:</ArticleListTitle> Major cities like
            Istanbul and Ankara have well-developed metro systems that offer
            fast and convenient travel within the city.
          </ArticleList>

          <ArticleList>
            <ArticleListTitle>Tram:</ArticleListTitle> Trams are a common sight
            in many Turkish cities, providing efficient urban transportation.
          </ArticleList>

          <ArticleList>
            <ArticleListTitle>Bus:</ArticleListTitle> Buses are widely used for
            both short and long-distance travel. They connect cities, towns, and
            even remote regions.
          </ArticleList>

          <ArticleList>
            <ArticleListTitle>Ferry:</ArticleListTitle> Turkey's unique
            geography with coastlines along the Mediterranean and Aegean Seas
            offers numerous ferry services for island hopping and scenic
            cruises.
          </ArticleList>
        </Article>

        {/* 3 */}

        <Article>
          <ArticleHeading>How TÜRKHAYATT Can Assist You?</ArticleHeading>

          <ArticleList>
            <ArticleListTitle>Personalized Transportation:</ArticleListTitle>{" "}
            Türk Haya can arrange personal drivers to cater to your specific
            needs, ensuring that you have a comfortable and enjoyable travel
            experience.
          </ArticleList>

          <ArticleList>
            <ArticleListTitle>
              Guidance on Public Transportation:
            </ArticleListTitle>
            We provide information on how to use various modes of public
            transportation, including ticketing, routes, and schedules.
          </ArticleList>

          <ArticleList>
            <ArticleListTitle>Transit Planning:</ArticleListTitle> TÜRKHAYATT
            can assist you in planning your transit routes, helping you make the
            most of your time in Turkey.
          </ArticleList>
        </Article>

        {/* 4 */}
        <Article>
          <ArticleParagraph>
            Whether you prefer the convenience of a personal driver or the
            adventure of using public transportation, Türk Haya is here to make
            your journey in Turkey smooth and enjoyable.
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
