import React, { useState } from "react";
import Weathercard from "./component/Weathercard";
import Spinner from "./component/Spinner";

const App = () => {
  // input存放使用者輸入的城市名稱
  const [city, setCity] = useState("");
  // weather等api抓完資料後存放天氣資訊
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // 按下按鈕後，呼叫handleSearch函式
  // 傳入使用者輸入的城市名稱，並將天氣資訊存到weather中
  // 用async await加上try, catch來等待api回傳資料
  const handleSearch = async (city) => {
    try {
      setLoading(true);
      const apiKey = "70a4fe505eadfa475abc6484b25c7bfd";
      // 注意要加上encodeURIComponent，不然會出現亂碼，才可以用中文查
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        city
      )}&appid=${apiKey}&units=metric&lang=zh_tw`;
      setCity("");
      const response = await fetch(url);
      // response.json()會回傳一個promise，所以要用await等待api回傳資料
      const data = await response.json();
      console.log(data);
      setWeather(data);
      setError(false);
      // 如果api回傳的資料中cod為404，代表查詢失敗，因為這api不會直接傳error，而是會傳一個cod為404的物件
      if (data.cod === "404") {
        setError(true);
      }
      setLoading(false);
    } catch (error) {
      console.error("查詢失敗", error);
      setError(true);
      setLoading(false);
    }
  };

  return (
    // 使用 min-h-screen 替代 h-screen，並添加 overflow-x-hidden 來防止水平滾動。
    <div className="bg-[#4A7DFF] min-h-screen w-full flex-center overflow-x-hidden">
      {/* 天氣查詢 */}
      <div className="flex-col-center mx-3 ">
        <h1 className="text-4xl text-white font-bold py-1">城市天氣查詢</h1>
        <p className="text-white/80 font-medium py-1">
          輸入城市名稱，查詢即時天氣狀況
        </p>
        {/* 搜尋列 */}
        <div className="flex w-full my-5 shadow-xl">
          <input
            className="input "
            type="text"
            placeholder="請輸入城市名稱"
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
          <button className="btn" onClick={() => handleSearch(city)}>
            查詢
          </button>
        </div>
        {/* 天氣卡片 */}
        {/* 傳整個物件到wethercard，也可以先傳需要的特定屬性 */}
        {loading ? (
          <Spinner />
        ) : error ? (
          <p className="text-gray-700 font-light">
            查詢失敗，請試試看其他城市或使用英文查詢。
          </p>
        ) : (
          <Weathercard data={weather} />
        )}
        <footer className="text-white/80 text-[10px] font-medium px-5 py-3 bg-blue-600 rounded-full mt-6">
          API資料來源：OpenWeatherMap <br />
          Developer：GeorgeZhou 周致祥 ｜ IconDesigner：
          <a
            href="https://www.figma.com/community/file/1126777451931792118"
            target="_blank"
            className="underline hover:text-white"
          >
            BilalArve
          </a>
        </footer>
      </div>
    </div>
  );
};

export default App;
