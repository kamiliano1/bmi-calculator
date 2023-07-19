import React from "react";
import data from "./data.json";
import BMILimiatationsElement from "./BMILimiatationsElement";

type BMILimitationsSectionProps = {};

const BMILimitationsSection: React.FC<BMILimitationsSectionProps> = () => {
  return (
    <section className="px-6 sm:px-10 text-center mb-20  max-w-[1440px] mx-auto">
      <div className="mb-14 ">
        <h3 className="text-XM mb-8 lg:text-L">Limitations of BMI</h3>
        <p>
          Although BMI is often a practical indicator of healthy weight, it is
          not suited for every person. Specific groups should carefully consider
          their BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </p>
      </div>
      <div className="sm:flex sm:flex-wrap">
        {data.map((item) => (
          <BMILimiatationsElement
            key={item.title}
            title={item.title}
            body={item.body}
            image={item.image}
            alt={item.alt}
          />
        ))}
      </div>
    </section>
  );
};
export default BMILimitationsSection;
