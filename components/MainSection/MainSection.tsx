"use client";
import RadioButton from "@/components/Layout/RadioButton";
import TextField from "@/components/Layout/TextField";
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
import Logo from "../../public/assets/images/logo.svg";
import Image from "next/image";

type BmiType = {
  cmFt: number;
  in: number;
  kgSt: number;
  lbs: number;
  metric: "imperial" | "metric";
};

type BmiStatusType = "underweight" | "healthy weight" | "overweight" | "obese";

// type suggestedWeightType = {
//   minValue: string;
//   maxValue: string;
// };

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
  const [suggestedWeight, setSuggestedWeight] = useState<string>("");
  const [isEmpty, setIsEmpty] = useState<boolean>(true);
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBmi((prev) => ({ ...prev, [name]: Number(value) }));
  };
  const onRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, id } = e.target;
    setBmi((prev) => ({ ...prev, [name]: id }));
    if (bmi.metric === "imperial") {
      setBmi((prev) => ({
        ...prev,
        cmFt: fromImperialToMetricHeight(bmi.cmFt, bmi.in),
        kgSt: fromImperialToMetricWeight(bmi.kgSt, bmi.lbs),
      }));
    }
    if (bmi.metric === "metric") {
      setBmi((prev) => ({
        ...prev,
        cmFt: fromMetricToImperialHeight(bmi.cmFt).cmFt,
        in: fromMetricToImperialHeight(bmi.cmFt).in,
        kgSt: fromMetricToImperialWeight(bmi.kgSt).kgSt,
        lbs: fromMetricToImperialWeight(bmi.kgSt).lbs,
      }));
    }
  };
  const roundNumber = (num: number, round = 1e2) => {
    return Math.round(num * round) / round;
  };
  useEffect(() => {
    if (bmi.metric === "metric") {
      setUserBmi(bmi.kgSt / (bmi.cmFt / 100) ** 2);
      const minValue = roundNumber(18.5 * (bmi.cmFt / 100) ** 2, 1e1);
      const maxValue = roundNumber(24.9 * (bmi.cmFt / 100) ** 2, 1e1);
      setSuggestedWeight(`${minValue}kgs - ${maxValue}kgs.`);
    } else {
      const inches = Number(bmi.cmFt) * 12 + Number(bmi.in);
      const pounds = Number(bmi.kgSt) * 14 + Number(bmi.lbs);
      setUserBmi((pounds / inches ** 2) * 703);
      const minValue = (18.5 * inches ** 2) / 703;
      const maxValue = (24.9 * inches ** 2) / 703;
      const stonesMin = Math.floor(minValue / 14);
      const inchesMin = roundNumber(minValue - stonesMin * 14, 1);
      const stonesMax = Math.floor(maxValue / 14);
      const inchesMax = roundNumber(maxValue - stonesMax * 14, 1);
      setSuggestedWeight(
        `${stonesMin}st ${inchesMin}lbs - ${stonesMax}st ${inchesMax}lbs.`
      );
    }
    if (userBmi < 18.5) setBmiStatus("underweight");
    else if (userBmi > 18.5 && userBmi < 24.9) setBmiStatus("healthy weight");
    else if (userBmi > 25 && userBmi < 29.9) setBmiStatus("overweight");
    else {
      setBmiStatus("obese");
    }
    if (
      (bmi.metric === "metric" && (bmi.cmFt === 0 || bmi.kgSt === 0)) ||
      (bmi.metric === "imperial" &&
        (bmi.cmFt === 0 || bmi.kgSt === 0 || bmi.in === 0 || bmi.lbs === 0))
    ) {
      setIsEmpty(true);
      return;
    }
    setIsEmpty(false);
  }, [bmi, userBmi]);
  const fromMetricToImperialHeight = (cm: number) => {
    const feets = Math.floor(cm / 2.54 / 12);
    const inches = cm / 2.54 - feets * 12;
    return { cmFt: feets, in: roundNumber(inches) };
  };
  const fromMetricToImperialWeight = (kg: number) => {
    const stones = Math.floor((kg * 2.2) / 14);
    const pounds = kg * 2.2 - stones * 14;
    return { kgSt: stones, lbs: roundNumber(pounds) };
  };

  const fromImperialToMetricHeight = (ft: number, inches: number) => {
    return roundNumber((Number(ft) * 12 + Number(inches)) * 2.54);
  };
  const fromImperialToMetricWeight = (st: number, lbs: number) => {
    return roundNumber((Number(st) * 14 + Number(lbs)) / 2.2);
  };

  return (
    <main className="px-6 sm:px-10 text-center lg:grid lg:grid-cols-[repeat(2,_minmax(0,_568px))] lg:grid-rows-[repeat(2,_max-content)] lg:justify-center lg:gap-x-8 lg:items-center max-w-[1440px] mx-auto relative lg:h-[737px]">
      <div className="absolute w-full bg-[linear-gradient(315deg,_#D6E6FE_0%,_rgba(214,_252,_254,_0.00)_100%)] h-[620px] lg:h-[737px] rounded-[0px_0px_35px_35px] top-0 left-0 lg:w-[978px] z-[-1]"></div>
      <Image
        src={Logo}
        alt="page logo"
        className="mx-auto py-6 w-[40px] sm:pb-10 sm:pt-8 lg:w-[64px] lg:mx-0 lg:pt-[4.6875rem] lg:pb-[3.75rem]"
      />
      <div className="lg:text-start lg:max-w-[470px] lg:col-start-1 lg:row-start-2 lg:mt-">
        <h1 className="mb-6 text-L lg:text-XL max-w-[11ch] mx-auto lg:max-w-none lg:mb-[2.1875rem]">
          Body Mass Index Calculator
        </h1>
        <p className="mb-12 lg:mb-0">
          Better understand your weight in relation to your height using our
          body mass index (BM) calculator. While BMI is not the sole determinant
          of a healthy weight, it offers a valuable starting point to evaluate
          your overall health and well-being.
        </p>
      </div>
      <form className="bg-white p-6 sm:p-8 rounded-2xl lg:col-start-2 lg:row-start-2 ">
        <h2 className="sm:text-start text-M">Enter your details below</h2>
        <div className="flex justify-between py-6 sm:py-8 sm:gap-x-6">
          <div className="flex w-full">
            <input
              type="radio"
              id="metric"
              name="metric"
              className="mr-4 accent-blue w-[31px] aspect-square cursor-pointer"
              onChange={onRadioChange}
              checked={bmi.metric === "metric"}
            />
            <label
              htmlFor="metric"
              className="text-Body-M-Bold capitalize cursor-pointer"
            >
              metric
            </label>
          </div>
          <div className="flex w-full">
            <input
              type="radio"
              id="imperial"
              name="metric"
              className="mr-4 accent-blue w-[31px] cursor-pointer"
              onChange={onRadioChange}
              checked={bmi.metric === "imperial"}
            />
            <label
              htmlFor="imperial"
              className="text-Body-M-Bold capitalize cursor-pointer"
            >
              imperial
            </label>
          </div>
        </div>
        <div
          className={`sm:flex sm:justify-between mb-6 sm:mb-8 ${
            bmi.metric === "metric" ? "" : " lg:block"
          } sm:gap-x-6`}
        >
          <div className="w-full mb-4 sm:mb-0">
            <h3 className="capitalize text-Body-S text-start mb-2 text-[#5E6E85]">
              height
            </h3>
            <div className="flex w-full gap-x-4">
              <div className="relative w-full">
                <input
                  onChange={onInputChange}
                  onFocus={(e) => e.target.select()}
                  type="number"
                  name="cmFt"
                  placeholder="0"
                  maxLength={5}
                  value={bmi.cmFt}
                  className="rounded-xl border-[1px] border-[#D8E2E7] py-5 pl-6 text-gunMetal text-M w-full 
             focus:border-blue active:border-blue"
                />
                <p className="absolute text-M text-blue top-[calc(0px_+_17px)] right-[1.5rem]">
                  {bmi.metric === "metric" ? "cm" : "ft"}
                </p>
              </div>
              {bmi.metric === "imperial" && (
                <div className="relative w-full">
                  <input
                    onChange={onInputChange}
                    onFocus={(e) => e.target.select()}
                    type="number"
                    name="in"
                    placeholder="0"
                    value={bmi.in}
                    className="rounded-xl border-[1px] border-[#D8E2E7] py-5 pl-6 text-gunMetal text-M w-full
             focus:border-blue active:border-blue"
                  />
                  <p className="absolute text-M text-blue top-[calc(0px_+_17px)] right-[1.5rem]">
                    in
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="w-full">
            <h3 className="capitalize text-Body-S text-start mb-2 text-[#5E6E85]">
              weight
            </h3>
            <div className="flex w-full gap-x-4 ">
              <div className="relative w-full">
                <input
                  onChange={onInputChange}
                  onFocus={(e) => e.target.select()}
                  type="number"
                  name="kgSt"
                  placeholder="0"
                  value={bmi.kgSt}
                  className="rounded-xl border-[1px] border-[#D8E2E7] py-5 pl-6 text-gunMetal text-M w-full
             focus:border-blue active:border-blue"
                />
                <p className="absolute text-M text-blue top-[calc(0px_+_17px)] right-[1.5rem]">
                  {bmi.metric === "metric" ? "kg" : "st"}
                </p>
              </div>
              {bmi.metric === "imperial" && (
                <div className="relative w-full">
                  <input
                    onChange={onInputChange}
                    onFocus={(e) => e.target.select()}
                    type="number"
                    name="lbs"
                    placeholder="0"
                    value={bmi.lbs}
                    className="rounded-xl border-[1px] border-[#D8E2E7] py-5 pl-6 text-gunMetal text-M w-full
             focus:border-blue active:border-blue"
                  />
                  <p className="absolute text-M text-blue top-[calc(0px_+_17px)] right-[1.5rem]">
                    lbs
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="bg-[linear-gradient(90deg,_#345FF6_0%,_#587DFF_100%)] sm:rounded-r-full text-white p-8 text-start rounded-2xl sm:flex items-center justify-between">
          {isEmpty ? (
            <div>
              <h3 className="text-white mb-4">Welcome!</h3>
              <p className="text-white text-Body-S">
                Enter your height and weight and you`ll see your BMI result here
              </p>
            </div>
          ) : (
            <>
              <div>
                <h5 className="text-white text-Body-M-Bold mb-2">
                  Your BMI is...
                </h5>
                <p className="text-white text-L lg:text-XL mb-6 lg:mr-4">
                  {userBmi.toFixed(1)}
                </p>
              </div>
              <p className="text-white text-Body-S max-w-[267px]">
                Your BMI suggests you`re a {bmiStatus}. Your ideal weight is
                between <span className="font-bold">{suggestedWeight}</span>
              </p>
            </>
          )}
        </div>
      </form>
    </main>
  );
};
export default MainSection;
