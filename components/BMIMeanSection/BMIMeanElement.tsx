import React from "react";
import Image from "next/image";
type BMIMeanElementProps = {
  image: string;
  title: string;
  body: string;
  alt: string;
};

const BMIMeanElement: React.FC<BMIMeanElementProps> = ({
  image,
  title,
  body,
  alt,
}) => {
  return (
    <div className="sm:flex sm:items-center sm:gap-10 lg:gap-[2.8125rem] lg:flex-col  lg:items-start lg:basis-[365px] lg:mr-8 lg:mx-auto">
      <Image
        src={image}
        alt={alt}
        className="mb-8 sm:mb-0 "
        width={64}
        height={64}
      />
      <div>
        <h3 className="mb-6 ">{title}</h3>
        <p className="text-Body-M">{body}</p>
      </div>
    </div>
  );
};
export default BMIMeanElement;
