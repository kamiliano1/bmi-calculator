"use client";
import RadioButton from "@/components/Layout/RadioButton";
import TextField from "@/components/Layout/TextField";
import { ChangeEvent, ChangeEventHandler, useState } from "react";

type BmiType = {
  weight: {
    kg: number;
    st: number;
    lbs: number;
  };
  height: {
    cm: number;
    ft: number;
    in: number;
  };
  metric: "imeperial" | "metric";
};

export default function Home() {
  const [bmi, setBmi] = useState<BmiType>({
    weight: {
      kg: 0,
      st: 0,
      lbs: 0,
    },
    height: {
      cm: 0,
      ft: 0,
      in: 0,
    },
    metric: "metric",
  });
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, id } = e.target;
    setBmi((prev) =>
      !id.length ? { ...prev, [name]: value } : { ...prev, [name]: id }
    );
  };
  return (
    <>
      <form className="w-[128px] sm:w-[299px] lg:w-[238px]">
        {/* <MainSection /> */}
        {/* <BMIMeanSection /> */}
        {/* <BMILimitationsSection /> */}
      </form>
      <form>
        <h3 className="capitalize bg-darkElectricBlue">height</h3>
        <div className="relative w-[280px] h-full">
          <input
            onChange={onChange}
            type="text"
            name="height"
            placeholder="0"
            value={bmi.height}
            className="rounded-xl border-[1px] border-[#D8E2E7] py-3 pl-6 text-gunMetal text-M w-full
         focus:border-blue active:border-blue"
          />
          <p className="absolute text-M text-blue top-[calc(0px_+_9px)] right-[1.5rem]">
            {bmi.metric === "metric" ? "cm" : "ft"}
          </p>
        </div>
        <h3 className="capitalize bg-darkElectricBlue">weight</h3>
        <div className="relative w-[280px] h-full">
          <input
            onChange={onChange}
            type="text"
            name="weight"
            placeholder="0"
            value={bmi.weight}
            className="rounded-xl border-[1px] border-[#D8E2E7] py-3 pl-6 text-gunMetal text-M w-full
         focus:border-blue active:border-blue"
          />
          <p className="absolute text-M text-blue top-[calc(0px_+_9px)] right-[1.5rem]">
            {bmi.metric === "metric" ? "kg" : "st"}
          </p>
        </div>
        <div className="relative w-[280px] h-full">
          <input
            onChange={onChange}
            type="text"
            name="weight"
            placeholder="0"
            value={bmi.weight}
            className="rounded-xl border-[1px] border-[#D8E2E7] py-3 pl-6 text-gunMetal text-M w-full
         focus:border-blue active:border-blue"
          />
          <p className="absolute text-M text-blue top-[calc(0px_+_9px)] right-[1.5rem]">
            {bmi.metric === "metric" ? "kg" : "st"}
          </p>
        </div>
        <div className="flex">
          <input
            type="radio"
            id="imperial"
            name="metric"
            className="mr-4 accent-blue w-[31px]"
            onChange={onChange}
          />
          <label htmlFor="imperial" className="text-Body-M capitalize">
            imperial
          </label>
        </div>
        <div className="flex">
          <input
            type="radio"
            id="metric"
            name="metric"
            className="mr-4 accent-blue w-[31px]"
            onChange={onChange}
          />
          <label htmlFor="metric" className="text-Body-M capitalize">
            metric
          </label>
        </div>
      </form>
    </>
  );
}
