import React, { ChangeEvent } from "react";

type BmiType = {
  weight: number;
  height: number;
  metric: "imeperial" | "metric";
};

type TextFieldProps = {
  type: "weight" | "height";
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  bmi: BmiType;
};

const TextField: React.FC<TextFieldProps> = ({ type, onChange, bmi }) => {
  console.log(bmi);
  return (
    <>
      <h3 className="capitalize bg-darkElectricBlue">{type}</h3>
      <div className="relative w-[280px] h-full">
        <input
          onChange={onChange}
          type="text"
          id={type}
          placeholder="0"
          value={bmi[type]}
          className="rounded-xl border-[1px] border-[#D8E2E7] py-3 pl-6 text-gunMetal text-M w-full
         focus:border-blue active:border-blue"
        />
        <p className="absolute text-M text-blue top-[calc(0px_+_10px)] right-[1.5rem]">
          {" "}
          {type === "height" ? "cm" : "kg"}
        </p>
      </div>
    </>
  );
};
export default TextField;
