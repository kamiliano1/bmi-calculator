import React from "react";
import data from "./data.json";
import BMILimiatationsElement from "./BMILimiatationsElement";

type BMILimitationsSectionProps = {};

const BMILimitationsSection: React.FC<BMILimitationsSectionProps> = () => {
  return (
    <section className="px-6 text-center mb-20">
      <div className="mb-14">
        <h3 className="text-XM mb-8">Limitations of BMI</h3>
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
