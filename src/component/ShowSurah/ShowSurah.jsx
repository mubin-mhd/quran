import axios from "axios";
import React, { useEffect, Fragment } from "react";
import { useState } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { useParams } from "react-router-dom";

const ShowSurah = () => {
  const [isShow, setShow] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://equran.id/api/surat/${id}`).then((result) => {
      const dataSurah = result.data;
      console.log(dataSurah);
      setShow(dataSurah);
      setLoading(false);
    });
  }, []);

  const url = `https://equran.id/content/audio/00${id}.mp3`;

  const useAudio = () => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
      playing ? audio.play() : audio.pause();
    }, [playing]);

    useEffect(() => {
      audio.addEventListener("ended", () => setPlaying(false));
      return () => {
        audio.removeEventListener("ended", () => setPlaying(false));
      };
    }, []);
    return [playing, toggle];
  };

  const [playing, toggle] = useAudio(url);

  return (
    <Fragment>
      {isLoading ? (
        <div className="flex justify-center items-center pb-20 h-screen">
          <ClimbingBoxLoader size={20} color={"#ffffff"} loading={isLoading} />
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-3xl font-bold text-center my-10 text-white">
            {isShow.nama_latin}
            <span className="ml-2">
              <button onClick={toggle}>
                {playing ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </span>
          </h1>

          {isShow.ayat.map((res) => (
            <div
              key={res.id}
              className="pb-4 pt-8 px-6 mb-4 rounded-lg bg-white/40  max-w-screen-md mx-auto"
            >
              <div className="flex items-center justify-center arabic-font">
                <h3 className="text-3xl font-light text-center text-black leading-relaxed">
                  {res.ar}
                  <span className="bg-white text-gray-800 p-1 rounded-full leading-5 text-center mr-2 font-light text-sm">
                    {res.nomor}
                  </span>
                </h3>
              </div>

              <p className="mt-2 mb-4 text-sm text-gray-600 font-semibold lg:px-20 text-center">
                {res.idn}
              </p>
            </div>
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default ShowSurah;
