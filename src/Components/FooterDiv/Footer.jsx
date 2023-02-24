import React from "react";
import { AiFillInstagram, BsFacebook, BsLinkedin } from "react-icons/all.js";

const Footer = () => {
  return (
    <div>
      <div
        className={
          "footer p-[5rem] mb-4 bg-blueColor rounded-[10px] gap-8 grid grid-cols-5 m-auto items-center justify-center"
        }
      >
        <div>
          <div className={"logoDiv"}>
            <h1 className={"logo text-[25px] text-white pb-[1.5rem]"}>
              <strong>Job</strong>Search
            </h1>
          </div>
          <p className={"text-white pb-[13px] opacity-70 leading-7 "}>
            We always make our seekers and companies find the best jobs and
            employers find the best candidates.
          </p>
        </div>

        <div className="grid">
          <span
            className={
              "divTitle text-[18px] font-semibold pb-[1.5rem] text-white"
            }
          >
            Company
          </span>
          <div className={"grid gap-3"}>
            <li className={"text-white opacity-70 hover:opacity-100"}>
              About Us
            </li>
            <li className={"text-white opacity-70 hover:opacity-100"}>
              Features
            </li>
            <li className={"text-white opacity-70 hover:opacity-100"}>News</li>
            <li className={"text-white opacity-70 hover:opacity-100"}>FAQ</li>
          </div>
        </div>

        <div className="grid">
          <span
            className={
              "divTitle text-[18px] font-semibold pb-[1.5rem] text-white"
            }
          >
            Resources
          </span>
          <div className={"grid gap-3"}>
            <li className={"text-white opacity-70 hover:opacity-100"}>
              Account
            </li>
            <li className={"text-white opacity-70 hover:opacity-100"}>
              Support Center
            </li>
            <li className={"text-white opacity-70 hover:opacity-100"}>
              Feedback
            </li>
            <li className={"text-white opacity-70 hover:opacity-100"}>
              Contact us
            </li>
          </div>
        </div>

        <div className="grid">
          <span
            className={
              "divTitle text-[18px] font-semibold pb-[1.5rem] text-white"
            }
          >
            Support
          </span>
          <div className={"grid gap-3"}>
            <li className={"text-white opacity-70 hover:opacity-100"}>
              Events
            </li>
            <li className={"text-white opacity-70 hover:opacity-100"}>Promo</li>
            <li className={"text-white opacity-70 hover:opacity-100"}>
              Req Demo
            </li>
            <li className={"text-white opacity-70 hover:opacity-100"}>
              Careers
            </li>
          </div>
        </div>

        <div className="grid">
          <span
            className={
              "divTitle text-[18px] font-semibold pb-[1.5rem] text-white"
            }
          >
            Contact Info
          </span>
          <div className={"text-[18px] text-white"}>
            <small>uiuxsubham@gmail.com</small>
            <div className={"icons flex gap-4 py-[1rem]"}>
              <a href="https://www.linkedin.com/in/subc/">
                <AiFillInstagram
                  className={
                    "bg-white p-[8px] h-[35px] w-[35px] rounded-full text-blueColor icon"
                  }
                />
              </a>
              <a href="https://www.linkedin.com/in/subc/">
                <BsFacebook
                  className={
                    "bg-white p-[8px] h-[35px] w-[35px] rounded-full text-blueColor icon"
                  }
                />
              </a>
              <a href="https://www.linkedin.com/in/subc/">
                <BsLinkedin
                  className={
                    "bg-white p-[8px] h-[35px] w-[35px] rounded-full text-blueColor icon"
                  }
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <h6
        className={
          "text-center pb-2 hover:text-blueColor font-semibold cursor-pointer"
        }
      >
        <a href="https://www.linkedin.com/in/subc/">
          Made With Love With Vite and React by Subham Chowdhury
        </a>
      </h6>
    </div>
  );
};

export default Footer;
