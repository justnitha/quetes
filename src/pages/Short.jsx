import React, { useState, useEffect } from "react";
import axios from "axios";

export default function BMKG() {
  const [quoteData, setQuoteData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  
  console.log(quoteData);

  const Quetes = () => {
    setIsLoading(true);
    // setShowMessage(false)
    axios
      .get("https://api.quotable.io/quotes/random")
      .then((response) => {
        const quoteeData = response.data;
        setQuoteData(quoteeData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    Quetes();
  }, []);

  const handleOpen = () => {
    setShowMessage(!showMessage);
  };
  return (
    <div className="text-center pt-[50%] sm:pt-25% md:pt-[25%] lg:pt-[20%] h-screen px-5 sm:px-10 md:px-16 lg:px-20 mx-auto bg-gray-700 text-white">
      <h1 className="text-xl">Quetes of the Day</h1>
      {showMessage ? (
        <div>
          <p className="mt-1"><em>{quoteData[0].content}</em></p>
          <p className="mt-3">- {quoteData[0].author} -</p>
          <button
            onClick={Quetes}
            className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md lowercase"
          >
           MUAT ULANG
          </button>
        </div>
      ) : (
        <div>
          <div>
            <p className="my-5">
              SEMOGA MENDAPATKAN QUETES KEBERUNTUNGAN
            </p>
            <button
              onClick={handleOpen}
              className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              mulai
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
