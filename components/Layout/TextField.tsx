import React from "react";

type TextFieldProps = {};

const TextField: React.FC<TextFieldProps> = () => {
  return (
    <>
      <h3>Height</h3>
      <div className="relative w-[280px] h-full">
        <input
          type="text"
          placeholder="0"
          className="rounded-xl border-[1px] border-[#D8E2E7] py-3 pl-6 text-gunMetal text-M w-full
         focus:border-blue active:border-blue"
        />
        <p className="absolute text-M text-blue top-[calc(0px_+_9px)] right-[1.5rem]">
          {" "}
          cm
        </p>
      </div>
    </>
  );
};
export default TextField;
