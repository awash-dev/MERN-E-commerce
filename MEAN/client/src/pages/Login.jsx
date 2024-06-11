import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import loginGif from "../assest/signin.gif";
import { IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
const Login = () => {
  // showpassord information
  const [showpassord, setShowpassword] = useState(false);

  //   data fetch in data base
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleOnchage = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };
  console.log("login", data);

  // =========handleSubmit=======
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="login">
      {/* =====container===== */}
      <div className=" mx-auto container px-4">
        <div className=" bg-slate-100 p-5 m-5 w-full max-w-sm mx-auto  rounded-xl">
          {/* ==========sigin animation icon====== */}
          <div className=" w-20 h-20 mx-auto">
            <img src={loginGif} alt="" />
          </div>
          {/* ============login form====== */}
          <form
            action="post"
            className="pt-6 flex-col gap-2"
            onSubmit={handleSubmit}
          >
            <div className=" grid">
              <label> Email</label>
              <div className=" bg-slate-200 p-2 rounded-md">
                <input
                  onChange={handleOnchage}
                  name="email"
                  required
                  value={data.email}
                  type="email"
                  placeholder="enter your email"
                  className="w-full outline-none bg-transparent  "
                />
              </div>
            </div>
            <div className=" ">
              <label> Password</label>
              <div className=" bg-slate-200 p-2 flex rounded-md">
                {" "}
                <input
                  required
                  name="password"
                  value={data.password}
                  onChange={handleOnchage}
                  type={showpassord ? "text" : "password"}
                  placeholder="enter your passkey"
                  className="w-full outline-none bg-transparent  "
                />
                <div
                  className=" cursor-pointer"
                  onClick={() => setShowpassword((preve) => !preve)}
                >
                  <span>{showpassord ? <FaEye /> : <IoMdEyeOff />}</span>
                </div>
              </div>{" "}
              {/* =======foget password==== */}
              <div className="block w-fit ml-auto hover:underline">
                <Link to={"/Forget-password"}>Forget password?</Link>
              </div>
            </div>
            <button className=" capitalize bg-red-900 text-white py-2 w-full max-w-[105px] rounded-full hover:bg-red-600 hover:scale-110 transition-all mx-auto block mt-4">
              login
            </button>
          </form>
          <p className="my-5">
            Don't Have Account ?{" "}
            <Link
              to={"/sign-up"}
              className=" hover:underline text-red-900 hover:text-red-600"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
