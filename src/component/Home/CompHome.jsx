import React, { Component, useEffect } from "react";
import quran from "../../img/sampulquran.png";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const CompHome = () => {
  useEffect(() => {
    Aos.init({ duration: 200 });
  }, []);
  return (
    <div
      className="mx-auto text-center h-screen flex justify-center items-center"
      data-aos="zoom-in"
    >
      <div className="default-font">
        <img src={quran} alt="alquran logo" className="w-32 h-32 mx-auto" />
        <h3 className="text-4xl font-bold text-white mb-4 mt-2">Al Qur'an</h3>
        <Link to="/Chooise">
          <button className="bg-white text-gray-800 hover:bg-gray-100 font-semibold px-5 rounded-md text-xl">
            Read
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CompHome;
