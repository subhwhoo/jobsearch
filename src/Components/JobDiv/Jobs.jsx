import React from "react";

const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 flex-wrap items-center justify-center py-10">
        <div className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh hover:shadow-lg ">
          <span className={"flex justify-between items-center gap-4"}>
            <h1
              className={
                "text-[16px] font-semibold text-textColor group-hover:text-white"
              }
            >
              Web Developer
            </h1>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
