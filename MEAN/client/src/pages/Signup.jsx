import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import loginGif from "../assest/signin.gif";
import { IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import imageTobase64 from "../helper/imageTobase64";
const Signup = () => {
  // showpassord information
  const [showpassord, setShowpassword] = useState(false);
  //  on to on show password
  const [showConfirm, setShowconfirm] = useState(false);
  //   data fetch in data base
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    confirmpassword: "",
    profile: "",
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

  // =====profile image upload====
  const handleUpload = async (e) => {
    const file = e.target.files[0];

    const image = await imageTobase64(file);
    console.log("image", image);

    // =====save local storage=
    setData((preve) => {
      return {
        ...preve,
        profile: image,
      };
    });
  };

  // =========handleSubmit=======
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="Signup">
      {/* =====container===== */}
      <div className=" mx-auto container px-4">
        <div className=" bg-slate-100 p-5 m-5 w-full max-w-sm mx-auto  rounded-xl">
          {/* ==========sigin animation icon====== */}
          <div className=" w-20 h-20 mx-auto relative overflow-hidden rounded-full">
            <div>
              <img src={data.profile || loginGif} alt="" />
            </div>
            <form>
              <label>
                <div className="text-xs bg-opacity-80 bg-slate-100 pb-5 cursor-pointer pt-3 text-center absolute bottom-0 w-full">
                  upload photo
                </div>
                <input type="file" className="hidden" onChange={handleUpload} />
              </label>
            </form>
          </div>
          {/* ============login form====== */}
          <form
            action="post"
            className=" pt-6 flex-col gap-2"
            onSubmit={handleSubmit}
          >
            <div className=" grid">
              <label> Name</label>
              <div className=" bg-slate-200 p-2 rounded-md">
                <input
                  onChange={handleOnchage}
                  name="name"
                  value={data.name}
                  type="text"
                  placeholder="Enter Full Name"
                  required
                  className="w-full outline-none bg-transparent  "
                />
              </div>
            </div>
            <div className=" grid">
              <label> Email</label>
              <div className=" bg-slate-200 p-2 rounded-md">
                <input
                  onChange={handleOnchage}
                  required
                  name="email"
                  value={data.email}
                  type="email"
                  placeholder="enter your email"
                  className="w-full outline-none bg-transparent  "
                />
              </div>
            </div>
            {/* =======password======= */}
            <div className=" ">
              <label>New Password</label>
              <div className=" bg-slate-200 p-2 flex rounded-md">
                {" "}
                <input
                  name="password"
                  value={data.password}
                  onChange={handleOnchage}
                  required
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
            </div>

            {/* =======confirm password======= */}
            <div className=" ">
              <label>confirm Password</label>
              <div className=" bg-slate-200 p-2 flex rounded-md">
                {" "}
                <input
                  name="confirmpassword"
                  value={data.confirmpassword}
                  required
                  onChange={handleOnchage}
                  type={showConfirm ? "text" : "password"}
                  placeholder="enter your passkey"
                  className="w-full outline-none bg-transparent  "
                />
                <div
                  className=" cursor-pointer"
                  onClick={() => setShowconfirm((preve) => !preve)}
                >
                  <span>{showConfirm ? <FaEye /> : <IoMdEyeOff />}</span>
                </div>
              </div>{" "}
            </div>

            {/* ======login <button></button>==== */}
            <button className=" capitalize bg-red-900 text-white py-2 w-full max-w-[105px] rounded-full hover:bg-red-600 hover:scale-110 transition-all mx-auto block mt-4">
              Sign Up
            </button>
          </form>
          <p className="my-5">
            already Have Account ?{" "}
            <Link
              to={"/login"}
              className=" hover:underline text-red-900 hover:text-red-600"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Signup;
