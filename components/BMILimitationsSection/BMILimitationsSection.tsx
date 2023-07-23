import React from "react";
import data from "./data.json";
import Image from "next/image";
import BMILimiatationsElement from "./BMILimiatationsElement";
import CurvedLine from "../../public/assets/images/pattern-curved-line-right.svg";
type BMILimitationsSectionProps = {};

const BMILimitationsSection: React.FC<BMILimitationsSectionProps> = () => {
  return (
    <section className="px-6 sm:px-10 text-center mb-20 max-w-[1440px] mx-auto sm:flex sm:flex-wrap sm:justify-center lg:justify-start lg:px-[clamp(2.5rem,_10vw,_8.75rem)]">
      {/* // <section className=" max-w-[1440px] mx-auto sm:flex sm:flex-wrap sm:justify-center lgs:justify-start lg:px-[clamp(2.5rem,_10vw,_8.75rem)]"> */}
      <div className="mb-14 lg:basis-[564px] lg:text-start lg:mr-[clamp(1rem,_6vw,_10.25rem)]">
        <h3 className="text-XM mb-8 lg:text-L">Limitations of BMI</h3>
        <p>
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
