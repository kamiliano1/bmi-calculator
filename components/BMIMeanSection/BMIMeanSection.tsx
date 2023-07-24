import React from "react";
import Image from "next/image";
import ManEating from "../../public/assets/images/image-man-eating.webp";
import BowlFood from "../../public/assets/images/icon-eating.svg";
import CurvedLine from "../../public/assets/images/pattern-curved-line-left.svg";
import BMIMeanElement from "./BMIMeanElement";
import data from "./data.json";
type BMIMeanSectionProps = {};
const BMIMeanSection: React.FC<BMIMeanSectionProps> = () => {
  return (
    <section className="px-6 sm:px-10 mb-32 lg:mb-[11.5rem] sm:mt-24 max-w-[1440px] mx-auto lg:flex lg:flex-col lg:px-[clamp(2.5rem,_10vw,_8.75rem)] ">
      <div className="sm:flex mb-32 sm:items-center lg:gap-x-[clamp(5rem,_10vw,_131px)] lg:justify-between">
        <Image
          src={ManEating}
          alt="man eating sushi"
          className="mx-auto w-full max-w-[311px] sm:max-w-[468px] sm:ml-[-6rem] py-6 lg:ml-0 lg:py-0 lg:mx-0 lg:h-[533px]"
          // className="mx-auto py-6 h-[354px] w-[311px] sm:w-[360px] sm:h-[411px] sm:ml-[-6rem] lg:w-[468px] lg:h-[533px]  lg:ml-0 lg:py-0 lg:mx-0"
        />
        {/* <div className="sm:w-[331px] lg:max-w-[465px] bg-black"> */}
        <div className="w-full max-w-[465px]">
          <Image
            src={CurvedLine}
            alt="curved Line"
            className="hidden lg:block ml-auto mb-9"
          />
          <h2 className="text-XM mb-8 lg:text-L">What your BMI result means</h2>
          <p className="text-Body-M ">
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
      <div className="space-y-10 lg:space-y-0 lg:flex">
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
