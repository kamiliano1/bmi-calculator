import React from "react";
import Image from "next/image";

import CurvedLine from "../../public/assets/images/pattern-curved-line-right.svg";
type BMILimiatationsElementProps = {
  image: string;
  title: string;
  body: string;
  alt: string;
};

const BMILimiatationsElement: React.FC<BMILimiatationsElementProps> = ({
  image,
  title,
  body,
  alt,
}) => {
  return (
    <div
      className={`mb-10 sm:mb-14 px-6 ${title === "Race" ? "" : "sm:px-8"} ${
        title === "Age" ? " xl:basis-[750px] xl:mr-8" : " xl:basis-[365px] "
      }  ${
        title === "Pregnancy" &&
        " xl:ml-[clamp(1rem,_10vw,_12.4375rem)] xl:mr-8"
      } sm:basis-[335px] flex`}
    >
      {title === "Age" && (
        <Image
          src={CurvedLine}
          alt="curved Line"
          className="hidden xl:block ml-[140px] mr-[150px] mt-[-2rem]"
        />
      )}
      <div className="xl:basis-[365px]">
        <div className="flex items-center mb-4">
          <Image
            src={image}
            alt={alt}
            className="mr-4"
            width={32}
            height={32}
          />
          <h4 className="">{title}</h4>
        </div>
        <p className="text-start">{body}</p>
      </div>
    </div>
  );
};
export default BMILimiatationsElement;
