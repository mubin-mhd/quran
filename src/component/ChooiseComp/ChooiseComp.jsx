import React, { Component, useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const ChooiseComp = () => {
  useEffect(() => {
    Aos.init({ duration: 200 });
  }, []);
  return (
    <div className="mx-auto text-center h-screen flex justify-center items-center relative scale-75 md:scale-95 lg:scale-100">
      <div className="default-font" data-aos="zoom-in">
        <div className="inline mb-4">
          <Link to="/Read">
            <button className="bg-white hover:bg-gray-100 hover:font-bold px-5 rounded-md text-2xl py-2 w-40 my-3 text-gray-800 font-semibold block">
              Baca Qur'an
            </button>
          </Link>
          <Link to="/ListTafsir">
            <button className="bg-white hover:bg-gray-100 hover:font-bold px-5 rounded-md text-2xl py-2 w-40 my-3 text-gray-800 font-semibold block">
              Tafsir
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChooiseComp;
