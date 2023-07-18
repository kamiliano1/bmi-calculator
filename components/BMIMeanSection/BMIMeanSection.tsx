import React from "react";
import Image from "next/image";
import ManEating from "../../public/assets/images/image-man-eating.webp";
import BowlFood from "../../public/assets/images/icon-eating.svg";
import BMIMeanElement from "./BMIMeanElement";
import data from "./data.json";
type BMIMeanSectionProps = {};
const BMIMeanSection: React.FC<BMIMeanSectionProps> = () => {
  return (
    <section className="px-6 mb-32">
      <div className=" sm:flex mb-32">
        <Image
          src={ManEating}
          alt="man eating sushi"
          className="mx-auto py-6 h-[354px] w-[311px]"
        />
        <div>
          <h2 className="text-XM mb-8">What your BMI result means</h2>
          <p className="text-Body-M">
            A BMI range of 18.5 to 24.9 is considered a `healthy weight.`
            Maintaining a healthy weight may lower your chances of experiencing
            health issues later on, such as obesity and type 2 diabetes. Aim for
            a nutritious diet with reduced fat and sugar content, incorporating
            ample fruits and vegetables. Additionally, strive for regular
            physical activity, ideally about 30 minutes daily for five days a
            week.
          </p>
        </div>
      </div>
      <div className="space-y-10">
        {data.map((item) => (
          <BMIMeanElement
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
export default BMIMeanSection;
