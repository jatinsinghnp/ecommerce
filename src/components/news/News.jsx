import React from "react";
import bil from "../../asset/bil.jfif";
import sport from "../../asset/markus-spiske-WUehAgqO5hE-unsplash.jpg";
import economic from "../../asset/alexander-grey-8lnbXtxFGZw-unsplash.jpg";
import { Link } from "react-router-dom";
const News = () => {
  return (
    <>
      <div className="">
        <div className="px-3">
          <h1 className="p-3">Business</h1>
          <div className="flex justify-between items-center">
            <div className="w-[150px] bg-white border-collapse border border-gray-700 flex flex-col items-center justify-center p-2 ">
              <Link to="/newsdetail1">
                <img src={bil} alt="" />
              </Link>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="w-[150px] bg-white border-collapse border border-gray-700 flex flex-col items-center justify-center p-2 ">
              <Link to="/newsdetail1">
                <img src={bil} alt="" />
              </Link>{" "}
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="w-[150px] bg-white border-collapse border border-gray-700 flex flex-col items-center justify-center p-2 ">
              <Link to="/newsdetail1">
                <img src={bil} alt="" />
              </Link>{" "}
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="w-[150px] bg-white border-collapse border border-gray-700 flex flex-col items-center justify-center p-2 ">
              <Link to="/newsdetail1">
                <img src={bil} alt="" />
              </Link>{" "}
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
        <div className="px-3">
          <h1 className="p-3">sports</h1>
          <div className="flex justify-between items-center ">
            <div className="w-[150px] bg-white border-collapse border border-gray-700 flex flex-col items-center justify-center p-2 ">
              
              <Link to="/newsdetail2">
              <img src={sport} alt="" />
              </Link>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="w-[150px] bg-white border-collapse border border-gray-700 flex flex-col items-center justify-center p-2 ">
              <img src={sport} alt="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="w-[150px] bg-white border-collapse border border-gray-700 flex flex-col items-center justify-center p-2 ">
              <img src={sport} alt="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="w-[150px] bg-white border-collapse border border-gray-700 flex flex-col items-center justify-center p-2 ">
              <img src={sport} alt="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
        <div className="px-3">
          <h1 className="p-3">economic</h1>
          <div className="flex items-center justify-between">
            <div className="w-[150px] bg-white border-collapse border border-gray-700 flex flex-col items-center justify-center p-2 ">
             
             <Link to="/newsdetail3">
              <img src={economic} alt="" /> 
             </Link>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="w-[150px] bg-white border-collapse border border-gray-700 flex flex-col items-center justify-center p-2 ">
              <Link to="/newsdetail3">
              <img src={economic} alt="" />
              </Link>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="w-[150px] bg-white border-collapse border border-gray-700 flex flex-col items-center justify-center p-2 ">
              <Link to="/newsdetail3">
              <img src={economic} alt="" />
              </Link>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="w-[150px] bg-white border-collapse border border-gray-700 flex flex-col items-center justify-center p-2 ">
              <Link to="/newsdetail3">
              
              <img src={economic} alt="" />
              </Link>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
