"use client";
import RadioButton from "@/components/Layout/RadioButton";
import TextField from "@/components/Layout/TextField";
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
import Logo from "../public/assets/images/logo.svg";
import Image from "next/image";
// type BmiType = {
//   height: {
//     cmFt: number;
//     in: number;
//   };
//   weight: {
//     kgSt: number;
//     lbs: number;
//   };
//   metric: "imperial" | "metric";
// };

type BmiType = {
  cmFt: number;
  in: number;
  kgSt: number;
  lbs: number;
  metric: "imperial" | "metric";
};

export default function Home() {
  const [bmi, setBmi] = useState<BmiType>({
    cmFt: 0,
    in: 0,
    kgSt: 0,
    lbs: 0,
    metric: "metric",
  });
  const [userBmi, setUserBmi] = useState<number>(0);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, id } = e.target;
    setBmi((prev) =>
      !id.length ? { ...prev, [name]: value } : { ...prev, [name]: id }
    );
    console.log(bmi);
  };

  useEffect(() => {
    if (bmi.metric === "metric") {
      setUserBmi(bmi.kgSt / (bmi.cmFt / 100) ** 2);
      return;
    }
    const inches = bmi.cmFt * 12 + bmi.in;
    const pounds = bmi.kgSt * 12 + bmi.lbs;
    console.log(inches, pounds);
    setUserBmi(703 * (pounds / inches ** 2));
  }, [bmi]);
  return (
    <main className="px-6 text-center mt-2">
      <Image src={Logo} alt="page logo" className="mx-auto py-6" />
      <h1 className="mb-6">Body Mass Index Calculator</h1>
      <p>
        Better understand your weight in relation to your height using our body
        mass index (BM) calculator. While BMI is not the sole determinant of a
        healthy weight, it offers a valuable starting point to evaluate your
        overall health and well-being.
      </p>
      <form className="w-[128px] sm:w-[299px] lg:w-[238px] my-12">
        {/* <MainSection /> */}
        {/* <BMIMeanSection /> */}
        {/* <BMILimitationsSection /> */}
      </form>
      <form className="bg-white p-6 rounded-2xl">
        <h3>Enter your details below</h3>
        <div className="flex justify-between py-6">
          <div className="flex">
            <input
              type="radio"
              id="metric"
              name="metric"
              className="mr-4 accent-blue w-[31px]"
              onChange={onChange}
            />
            <label htmlFor="metric" className="text-Body-M-Bold capitalize">
              metric
            </label>
          </div>
          <div className="flex">
            <input
              type="radio"
              id="imperial"
              name="metric"
              className="mr-4 accent-blue w-[31px]"
              onChange={onChange}
            />
            <label htmlFor="imperial" className="text-Body-M-Bold capitalize">
              imperial
            </label>
          </div>
        </div>
        <h3 className="capitalize text-Body-S text-start mb-2">height</h3>
        <div className="flex w-[280px] gap-x-4 mb-4">
          <div className="relative h-full">
            <input
              onChange={onChange}
              type="text"
              name="cmFt"
              placeholder="0"
              value={bmi.cmFt}
              className="rounded-xl border-[1px] border-[#D8E2E7] py-3 pl-6 text-gunMetal text-M w-full
         focus:border-blue active:border-blue"
            />
            <p className="absolute text-M text-blue top-[calc(0px_+_9px)] right-[1.5rem]">
              {bmi.metric === "metric" ? "cm" : "ft"}
            </p>
          </div>
          {bmi.metric === "imperial" && (
            <div className="relative h-full">
              <input
                onChange={onChange}
                type="text"
                name="in"
                placeholder="0"
                value={bmi.in}
                className="rounded-xl border-[1px] border-[#D8E2E7] py-3 pl-6 text-gunMetal text-M w-full
         focus:border-blue active:border-blue"
              />
              <p className="absolute text-M text-blue top-[calc(0px_+_9px)] right-[1.5rem]">
                in
              </p>
            </div>
          )}
        </div>
        <h3 className="capitalize text-Body-S text-start mb-2">weight</h3>
        <div className="flex w-[280px] gap-x-4">
          <div className="relative h-full">
            <input
              onChange={onChange}
              type="text"
              name="kgSt"
              placeholder="0"
              value={bmi.kgSt}
              className="rounded-xl border-[1px] border-[#D8E2E7] py-3 pl-6 text-gunMetal text-M w-full
         focus:border-blue active:border-blue"
            />
            <p className="absolute text-M text-blue top-[calc(0px_+_9px)] right-[1.5rem]">
              {bmi.metric === "metric" ? "kg" : "st"}
            </p>
          </div>
          {bmi.metric === "imperial" && (
            <div className="relative h-full">
              <input
                onChange={onChange}
                type="text"
                name="lbs"
                placeholder="0"
                value={bmi.lbs}
                className="rounded-xl border-[1px] border-[#D8E2E7] py-3 pl-6 text-gunMetal text-M w-full
         focus:border-blue active:border-blue"
              />
              <p className="absolute text-M text-blue top-[calc(0px_+_9px)] right-[1.5rem]">
                lbs
              </p>
            </div>
          )}
        </div>

        <div className="bg-blue text-white p-8 text-start rounded-2xl">
          <h3 className="text-white">Your BMI is...</h3>
          <p className="text-white text-L">{userBmi.toFixed(1)}</p>
          <p className="text-white">
            Your BMI suggests you`re a healthy weight. Your ideal weight is
            between 63.3kgs - 85.2kgs.
          </p>
        </div>
      </form>
    </main>
  );
}
