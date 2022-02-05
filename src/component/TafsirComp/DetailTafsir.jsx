import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import Markdown from "marked-react";
import { useParams } from "react-router-dom";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function DetailTafsir() {
  const [detail, setDetail] = useState([]);
  const [surat, setSurat] = useState([]);
  const { id } = useParams();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://equran.id/api/tafsir/${id}`).then((res) => {
      const dataTafsir = res.data.tafsir;
      setDetail(dataTafsir);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    axios.get(`https://equran.id/api/tafsir/${id}`).then((res) => {
      const dataSurat = res.data;
      console.log(res.data);
      setSurat(dataSurat);
    });
  }, []);

  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text">
        {isReadMore ? text.slice(0, 150) : text}
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? (
            <button className="underline ml-2 text-gray-100">
              ...Read more
            </button>
          ) : (
            <button className="underline ml-2 text-gray-100">
              ...Read less
            </button>
          )}
        </span>
      </p>
    );
  };

  return (
    <Fragment>
      {isLoading ? (
        <div className="flex justify-center items-center pb-20 h-screen">
          <ClimbingBoxLoader size={20} color={"#ffffff"} loading={isLoading} />
        </div>
      ) : (
        <div>
          {detail.map((result) => (
            <div key={result.id} className="mt-10">
              <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-white/40">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white">Ayat {result.ayat}</span>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="px-1 text-sm font-bold rounded bg-white/80 text-gray-900"
                  >
                    Tafsir {surat.nama_latin}
                  </a>
                </div>
                <div className="mt-3">
                  <p className="mt-2 text-justify">
                    <ReadMore>{result.tafsir}</ReadMore>
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="flex items-center"
                    >
                      <span className="hover:underline text-gray-100 italic">
                        {surat.jumlah_ayat} ayat, {surat.tempat_turun}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </Fragment>
  );
}

export default DetailTafsir;
