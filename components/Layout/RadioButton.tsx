"use client";
import React, { ChangeEvent, ChangeEventHandler } from "react";

type RadioButtonProps = {
  type: "metric" | "imperial";
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const RadioButton: React.FC<RadioButtonProps> = ({ type, onChange }) => {
  return (
    <>
      <div className="flex">
        <input
          type="radio"
          id={type}
          name="metric-type"
          // name="metric-type"
          className="mr-4 accent-blue w-[31px]"
          onChange={onChange}
        />
        <label htmlFor={type} className="text-Body-M capitalize">
          {type}
        </label>
      </div>
    </>
  );
};
export default RadioButton;
