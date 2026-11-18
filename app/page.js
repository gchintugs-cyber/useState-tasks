"use client";
import { useState } from "react";

export default function Home() {
  const [point, setPoint] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [isLocked, setIsLocked] = useState(true);
  let bgcolor = "";
  let color = "";
  if (isOn === false) {
    bgcolor = "bg-slate-800";
    color = "text-white";
  } else {
    bgcolor = "bg-amber-100";
    color = "text-slate-800";
  }
  let undur = "";
  if (isLocked === true) {
    undur = "h-[500px]";
  } else {
    undur = "h-[700px]";
  }
  return (
    <div className="w-100% h-[1500px]  bg-gray-300 flex flex-col items-center gap-[20px]">
      <div className=" w-[200px] h-[120px] text-[42px] font-bold text-slate-800 flex items-center justify-center">
        <h1>useState</h1>
      </div>
      <div className="flex gap-[40px] h-[600px] items-center justify-center">
        <div className="h-[500px] w-[550px] bg-white rounded-[32px] ">
          <div className="h-[360px] w-100% flex flex-col items-center justify-around ">
            <h1 className="text-[42px] text-slate-800 font-semibold">
              🔢 Тоолуур
            </h1>
            <h1 className="text-[112px] text-black font-bold">{point}</h1>
          </div>
          <div className="h-[140px] w100% flex justify-center items-start gap-[40px]">
            <button
              className="h-[100px] w-[100px] bg-slate-800 rounded-full text-[42px]"
              onClick={() => {
                setPoint(point - 1);
              }}
            >
              -
            </button>
            <button
              className="h-[100px] w-[100px] bg-slate-800 rounded-full text-[42px]"
              onClick={() => {
                setPoint(point + 1);
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className={`h-[500px] w-[550px] ${bgcolor} rounded-[32px]`}>
          <div className="h-[320px] w-100% flex flex-col items-center justify-around">
            <h1 className={`text-[42px] ${color} font-semibold`}>💡 Гэрэл</h1>
            <h1 className="text-[112px] text-black font-bold">
              {isOn === true ? "💡" : "🌑"}
            </h1>
          </div>
          <div className="h-[180px] w-100% flex justify-center items-center">
            <button
              className="h-[100px] w-[200px] bg-amber-300 rounded-[24px] text-[32px] text-slate-800 font-semibold "
              onClick={() => {
                setIsOn(!isOn);
              }}
            >
              {isOn === true ? "Унтраах" : "Асаах"}
            </button>
          </div>
        </div>
        <div className={`${undur} w-[550px] bg-white rounded-[32px]`}>
          <div className="h-[320px] w-100% flex flex-col items-center justify-around">
            <h1 className="text-[42px] text-slate-800 font-semibold">
              🔒 Нууц мессеж
            </h1>
            <h1 className="text-[112px] text-black font-bold">
              {isLocked === true ? "🔒" : "🔓"}
            </h1>
          </div>
          <div className=" w-100% flex flex-col justify-center items-center gap-[50px]">
            <button
              className="h-[100px] w-[200px] bg-purple-600 rounded-[24px] text-[32px] text-white font-semibold "
              onClick={() => {
                setIsLocked(!isLocked);
              }}
            >
              {isLocked === true ? "Харах" : "Нуух"}
            </button>
            {!isLocked && (
              <div className="h-[180px] w-[500px] bg-pink-300 flex items-center justify-center text-slate-800 text-[32px] font-bold rounded-[24px]">
                🎉 Чи useState-ийг ойлголоо!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
