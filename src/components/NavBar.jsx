import React from "react";
import { AiFillCaretLeft, AiFillCalendar } from "react-icons/ai";
import { BsCartFill } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";
import { AiOutlineLogin } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import { getToken,removeToken } from "../services/LocalStorageService";


const NavBar = () => {
const handlelogout=()=>{

removeToken()

}

  const { access_token } = getToken();
  const navigate = useNavigate();
  return (
    <>
      <ul className="flex space-x-24 bg-[#F2F2F2] p-4">
        <li>
          <button onClick={() => navigate(-1)}>
            <AiFillCaretLeft size={30} />
          </button>
        </li>
        <li>
          <AiFillCalendar size={30} />
        </li>
        <li>
          <BsCartFill size={30} />{" "}
        </li>
        <li>
          <GiMoneyStack size={30} />{" "}
        </li>

        <li>{ access_token ? <button onClick={handlelogout}><AiOutlineLogin size={40} /></button> : ""}</li>
      </ul>
    </>
  );
};

export default NavBar;
