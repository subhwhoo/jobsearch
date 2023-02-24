import React from "react";
import logo from "../../Assets/google.png";

const Value = () => {
  return (
    <div className={"mb-[4rem] mt-[6rem]"}>
      <h1
        className={
          "text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block"
        }
      >
        The Value that holds us true to account
      </h1>
      <div className={"grid gap-[10rem] grid-cols-3 items-center"}>
        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className={"flex items-center gap-3"}>
            <div
              className={
                "imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center"
              }
            >
              <img src={logo} alt="" className={"w-[70%]"} />
            </div>
            <span className={"font-semibold text-textColor text-[18px]"}>
              Simplicity
            </span>
          </div>
          <p
            className={
              "text-[15px] text-textColor opacity-[.7] py-[1rem] font-semibold"
            }
          >
            Things being made beautiful simple are at the heart of everything we
            do
          </p>
        </div>
        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className={"flex items-center gap-3"}>
            <div
              className={
                "imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center"
              }
            >
              <img src={logo} alt="" className={"w-[70%]"} />
            </div>
            <span className={"font-semibold text-textColor text-[18px]"}>
              Simplicity
            </span>
          </div>
          <p
            className={
              "text-[15px] text-textColor opacity-[.7] py-[1rem] font-semibold"
            }
          >
            We work on the basis of creating trust which can nurtured through
            authenticity and transparency
          </p>
        </div>
        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className={"flex items-center gap-3"}>
            <div
              className={
                "imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center"
              }
            >
              <img src={logo} alt="" className={"w-[70%]"} />
            </div>
            <span className={"font-semibold text-textColor text-[18px]"}>
              Simplicity
            </span>
          </div>
          <p
            className={
              "text-[15px] text-textColor opacity-[.7] py-[1rem] font-semibold"
            }
          >
            We belive in making things better for everyone, even if just by a
            little bit
          </p>
        </div>
      </div>
    </div>
  );
};

export default Value;
