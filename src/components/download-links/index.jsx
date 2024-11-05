import React from "react";
import { IoLogoApple } from "react-icons/io5";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee, faUser, faAndroid } from "@fortawesome/free-solid-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";
const DownloadLinks = () => {
  return (
    <>
      <div className="bg-gray-100 border-4 rounded-xl m-3">
        <h1 className="font-bold text-2xl m-9 w-[18%] bg-blue-500 p-4 border-4 rounded-xl">
          Download Links
        </h1>

        <div className="grid grid-cols-2 gap-4 p-6 mb-9 font-bold">
          <button
            type="text"
            className="bg-gray-300 border border-blue-300 p-4 rounded-xl"
          >
            <a
              href="https://download.mql5.com/cdn/web/vebson.ltd/mt5/vebson5setup.exe"
              target="_blank"
              className="btn btn-next btn-lg w-100 text-black-100"
              role="button"
            >
              <i className="fab fa-windows"></i> (MT5) Web Terminal
            </a>
          </button>
          <button
            type="text"
            className="bg-gray-300 border border-blue-300 p-3 rounded-xl"
          >
            <a
              href="https://download.mql5.com/cdn/web/vebson.ltd/mt5/vebson5setup.exe"
              target="_blank"
              className="btn btn-next btn-lg w-100 text-black-100"
              role="button"
            >
              <i className="fab fa-windows"></i> (MT5) Windows
            </a>
          </button>
          <button
            type="text"
            className="bg-gray-300 border border-blue-300 p-3 rounded-xl"
          >
            <a
              href="https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/metatrader5.apk?utm_source=mt4webterminal&amp;utm_campaign=install.metaquotes"
              target="_blank"
              className="btn btn-next btn-lg w-100 text-black-100"
              role="button"
            >
              {/* <i class="fab fa-android"></i> <FontAwesomeIcon icon={faAndroid} />{" "} */}
              (MT5) Android
            </a>
          </button>
          <button
            type="text"
            className="bg-gray-300 border border-blue-300 p-3 rounded-xl"
          >
            <a
              href="https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/MetaTrader5.pkg.zip?utm_source=mt4webterminal&amp;utm_campaign=hi.help.menu"
              target="_blank"
              className="btn btn-next btn-lg w-100 text-black-100"
              role="button"
            >
              <FontAwesomeIcon icon={faApple} />
              <i className="fab fa-apple"></i> (MT5) iOS{" "}
            </a>
          </button>
        </div>
        <div></div>
      </div>
      <p className="text-center p-4">
        it is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries, but also
        the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </p>
    </>
  );
};

export default DownloadLinks;
