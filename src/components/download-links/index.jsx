import React from "react";
import { IoLogoApple } from "react-icons/io5";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faUser, faAndroid } from "@fortawesome/free-solid-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";
const DownloadLinks = () => {
  return (
    <div className="bg-gray-100 border rounded">
      <h1 className="font-bold text-2xl m-9">Download Links</h1>

      <div className="grid grid-cols-2 gap-4 p-6 mb-9 font-bold">
        <button
          type="text"
          className="bg-gray-300 border border-blue-300 p-4 rounded-xl"
        >
          <a
            href="https://download.mql5.com/cdn/web/vebson.ltd/mt5/vebson5setup.exe"
            target="_blank"
            class="btn btn-next btn-lg w-100 text-black-100"
            role="button"
          >
            <i class="fab fa-windows"></i> (MT5) Web Terminal
          </a>
        </button>
        <button
          type="text"
          className="bg-gray-300 border border-blue-300 p-3 rounded-xl"
        >
          <a
            href="https://download.mql5.com/cdn/web/vebson.ltd/mt5/vebson5setup.exe"
            target="_blank"
            class="btn btn-next btn-lg w-100 text-black-100"
            role="button"
          >
            <i class="fab fa-windows"></i> (MT5) Windows
          </a>
        </button>
        <button
          type="text"
          className="bg-gray-300 border border-blue-300 p-3 rounded-xl"
        >
          <a
            href="https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/metatrader5.apk?utm_source=mt4webterminal&amp;utm_campaign=install.metaquotes"
            target="_blank"
            class="btn btn-next btn-lg w-100 text-black-100"
            role="button"
          >
            <i class="fab fa-android"></i> <FontAwesomeIcon icon={faAndroid} />{" "}
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
            class="btn btn-next btn-lg w-100 text-black-100"
            role="button"
          >
            <FontAwesomeIcon icon={faApple} />
            <i class="fab fa-apple"></i> (MT5) iOS{" "}
          </a>
        </button>
      </div>
    </div>
  );
};

export default DownloadLinks;
