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

export default function Rent() {
  return (
    <Container>
      <PageHeadings>
        <PageHeadingsTitle>Rent</PageHeadingsTitle>
      </PageHeadings>

      {/* START */}

      {/* 1 */}

      <ArticleWrapper>
        <Article>
          <ArticleHeading>
            Renting Apartments and Houses: Your Home in Turkey
          </ArticleHeading>

          <ArticleList>
            <ArticleListTitle>Types of Properties:</ArticleListTitle>
            Turkey offers a wide range of rental properties, from cozy
            apartments in bustling city centers to spacious houses in tranquil
            suburbs. TÜRKHAYATT can help you find the ideal home based on your
            preferences and budget.
          </ArticleList>

          <ArticleList>
            <ArticleListTitle>Lease Agreements:</ArticleListTitle>
            Understand the terms and conditions of lease agreements, including
            rent, security deposits, and the duration of the lease. TÜRKHAYATT
            can assist in negotiating and finalizing these agreements.
          </ArticleList>
        </Article>

        {/* 2 */}

        <Article>
          <ArticleHeading>
            Renting a Store: Establishing Your Business
          </ArticleHeading>

          <ArticleList>
            <ArticleListTitle>Choosing the Right Location:</ArticleListTitle>
            Finding the perfect location for your business is crucial. Türk
            Hayatt can help you identify prime commercial spaces and negotiate
            favorable lease terms.
          </ArticleList>

          <ArticleList>
            <ArticleListTitle>Commercial Lease Agreements:</ArticleListTitle>
            Commercial leases can be complex. TÜRKHAYATT's experts can guide you
            through lease negotiations, ensuring your interests are protected.
          </ArticleList>
        </Article>

        {/* 3 */}

        <Article>
          <ArticleHeading>
            Renting an Automobile: Exploring Turkey with Ease
          </ArticleHeading>

          <ArticleList>
            <ArticleListTitle>Car Rental Services:</ArticleListTitle>
            TÜRKHAYATT can connect you with reputable car rental agencies,
            allowing you to explore Turkey at your own pace.
          </ArticleList>

          <ArticleList>
            <ArticleListTitle>Driver's License:</ArticleListTitle>
            Understand the requirements for renting a car, including the type of
            driver's license you need and any age restrictions.
          </ArticleList>
        </Article>

        {/* 4 */}

        <Article>
          <ArticleHeading>
            Renting Motorcycles: Embrace Adventure
          </ArticleHeading>

          <ArticleList>
            <ArticleListTitle>Motorcycle Rentals:</ArticleListTitle>
            If you're looking for adventure, Türk Haya can help you rent
            motorcycles for exhilarating rides through Turkey's picturesque
            landscapes.
          </ArticleList>

          <ArticleList>
            <ArticleListTitle>Safety and Licensing:</ArticleListTitle>
            Ensure you have the necessary licenses and safety gear to ride
            motorcycles in Turkey safely.
          </ArticleList>
        </Article>

        {/* 5 */}

        <Article>
          <ArticleHeading>How TÜRKHAYATT Can Assist You?</ArticleHeading>

          <ArticleList>
            <ArticleListTitle>Property Search:</ArticleListTitle>
            If you're looking for adventure, Türk Haya can help you rent
            motorcycles for exhilarating rides through Turkey's picturesque
            landscapes.
          </ArticleList>

          <ArticleList>
            <ArticleListTitle>Negotiations:</ArticleListTitle>
            Our team can negotiate lease terms and conditions on your behalf to
            secure the best deal.
          </ArticleList>

          <ArticleList>
            <ArticleListTitle>Legal Assistance:</ArticleListTitle>
            TÜRKHAYATT provides legal support to ensure your rental agreements
            are in compliance with Turkish laws.
          </ArticleList>

          <ArticleList>
            <ArticleListTitle>Transportation Services:</ArticleListTitle>
            We connect you with trusted car and motorcycle rental providers,
            simplifying your transportation needs.
          </ArticleList>
        </Article>

        {/* 6 */}

        <Article>
          <ArticleHeading>Explore Turkey with TÜRKHAYATT</ArticleHeading>
          <ArticleParagraph>
            Whether you're seeking a place to call home, a commercial space for
            your business, a vehicle to explore, or a motorcycle for adventure,
            TÜRKHAYATT is your trusted partner in securing the right rental in
            Turkey.
          </ArticleParagraph>
        </Article>

        {/* Contact */}

        <Article>
          <ArticleParagraph>
            <ArticleContact /> today to begin your journey in Turkey with
            comfort and convenience, knowing you have Türk Haya's support every
            step of the way.
          </ArticleParagraph>
        </Article>
      </ArticleWrapper>
    </Container>
  );
}
