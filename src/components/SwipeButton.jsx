import React from "react";
import swipeStyle from "./swipebutton.module.css";
import { BsX } from "react-icons/bs";
import { IoReloadSharp } from "react-icons/io5";
import { BsStarFill } from "react-icons/bs";
import { BiSolidHeart } from "react-icons/bi";
import { BsLightningFill } from "react-icons/bs";

const SwipeButton = () => {
  return (
    <div className={swipeStyle.allIcons}>
      <div className={swipeStyle.iconBox}>
        <IoReloadSharp className={swipeStyle.icon} />
      </div>
      <div className={swipeStyle.iconBox}>
        <BsX className={swipeStyle.icon}/>
      </div>
      <div className={swipeStyle.iconBox}>
        <BiSolidHeart className={swipeStyle.icon}/>
      </div>

      <div className={swipeStyle.iconBox}>
        <BsStarFill className={swipeStyle.icon}/>
      </div>
      <div className={swipeStyle.iconBox}>
        <BsLightningFill className={swipeStyle.icon} />
      </div>
    </div>
  );
};

export default SwipeButton;
