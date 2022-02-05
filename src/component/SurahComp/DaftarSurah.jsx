import React, { Fragment, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const DaftarSurah = () => {
  const [surah, setSurah] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://equran.id/api/surat").then((response) => {
      const data = response.data;
      console.log(response);
      setSurah(data);
      setLoading(false);
    });
  }, []);

  return (
    <Fragment>
      <div className="flex justify-between mx-4 mt-5 default-font">
        <div>
          <h1 className="lg:text-3xl md:text-2xl text-xl text-white font-bold underline  underline-offset-4 ml-0 lg:ml-20">
            Daftar Surah
          </h1>
        </div>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button
              type="button"
              title="search"
              className="p-1 focus:outline-none focus:ring"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 512 512"
                className="w-4 h-4"
              >
                <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
              </svg>
            </button>
          </span>
          <input
            type="search"
            name="Search"
            placeholder="Cari Surah..."
            className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none focus:border-violet-400"
          />
        </div>
      </div>
      {loading ? (
        <div className="flex justify-center items-center pb-20 h-screen">
          <ClimbingBoxLoader size={20} color={"#ffffff"} loading={loading} />
        </div>
      ) : (
        <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {surah.map((data) => (
            <div
              key={data.nomor}
              className="flex flex-col justify-center flex-1 p-4 bg-white/70 text-gray-800 mx-4 my-2 rounded-md shadow-lg default-font"
            >
              <Link to={`/ShowSurah/${data.nomor}/`}>
                <div className="flex flex-row  items-center">
                  <div className=" basis-1/6">
                    <h3 className="text-md md:2xl font-thin">{data.nomor}</h3>
                  </div>
                  <div className="basis-1/2">
                    <h3 className="text-lg md-2xl font-light hover:underline hover:">
                      {data.nama_latin}
                    </h3>
                    <p className="mb-1 font-light text-sm md:text-md ">
                      {data.arti}
                    </p>
                    <p className="mb-1 font-thin text-sm md:text-md">
                      {data.jumlah_ayat} ayat
                    </p>
                  </div>
                  <div className="basis-1/2">
                    <h3 className="text-2xl md:3xl lg:text-4xl font-light mr-5 arabic-font text-right">
                      {data.nama}
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default DaftarSurah;
