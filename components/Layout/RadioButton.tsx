import React from "react";

type RadioButtonProps = {};

const RadioButton: React.FC<RadioButtonProps> = () => {
  return (
    <>
      <form>
        <input
          type="radio"
          id="weight"
          placeholder="0"
          className="rounded-xl border-[1px] border-[#D8E2E7] py-3 pl-6 text-gunMetal text-M w-full
 focus:border-blue active:border-blue"
        />
        <label htmlFor="weight">Clik</label>
        <input
          type="radio"
          id="metric"
          placeholder="0"
          className="rounded-xl border-[1px] border-[#D8E2E7] py-3 pl-6 text-gunMetal text-M w-full
 focus:border-blue active:border-blue"
        />
        <label htmlFor="metric">Clik</label>
      </form>
    </>
  );
};
export default RadioButton;
