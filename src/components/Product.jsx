import React from "react";
import dslr from "../asset/canon-eos-eos-3000d-dslr-original-imaf3t5h9yuyc5zu.webp";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
const Product = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <button>
          <AiOutlineSearch size={30} />
        </button>
        <input type="search" className="w-full py-2 outline-none" />
      </div>

      <div>
        <h1 className="">Trending </h1>
        <div className="flex items-center justify-between mt-4 bg-white mx-3 py-3 px-4 ">
          <div className=" flex flex-col  items-center justify-center border border-collapse border-gray-500 p-3 mx-2">
            <img src={dslr} alt="" className="w-[100px]" />
            <p className="">Lorem ipsum dolor sit amet con.</p>{" "}
          </div>
          <div className=" flex flex-col  items-center justify-center border border-collapse border-gray-500 p-3 mx-2">
            <img src={dslr} alt="" className="w-[100px] " />
            <p className="">Lorem ipsum dolor sit amet con.</p>{" "}
          </div>
          <div className=" flex flex-col  items-center justify-center border border-collapse border-gray-500 p-3">
            <img src={dslr} alt="" className="w-[100px]" />
            <p className="">Lorem ipsum dolor sit amet con.</p>{" "}
          </div>
        </div>
      </div>
      <div>
        <h1 className="">Trending </h1>
        <div className="flex items-center justify-between mt-4 bg-white mx-3 py-3 px-4 ">
          <div className=" flex flex-col  items-center justify-center border border-collapse border-gray-500 p-3 mx-2">
            <img src={dslr} alt="" className="w-[100px]" />
            <p className="">Lorem ipsum dolor sit amet con.</p>{" "}
          </div>
          <div className=" flex flex-col  items-center justify-center border border-collapse border-gray-500 p-3 mx-2">
            <img src={dslr} alt="" className="w-[100px] " />
            <p className="">Lorem ipsum dolor sit amet con.</p>{" "}
          </div>
          <div className=" flex flex-col  items-center justify-center border border-collapse border-gray-500 p-3">
            <img src={dslr} alt="" className="w-[100px]" />
            <p className="">Lorem ipsum dolor sit amet con.</p>{" "}
          </div>
        </div>
      </div>
      <div>
        <h1 className="">Trending </h1>
        <div className="flex items-center justify-between mt-4 bg-white mx-3 py-3 px-4 ">
          <div className=" flex flex-col  items-center justify-center border border-collapse border-gray-500 p-3 mx-2">
            <img src={dslr} alt="" className="w-[100px]" />
            <p className="">Lorem ipsum dolor sit amet con.</p>{" "}
          </div>
          <div className=" flex flex-col  items-center justify-center border border-collapse border-gray-500 p-3 mx-2">
            <img src={dslr} alt="" className="w-[100px] " />
            <p className="">Lorem ipsum dolor sit amet con.</p>{" "}
          </div>
          <div className=" flex flex-col  items-center justify-center border border-collapse border-gray-500 p-3">
            <img src={dslr} alt="" className="w-[100px]" />
            <p className="">Lorem ipsum dolor sit amet con.</p>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
