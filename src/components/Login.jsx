import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../services/userAuthApi";
import { getToken, storeToken } from "../services/LocalStorageService";
import { useDispatch } from "react-redux";
import { setUserToken } from "../features/authSlice";
const Login = () => {
  const [server_error, set_Server_Error] = useState({
    status: false,
    msg: "",
    type: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginUser, { isLoading }] = useLoginUserMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      username: data.get("username"),
      password: data.get("password"),
    };

    const res = await loginUser(actualData);
    if (res.error) {
      console.log(res.error.data);
      set_Server_Error(res.error.data);
    }
    if (res.data) {
      storeToken(res.data)
      let { access_token } = getToken()
      dispatch(setUserToken({ access_token: access_token }))
      navigate('/')
    }
  };

  let { access_token } = getToken()
  useEffect(() => {
    dispatch(setUserToken({ access_token: access_token }))
  }, [access_token, dispatch])
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="border-spacing-2 border border-gray-400 w-full outline-none p-2"
          placeholder="handle"
          name="username"
          type="text"
        />

        <input
          className="border-spacing-2 border border-gray-400 w-full outline-none p-2  mt-1"
          placeholder="pass"
          name="password"
          type="password"
        />
        <div className="flex flex-col items-center justify-center mt-5">
          <button
            type="submit"
            className="text-center border-collapse border px-20 border-gray-700 "
          >
            submit
          </button>
        </div>

        <p>
          <Link to="/register" className="text-blue-400">
            Dont have an Account ?{" "}
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
