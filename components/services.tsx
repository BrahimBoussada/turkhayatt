import Image from "next/image";
import Link from "next/link";

export const Services = () => {
  return (
    <div>
      {/* 1 */}

      <div>
        <div className="flex flex-col sm:flex-row sm:justify-between">
          {/* TEXT & PARAGRAPH */}
          <div className=" flex flex-col sm:w-1/2 justify-between ">
            <div>
              <h3 className="font-medium text-[27px] sm:text-[44px] mb-[8px]">
                Health
              </h3>
              <Image
                className=" sm:hidden mb-[13px]"
                src={"/serv/health.png"}
                alt={"MD"}
                width={540}
                height={360}
                quality={95}
              />
              <p className="text-[16px] sm:text-[16px] sm:w-5/6 mb-[21px]">
                Your health is our priority. TÜRKHAYATT's health services
                connect you with trusted healthcare providers and wellness
                experiences.
              </p>
            </div>

            <Link href={"/health"} className="hidden sm:flex">
              <p className=" text-red hover:text-red/80 underline text-[16px]">
                LEARN MORE
              </p>
            </Link>
          </div>

          {/*       IMAGE AND LINK */}
          <div>
            <Image
              className="hidden sm:flex"
              src={"/serv/health.png"}
              alt={"MD"}
              width={540}
              height={360}
              quality={95}
            />
            <Link href={"/health"} className=" sm:hidden">
              <p className=" text-red hover:text-red/80 underline text-[14px]">
                LEARN MORE
              </p>
            </Link>
          </div>
        </div>
        <div className="h-[2px] bg-divider w-full mt-[21px] mb-[21px]" />
      </div>

      {/* 2 */}
      <div>
        <div className="flex flex-col sm:flex-row sm:justify-between ">
          {/* TEXT & PARAGRAPH */}
          <div className=" flex flex-col sm:w-1/2 justify-between ">
            <div>
              <h3 className="font-medium text-[27px] sm:text-[44px] mb-[8px]">
                Education
              </h3>
              <Image
                className=" sm:hidden mb-[13px]"
                src={"/serv/education.png"}
                alt={"MD"}
                width={540}
                height={360}
                quality={95}
              />
              <p className="text-[16px] sm:text-[16px] sm:w-5/6 mb-[21px]">
                Unlock your academic potential with TÜRKHAYATT's education
                services. We assist international students in achieving their
                educational dreams in Turkey.
              </p>
            </div>

            <Link href={"/health"} className="hidden sm:flex">
              <p className=" text-red hover:text-red/80 underline text-[16px]">
                LEARN MORE
              </p>
            </Link>
          </div>

          {/*       IMAGE AND LINK */}
          <div>
            <Image
              className="hidden sm:flex"
              src={"/serv/education.png"}
              alt={"MD"}
              width={540}
              height={360}
              quality={95}
            />
            <Link href={"/health"} className=" sm:hidden">
              <p className=" text-red hover:text-red/80 underline text-[14px]">
                LEARN MORE
              </p>
            </Link>
          </div>
        </div>
        <div className="h-[2px] bg-divider w-full mt-[21px] mb-[21px]" />
      </div>
      {/* 3 */}
      <div>
        <div className="flex flex-col sm:flex-row sm:justify-between">
          {/* TEXT & PARAGRAPH */}
          <div className=" flex flex-col sm:w-1/2 justify-between ">
            <div>
              <h3 className="font-medium text-[27px] sm:text-[44px] mb-[8px]">
                Tourism
              </h3>
              <Image
                className=" sm:hidden mb-[13px]"
                src={"/serv/tourism.png"}
                alt={"MD"}
                width={540}
                height={360}
                quality={95}
              />
              <p className="text-[16px] sm:text-[16px] sm:w-5/6 mb-[21px]">
                Explore the wonders of Turkey with Türk Haytt. From historical
                treasures to breathtaking landscapes, let us guide you through a
                journey of a lifetime.
              </p>
            </div>

            <Link href={"/health"} className="hidden sm:flex">
              <p className=" text-red hover:text-red/80 underline text-[16px]">
                LEARN MORE
              </p>
            </Link>
          </div>

          {/*       IMAGE AND LINK */}
          <div>
            <Image
              className="hidden sm:flex"
              src={"/serv/tourism.png"}
              alt={"MD"}
              width={540}
              height={360}
              quality={95}
            />
            <Link href={"/health"} className=" sm:hidden">
              <p className=" text-red hover:text-red/80 underline text-[14px]">
                LEARN MORE
              </p>
            </Link>
          </div>
        </div>
        <div className="h-[2px] bg-divider w-full mt-[21px] mb-[21px]" />
      </div>
      {/* 4 */}
      <div>
        <div className="flex flex-col sm:flex-row sm:justify-between">
          {/* TEXT & PARAGRAPH */}
          <div className=" flex flex-col sm:w-1/2 justify-between ">
            <div>
              <h3 className="font-medium text-[27px] sm:text-[44px] mb-[8px]">
                Rental
              </h3>
              <Image
                className=" sm:hidden mb-[13px]"
                src={"/serv/rent.png"}
                alt={"MD"}
                width={540}
                height={360}
                quality={95}
              />
              <p className="text-[16px] sm:text-[16px] sm:w-5/6 mb-[21px]">
                Find comfort and convenience in Turkey with TÜRKHAYATT's
                accommodation services. Discover your home away from home.
              </p>
            </div>

            <Link href={"/health"} className="hidden sm:flex">
              <p className=" text-red hover:text-red/80 underline text-[16px]">
                LEARN MORE
              </p>
            </Link>
          </div>

          {/*       IMAGE AND LINK */}
          <div>
            <Image
              className="hidden sm:flex"
              src={"/serv/rent.png"}
              alt={"MD"}
              width={540}
              height={360}
              quality={95}
            />
            <Link href={"/health"} className=" sm:hidden">
              <p className=" text-red hover:text-red/80 underline text-[14px]">
                LEARN MORE
              </p>
            </Link>
          </div>
        </div>
        <div className="h-[2px] bg-divider w-full mt-[21px] mb-[21px]" />
      </div>
      {/* 5 */}
      <div>
        <div className="flex flex-col sm:flex-row sm:justify-between">
          {/* TEXT & PARAGRAPH */}
          <div className=" flex flex-col sm:w-1/2 justify-between ">
            <div>
              <h3 className="font-medium text-[27px] sm:text-[44px] mb-[8px]">
                Transportation
              </h3>
              <Image
                className=" sm:hidden mb-[13px]"
                src={"/serv/transportation.png"}
                alt={"MD"}
                width={540}
                height={360}
                quality={95}
              />
              <p className="text-[16px] sm:text-[16px] sm:w-5/6 mb-[21px]">
                Travel stress-free with Türk Haya's transportation services.
                From airport transfers to city transportation, we've got your
                journey covered.
              </p>
            </div>

            <Link href={"/health"} className="hidden sm:flex">
              <p className=" text-red hover:text-red/80 underline text-[16px]">
                LEARN MORE
              </p>
            </Link>
          </div>

          {/*       IMAGE AND LINK */}
          <div>
            <Image
              className="hidden sm:flex"
              src={"/serv/transportation.png"}
              alt={"MD"}
              width={540}
              height={360}
              quality={95}
            />
            <Link href={"/health"} className=" sm:hidden">
              <p className=" text-red hover:text-red/80 underline text-[14px]">
                LEARN MORE
              </p>
            </Link>
          </div>
        </div>
        <div className="h-[2px] bg-divider w-full mt-[21px] mb-[21px]" />
      </div>
      {/* 6 */}
      <div>
        <div className="flex flex-col sm:flex-row sm:justify-between">
          {/* TEXT & PARAGRAPH */}
          <div className=" flex flex-col sm:w-1/2 justify-between ">
            <div>
              <h3 className="font-medium text-[27px] sm:text-[44px] mb-[8px]">
                Translation
              </h3>
              <Image
                className=" sm:hidden mb-[13px]"
                src={"/serv/translation.png"}
                alt={"MD"}
                width={540}
                height={360}
                quality={95}
              />
              <p className="text-[16px] sm:text-[16px] sm:w-5/6 mb-[21px]">
                Break down language barriers with Türk Haya's translation
                services. Communicate effectively in any language.
              </p>
            </div>

            <Link href={"/health"} className="hidden sm:flex">
              <p className=" text-red hover:text-red/80 underline text-[16px]">
                LEARN MORE
              </p>
            </Link>
          </div>

          {/*       IMAGE AND LINK */}
          <div>
            <Image
              className="hidden sm:flex"
              src={"/serv/translation.png"}
              alt={"MD"}
              width={540}
              height={360}
              quality={95}
            />
            <Link href={"/health"} className=" sm:hidden">
              <p className=" text-red hover:text-red/80 underline text-[14px]">
                LEARN MORE
              </p>
            </Link>
          </div>
        </div>
        <div className="h-[2px] bg-divider w-full mt-[21px] mb-[21px]" />
      </div>
      {/* 7 */}
      <div>
        <div className="flex flex-col sm:flex-row sm:justify-between">
          {/* TEXT & PARAGRAPH */}
          <div className=" flex flex-col sm:w-1/2 justify-between ">
            <div>
              <h3 className="font-medium text-[27px] sm:text-[44px] mb-[8px]">
                Government Inquiries
              </h3>
              <Image
                className=" sm:hidden mb-[13px]"
                src={"/serv/goverment.png"}
                alt={"MD"}
                width={540}
                height={360}
                quality={95}
              />
              <p className="text-[16px] sm:text-[16px] sm:w-5/6 mb-[21px]">
                Navigating bureaucratic processes in a foreign country can be
                daunting. Türk Haya simplifies government inquiries like
                residence permits so you can focus on enjoying your time in
                Turkey.
              </p>
            </div>

            <Link href={"/health"} className="hidden sm:flex">
              <p className=" text-red hover:text-red/80 underline text-[16px]">
                LEARN MORE
              </p>
            </Link>
          </div>

          {/*       IMAGE AND LINK */}
          <div>
            <Image
              className="hidden sm:flex"
              src={"/serv/goverment.png"}
              alt={"MD"}
              width={540}
              height={360}
              quality={95}
            />
            <Link href={"/health"} className=" sm:hidden">
              <p className=" text-red hover:text-red/80 underline text-[14px]">
                LEARN MORE
              </p>
            </Link>
          </div>
        </div>
        <div className="h-[2px] bg-divider w-full mt-[21px] mb-[21px]" />
      </div>
    </div>
  );
};
