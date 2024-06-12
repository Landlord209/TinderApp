import React from 'react'
import { FaUser } from "react-icons/fa";
import { SiTinder } from 'react-icons/si';
import {BiSolidChat } from 'react-icons/bi';
import headStyle from "./header.module.css"


const Header = () => {
  
  return (
    <div className={headStyle.allhead}>
        <FaUser className={headStyle.profile} />

      <SiTinder className={headStyle.profile}/>
      
      <BiSolidChat className={headStyle.profile}/>      
      
    </div>
  )
}

export default Header
