import React from "react";
import data from "./data.json";
import Image from "next/image";
import BMILimiatationsElement from "./BMILimiatationsElement";
import CurvedLine from "../../public/assets/images/pattern-curved-line-right.svg";
type BMILimitationsSectionProps = {};

const BMILimitationsSection: React.FC<BMILimitationsSectionProps> = () => {
  return (
    <section
      className="px-6 sm:px-10 text-center mb-20 max-w-[1440px] mx-auto sm:flex sm:flex-wrap sm:justify-center xl:justify-start xl:items-center 
      xl:px-[clamp(2.5rem,_10vw,_8.75rem)] xl:gap-y-10"
      role="complementary"
    >
      <div className="mb-14 xl:basis-[564px] xl:text-start xl:mr-[10.25rem] xl:mb-20">
        <h3 className="text-XM mb-8 xl:text-L">Limitations of BMI</h3>
        <p className="max-w-[686px] ">
          Although BMI is often a practical indicator of healthy weight, it is
          not suited for every person. Specific groups should carefully consider
          their BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </p>
      </div>
      {data.map((item) => (
        <BMILimiatationsElement
          key={item.title}
          title={item.title}
          body={item.body}
          image={item.image}
          alt={item.alt}
        />
      ))}
    </section>
  );
};
export default BMILimitationsSection;
