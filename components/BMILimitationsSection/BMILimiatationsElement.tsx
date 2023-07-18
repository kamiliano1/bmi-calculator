import React from "react";
import Image from "next/image";
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
    <div className="mb-10 px-6">
      <div className="flex items-center mb-4">
        <Image src={image} alt={alt} className="mr-4" width={32} height={32} />
        <h4 className="">{title}</h4>
      </div>
      <p className="text-start">{body}</p>
    </div>
  );
};
export default BMILimiatationsElement;
