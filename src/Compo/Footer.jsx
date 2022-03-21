import React from "react";
import "./footer.css";
import { FaHome, FaMailBulk, FaPhone } from "react-icons/fa";
import { MdWeb } from "react-icons/md";

function Footer() {
  return (
    <footer>
      <div className="footer-section">
        <div className="innersec1">
          <h3>Digital Graphics</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
            magni sequi corporis illum, quasi autem rerum eum doloremque, dolor
            minima, assumenda eligendi. Commodi eos, earum illum maiores nam
            sapiente itaque.
          </p>
        </div>
        <div className="innersec2">
          <h3>Products</h3>
          <ul>
            <li>The Providers</li>
            <li>Creativity</li>
            <li>Source Files</li>
            <li>Alpha</li>
          </ul>
        </div>
        <div className="innersec3">
          <h3>Useful Links</h3>
          <ul>
            <li>
              <a href="">Your Account</a>
            </li>
            <li>
              <a href="https://github.com/Tulaib/test" target={'blank'}>This Project Link</a>
            </li>
            <li>
              <a href="">Help</a>
            </li>
            <li>
              <a href="">Ratings</a>
            </li>
          </ul>
        </div>
        <div className="innersec4">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <FaHome className="icons"/> Karachi, Sindh
            </li>
            <li>
              <FaMailBulk className="icons"/> digitalgraphiks@gmail.com
            </li>
            <li>
              <FaPhone className="icons"/> 00 92 305 2504520
            </li>
            <li>
              <MdWeb className="icons"/> www.digitalgraphiks.com
            </li>
          </ul>
        </div>
      </div>
      <div style={{
          backgroundColor:'#f29292',
          textAlign:'center',
          color:'white',
          padding:'5px'
      }}>
          <h5 >All Rights Reserved @2022</h5>
      </div>
    </footer>
  );
}

export default Footer;
