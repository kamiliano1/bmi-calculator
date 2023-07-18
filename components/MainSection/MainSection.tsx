"use client";
import RadioButton from "@/components/Layout/RadioButton";
import TextField from "@/components/Layout/TextField";
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
import Logo from "../../public/assets/images/logo.svg";
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

type BmiStatusType = "underweight" | "healthy weight" | "overweight" | "obese";

const MainSection: React.FC = () => {
  const [bmi, setBmi] = useState<BmiType>({
    cmFt: 0,
    in: 0,
    kgSt: 0,
    lbs: 0,
    metric: "metric",
  });
  const [userBmi, setUserBmi] = useState<number>(0);
  const [bmiStatus, setBmiStatus] = useState<BmiStatusType>("underweight");
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, id } = e.target;
    setBmi((prev) =>
      !id.length ? { ...prev, [name]: value } : { ...prev, [name]: id }
    );
  };

  //   - Underweight: BMI less than 18.5
  // - Healthy weight: BMI 18.5 to 24.9
  // - Overweight: BMI 25 to 29.9
  // - Obese: BMI 30 or greater
  useEffect(() => {
    if (bmi.metric === "metric") {
      setUserBmi(bmi.kgSt / (bmi.cmFt / 100) ** 2);
    } else {
      const inches = Number(bmi.cmFt) * 12 + Number(bmi.in);
      const pounds = Number(bmi.kgSt) * 14 + Number(bmi.lbs);
      console.log(inches, pounds);
      // setUserBmi(703 * (pounds / inches ** 2));
      // setUserBmi((pounds / inches ** 2) * 703);
      setUserBmi((pounds / inches ** 2) * 703);
    }
    if (userBmi < 18.5) setBmiStatus("underweight");
    else if (userBmi > 18.5 && userBmi < 24.9) setBmiStatus("healthy weight");
    else if (userBmi > 25 && userBmi < 29.9) setBmiStatus("overweight");
    else {
      setBmiStatus("obese");
    }
  }, [bmi, userBmi]);
  return (
    <main className="px-6 text-center mt-2">
      <Image src={Logo} alt="page logo" className="mx-auto py-6 w-[40px]" />
      <h1 className="mb-6 text-L lg:text-XL max-w-[11ch] mx-auto">
        Body Mass Index Calculator
      </h1>
      <p className="mb-12">
        Better understand your weight in relation to your height using our body
        mass index (BM) calculator. While BMI is not the sole determinant of a
        healthy weight, it offers a valuable starting point to evaluate your
        overall health and well-being.
      </p>
      <form className="bg-white p-6 rounded-2xl">
        <h3 className="sm:text-start">Enter your details below</h3>
        <div className="flex justify-between py-6">
          <div className="flex w-full">
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
          <div className="flex w-full">
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
        <div className="sm:flex sm:justify-between">
          <div>
            <h3 className="capitalize text-Body-S text-start mb-2 text-[#5E6E85]">
              height
            </h3>
            <div className="flex w-full gap-x-4 mb-4 ">
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
          </div>
          <div>
            <h3 className="capitalize text-Body-S text-start mb-2 text-[#5E6E85]">
              weight
            </h3>
            <div className="flex w-full gap-x-4 mb-6">
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
          </div>
        </div>

        <div className="bg-[linear-gradient(90deg,_#345FF6_0%,_#587DFF_100%)] sm:rounded-r-full text-white p-8 text-start rounded-2xl sm:flex items-center justify-between">
          <div>
            <h3 className="text-white text-Body-M-Bold mb-2">Your BMI is...</h3>
            <p className="text-white text-L mb-6">{userBmi.toFixed(1)}</p>
          </div>
          <p className="text-white text-Body-S max-w-[267px]">
            Your BMI suggests you`re a {bmiStatus}. Your ideal weight is between{" "}
            <span className="font-bold">63.3kgs - 85.2kgs.</span>
          </p>
        </div>
      </form>
    </main>
  );
};
export default MainSection;
