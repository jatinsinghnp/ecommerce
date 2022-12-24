import React, { useContext, useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoStorefront } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { HiFolder } from "react-icons/hi";
import { getToken } from '../services/LocalStorageService'
const ProfileCreate = () => {
  const [call, setCall] = useState(true);
  const callBtn = () => {
    setCall(!call);
    console.log("hellow");
  };

  
  return (
    <>
      <div className="flex bg-[#fff] border-y-gray-200 border border-collapse">
        <AiOutlineSearch size={40} className="py-2" />
        <input
          type="search"
          className="w-full placeholder:pl-7 outline-none py-2  "
          placeholder="..."
        />
      </div>
      <div className="flex items-center bg-white mx-3 mt-3  ">
        <div className="flex flex-col items-center justify-center w-[300px]  p-4 relative">
          <button className="absolute top-0 left-0  ml-2" >
            <AiOutlinePlus  />
          </button>
          <IoStorefront size={50} />
        </div>
        <div className="w-[300px]  border-r-gray-200 border pl-2 ">
          <p className="w-[100px]">Name Business Street City,State Zip</p>
        </div>
        <div>
          <BiDotsVerticalRounded size={40} />
        </div>
      </div>
      <div className="flex bg-[#fff] items-center  mx-3 mt-4 ">
        <div className="w-[200px]  py-10 relative">
          <button className="absolute top-0 left-0  ml-2">
            <AiOutlinePlus onClick={callBtn} />
          </button>
          <FiPhone size={40} />
        </div>
        <div className="w-[200px] py-10 border-r-gray-200 border relative">
          <button className="absolute top-0 left-0  ml-2">
            <AiOutlinePlus />
          </button>
          <span className="text-[40px]">@</span>
        </div>
        <div className="w-[200px] border-r-gray-200 border py-11 relative">
          <button className="absolute top-0 left-0  ml-2">
            <AiOutlinePlus />
          </button>
          <AiOutlineInfoCircle size={50} />
        </div>
        <div className="w-[100px]  py-11 relative">
          <button className="absolute top-0 left-0  ml-2">
            <AiOutlinePlus />
          </button>
          <HiFolder size={50} />
        </div>
      </div>

      {!call ? (
        <div>
          <input
            type="text"
            className="py-3 border-collapse border border-gray-400 w-full text-center"
            placeholder="Enter Phone number"
          />
        </div>
      ) : (
        <div className="flex items-center justify-around p-4 ">
          <p>tab 1</p>
          <p>+</p>
        </div>
      ) }

      <div className="bg-[#fff]  bottom-0 flex mx-3 mt-[100px]">
        <div className="w-[300px] h-[20vh] border border-collapse relative">
          <button className="absolute top-0 left-0  ml-2">
            <AiOutlinePlus />
          </button>
        </div>
        <div className="w-[200px] h-[20vh] border border-collapse"></div>
        <div className="w-[200px] h-[20vh] border border-collapse"></div>
      </div>
    </>
  );
};

export default ProfileCreate;
