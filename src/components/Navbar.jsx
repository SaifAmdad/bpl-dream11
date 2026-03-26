import React, { useState } from "react";
import CoinImg from "../assets/dollar_1.png";

function Navbar({ count }) {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex gap-1 items-center">
          <img src={CoinImg} alt="" srcset="" className="h-5 w-5" />
          {count}
        </div>
      </div>
    </>
  );
}

export default Navbar;
