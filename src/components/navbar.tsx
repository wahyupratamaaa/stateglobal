import React from "react";
import { Link } from "react-router-dom";
import { useStore } from "../store/index";

const Navbar = () => {
  const { loading } = useStore();
  return (
    <div
      className={`p-5 w-screen h-[100px] bg-amber-700 text-white flex gap-10 justify-between items-center cursor-pointer font-bold  `}
    >
      <div className="flex gap-5">
        <Link to={"/"}>Home</Link>
        <Link to={"/upload"}>Upload</Link>
      </div>
      {loading && <p>loading</p>}
    </div>
  );
};

export default Navbar;
