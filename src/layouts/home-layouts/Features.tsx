import React from "react";
import { CTACardInfo } from "../../data/CTACardInfo";
import { FeaturesCardInfo } from "../../data/FeaturesCardInfo";

type FeaturesTitleProps = {
  title: string;
  description: string;
};

export function FeaturesTitle({ title, description }: FeaturesTitleProps) {
  return (
    <div className="flex flex-col w-full mb-8 text-center">
      <h3 className="text-2xl md:text-3xl font-medium mb-4 tracking-wide">
        {title}
      </h3>
      <p className="lg:w-1/2 mx-auto leading-relaxed">{description}</p>
    </div>
  );
}

type FeaturesContainerProps = {
  children: React.ReactNode;
};


export function FeaturesContainer({ children }: FeaturesContainerProps) {
  return (
    <section className="grid place-items-center" id="about">
      <div className="container mx-auto px-5 py-20">{children}</div>
    </section>
  );
}

type FeaturesCardContainerProps = {
  children: React.ReactNode;
};

export function FeaturesCardContainer({
  children,
}: FeaturesCardContainerProps) {
  return <div className="flex flex-wrap -m-4 justify-center">{children}</div>;
}

type FeaturesCardProps = {
  iconSrc: string;
  bg: string;
  title: string;
  description: string;
};

export function FeaturesCard({
  iconSrc,
  bg,
  title,
  description,
}: FeaturesCardProps) {
  return (
    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
      <div className="border-2 rounded-lg border-gray-300 p-4">
        <span
          className={`w-8 h-8 ${bg} inline-flex items-center justify-center rounded`}
        >
          <img className="w-4 h-4" src={iconSrc} alt="" />
        </span>
        <h5 className="font-medium mt-3">{title}</h5>
        <p className="mt-1 text-sm">{description}</p>
      </div>
    </div>
  );
}

type CTACardContainerProps = {
  children: React.ReactNode;
};

export function CTACardContainer({ children }: CTACardContainerProps) {
  return <div className="flex flex-wrap -m-4 mt-8">{children}</div>;
}

type CTACardProps = {
  title: string;
  color: string;
  cardDescription: string;
  btnLink: string;
};

export function CTACard({
  title,
  color,
  cardDescription,
  btnLink,
  ...rest
}: CTACardProps) {
  return (
    <div className="p-4 md:w-1/2 w-full">
      <div className="rounded-lg px-4 py-8 relative overflow-hidden bg-[#CEDDFF]">
        <div className="pr-24">
          <h3 className={`font-medium text-lg text-${color}`}>{title}</h3>
          <p className="mt-3">{cardDescription}</p>
          <a
            href={btnLink}
            className="px-4 py-2 inline-block mt-2 rounded border-2 border-solid border-[#175CFF] text-[#175CFF]"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}

const Features = () => {
  return (
    <FeaturesContainer>
      <FeaturesTitle
        title="With all the Features You Need"
        description="Credibly grow premier your community with Transparency."
      />

      <FeaturesCardContainer>
        {FeaturesCardInfo.map((card) => (
          <FeaturesCard
            key={card.title}
            iconSrc={card.iconSrc}
            bg={card.bg}
            title={card.title}
            description={card.description}
          />
        ))}
      </FeaturesCardContainer>

      <CTACardContainer>
        {CTACardInfo.map((cta_card) => (
          <CTACard
            key={cta_card.cardTitle}
            title={cta_card.cardTitle}
            color={cta_card.color}
            cardDescription={cta_card.cardDescription}
            btnLink={cta_card.btnLink}
          />
        ))}
      </CTACardContainer>
    </FeaturesContainer>
  );
};

export default Features;
