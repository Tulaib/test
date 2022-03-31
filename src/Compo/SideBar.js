import React, { useState } from "react";
import "./sidebar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiHomeGarage } from "react-icons/gi";
import { GiStaplerHeavyDuty } from "react-icons/gi";
import { GiPerson } from "react-icons/gi";
import { GiContract } from "react-icons/gi";

function SideBar() {

  const [isActive,setisActive] =useState(false)

  return (
    <>
      <div className={isActive === false ? "sidebar" :  "sidebar active"}>
        <div className="sidebar-data ">
          <GiHamburgerMenu style={{cursor:'pointer'}} onClick={()=>setisActive(!isActive)}/>
          <ul>
            <li>
              <a href="#">
                <GiHomeGarage
                  style={{ marginRight: "5px", marginTop: "2px" }}
                />
                <h6>
                Home
                </h6>
              </a>
            </li>
            <li>
              <a href="#">
                <GiStaplerHeavyDuty
                  style={{ marginRight: "5px", marginTop: "2px" }}
                />
                   <h6>
                Services
                </h6>
              </a>
            </li>
            <li>
              <a href="#about">
                <GiPerson
                  style={{ marginRight: "5px", marginTop: "2px" }}
                />
                   <h6>
                About
                </h6>
              </a>
            </li>
            <li>
              <a href="#contact">
                <GiContract
                  style={{ marginRight: "5px", marginTop: "2px" }}
                />
                 <h6>
                Contact
                </h6>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SideBar;
