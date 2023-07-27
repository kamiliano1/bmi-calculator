"use client";
import React, {
  ChangeEvent,
  ChangeEventHandler,
  MouseEventHandler,
  useState,
} from "react";

type RadioButtonProps = {
  type: "metric" | "imperial";
  bmiUnit: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const RadioButton: React.FC<RadioButtonProps> = ({
  type,
  bmiUnit,
  onChange,
}) => {
  const [hover, isHover] = useState<boolean>(false);
  return (
    <div className="flex w-full">
      <label
        htmlFor={type}
        className="text-Body-M-Bold capitalize cursor-pointer flex items-center"
        onMouseEnter={() => isHover(true)}
        onMouseLeave={() => isHover(false)}
      >
        {" "}
        <input
          type="radio"
          name="metric"
          value={type}
          id={type}
          checked={type === bmiUnit}
          onChange={onChange}
        />
        <span
          className={`w-[31px] h-[31px] rounded-full aspect-square border-[1px]
    ${
      hover && type !== bmiUnit ? "border-blue" : "border-[#D8E2E7]"
    } inline-block mr-[1.125rem]  ${
            bmiUnit === type && "bg-blue border-[7.5px]"
          } `}
        ></span>
        {type}
      </label>
    </div>
  );
};
export default RadioButton;

{
  /* <input
type="radio"
name="topping"
value="Regular"
id="regular"
checked={topping === "Regular"}
onChange={onOptionChange}
/>
<label htmlFor="regular">Regular</label> */
}

// <input
// type="radio"
// name="topping"
// value="Medium"
// id="medium"
// checked={topping === "Medium"}
// onChange={onOptionChange}
// />
// <label htmlFor="medium">Medium</label>

// <input
// type="radio"
// name="topping"
// value="Large"
// id="large"
// checked={topping === "Large"}
// onChange={onOptionChange}
// />
// <label htmlFor="large">Large</label>
