import React from "react";

const Footer = () => {
  return (
    <div className="text-center p-3 z-1 bg-black border-t-2 border-white text-white ">
      <div className="flex justify-center md:justify-between items-center flex-wrap">
        <div className="p-5 md:p-10 ">
          <p>Copyright © 2024 4xportal. All rights reserved.</p>
        </div>
        <div className="footer-section links">
          <ul className="flex flex-col md:flex-row items-center justify-center md:justify-around list-none md:space-x-4">
            <li>
              <a href="#">Restricted Countries</a>
            </li>
            <li>
              <a href="#">Disclaimer</a>
            </li>
            <li>
              <a href="#">Legal</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Risk Warning Notice</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
