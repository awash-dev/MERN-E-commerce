import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className=" h-16 shadow-md bg-white">
      {/* logo name */}
      <div className=" h-full flex items-center container mx-auto px-4 justify-between">
        <div className=" text-red-900 text-[25px] font-semibold font-serif" >
          <Link to={"/"}>Awash Digital Shop</Link>
        </div>

        {/* ============input name========= */}
        <div className=" hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow-md pl-2">
          <input
            type="text"
            placeholder="Search Product "
            className=" w-full outline-none "
          />

          <div className="text-lg min-w-[50px] h-8 bg-red-900 text-white flex items-center justify-center rounded-r-full">
            <FaSearch />
          </div>
        </div>

        {/* =========login pages============ */}
        <div className=" flex items-center gap-5">
       

          {/* =======user img======== */}
          <div className=" text-3xl cursor-pointer">
            <FaRegUserCircle />
          </div>
             {/* =========add to cart========== */}
             <div className=" text-2xl cursor-pointer">
            <span>
              <FaShoppingCart />
            </span>
            <div className=" bg-red-600 text-white w-5  p-1 flex items-center justify-center h-5 rounded-full absolute -top-[-2px]  ">
              <p className="text-xs">0</p>
            </div>
          </div>
          {/* ===========login button======== */}
          <div>
            <Link to={"/login"} className=" px-3 py-1 rounded-full text-white bg-red-900 hover:bg-red-600 capitalize text-[20px] ">
              login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
