import React from 'react'

import { SlMagnifier, SlBell } from "react-icons/sl";
import { BsFillPersonFill } from "react-icons/bs";

const AppHeader = () => {
  return (
    <div  className="AppHeader">
         <div className="row">
        {/* <img src={logo} className="App-logo" alt="" /> */}
        <h6 className="title">HerBusiness</h6>
        <div className="vertiline"></div>
        <h6 className="smalltitle">Administrator</h6>

        <SlMagnifier className="search" />
        <SlBell className="bell" />
        <div>
          <BsFillPersonFill className="icon" />
        </div>
      </div>
    </div>
  )
}

export default AppHeader