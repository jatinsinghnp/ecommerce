import React, { useState } from "react";
import { useRegisterUserMutation } from "../services/userAuthApi";

import { Link, useNavigate } from "react-router-dom";
const Singup = () => {
  const [server_error, set_Server_Error] = useState({
    status: false,
    msg: "",
    type: "",
  });
  const navigate = useNavigate();
  const [registerUser, { isLoading }] = useRegisterUserMutation();


  const handleSubmit=async(e)=>{
    e.preventDefault();
    const data=new FormData(e.currentTarget);
    const actualData={
      username:data.get('username'),
      email:data.get('email'),
      password:data.get('password'),
      password2:data.get('password2'),

    }

    const res=await registerUser(actualData)
    if(res.error){
      console.log(res.error.data);
      set_Server_Error(res.error.data)

    }
    if (res.data) {
      console.log(res.data);
      navigate("/login")
      
    }
  }
  return (
    <div className="space-y-4">
    <form action="" onSubmit={handleSubmit}>

    <input
        className="border-spacing-2 border border-gray-400 w-full outline-none p-2"
        placeholder="Email"
        type="email"
        name="email"
      />
      <input
        type="text"
        className="border-spacing-2 border border-gray-400 w-full outline-none p-2"
        placeholder="username"
        name="username"
      />
      <input
        className="border-spacing-2 border border-gray-400 w-full outline-none p-2 "
        placeholder="password"
        type="password"
        name="password"
      />
      <input
        className="border-spacing-2 border border-gray-400 w-full outline-none p-2 "
        placeholder="confrimpassword"
        type="password"
        name="password2"
      />
      <div>
        <p className="text-center pt-5">
          <button type="submit">create</button>
        </p>
      </div>
    </form>

    <div>
      <p> <Link to="/login" className="text-blue-400">Already have an Account ?</Link></p>
    </div>
    </div>
  );
};

export default Singup;
