import React from "react";
import { BiTimeFive } from "react-icons/all.js";
import logo from "../../Assets/google.png";

const Data = [
  {
    id: 1,
    image: logo,
    title: "Software Eng",
    time: "Now",
    location: "Delhi",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, minima?",
    company: "Google inc.",
  },
  {
    id: 2,
    image: logo,
    title: "UI Designer",
    time: "1hr",
    location: "Kolkata",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, minima?",
    company: "Google inc.",
  },
  {
    id: 3,
    image: logo,
    title: "UX Designer",
    time: "2hr",
    location: "Kolkata",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, minima?",
    company: "Google inc.",
  },
  {
    id: 4,
    image: logo,
    title: "UX Designer",
    time: "2hr",
    location: "Kolkata",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, minima?",
    company: "Google inc.",
  },
  {
    id: 5,
    image: logo,
    title: "Software Eng",
    time: "2hr",
    location: "Bangalore",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, minima?",
    company: "Microsoft inc.",
  },
  {
    id: 6,
    image: logo,
    title: "UX Designer",
    time: "2hr",
    location: "Kolkata",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, minima?",
    company: "Google inc.",
  },
  {
    id: 7,
    image: logo,
    title: "UX Designer",
    time: "2hr",
    location: "Kolkata",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, minima?",
    company: "Microsoft",
  },
  {
    id: 8,
    image: logo,
    title: "UX Designer",
    time: "2hr",
    location: "Kolkata",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, minima?",
    company: "Meta inc.",
  },
];

const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 flex-wrap items-center justify-center py-10">
        {Data.map(
          ({ id, image, title, time, location, description, company }) => {
            return (
              <div
                key={id}
                className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-2xl shadow-greyIsh hover:shadow-2xl "
              >
                <span className={"flex justify-between items-center gap-4"}>
                  <h1
                    className={
                      "text-[16px] font-semibold text-textColor group-hover:text-white"
                    }
                  >
                    {title}
                  </h1>
                  <span className={"flex items-center text-[#ccc] gap-1"}>
                    <BiTimeFive /> {time}
                  </span>
                </span>
                <h6 className={"text-[#ccc] "}>{location}</h6>
                <p
                  className={
                    "text-[14px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white"
                  }
                >
                  {description}
                </p>
                <div className={"company flex items-center gap-2"}>
                  <img src={logo} alt="Company Logo" className={"w-[10%]"} />
                  <span
                    className={
                      "text-[14px] py-[1rem] block group-hover:text-white"
                    }
                  >
                    {company}
                  </span>
                </div>
                <button
                  className={
                    "border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-black group-hover/item:text-textColor group-hover:text-white"
                  }
                >
                  Apply Now
                </button>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Jobs;
