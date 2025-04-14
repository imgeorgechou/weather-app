import React from "react";

const Weathercard = ({ data }) => {
  const { name, main, weather, wind, clouds } = data || {};
  const { temp } = main || {};
  // 注意要加上weather?.[0]，因為weather是一個陣列.
  // ?.[0] ：安全地訪問陣列的第一個元素，如果 weather 是 undefined 或 null ，會返回 undefined 而不是拋出錯誤
  const { description } = weather?.[0] || {};
  const { speed } = wind || {};
  const { all } = clouds || {};

  // 根據雲量來判斷天氣狀況，JSX不能直接使用if else，把邏輯抽出來比較好閱讀
  const getWeatherIcon = (cloudCover) => {
    if (cloudCover < 20) return "/sunny.svg";
    if (cloudCover < 50) return "/lesscloud.svg";
    return "/cloud.svg";
  };

  return (
    // 注意要加上data?.length > 0，不然會出現錯誤，因為data是一個物件，所以要加上length > 0
    Object.keys(data || {}).length > 0 ? (
      <div className="bg-[#c0e5ff] w-full h-[350px] rounded-2xl shadow-xl flex flex-col ">
        <h2 className="text-5xl text-gradient font-extrabold  m-3">{name}</h2>
        <div className="flex flex-center">
          <img
            src={getWeatherIcon(all)}
            alt="cloud"
            className="size-50 -ml-11"
          />
          <div>
            <p className="text-7xl text-gradient font-extrabold">
              {Math.round(temp)}℃
            </p>
            <p className="text-primary font-medium my-3">{description}</p>
          </div>
        </div>
        <div className="flex-center gap-25 ">
          <div className="flex flex-col items-center">
            <img
              src="/airflow.svg"
              alt="airflow"
              className="w-[24px] h-[24px]"
            />
            <p className="text-primary font-light my-2">
              {parseInt(speed) * 3.6} km/h
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/rain.svg" alt="rain" className="w-[24px] h-[24px]" />
            <p className="text-primary font-light my-2">{all}</p>
          </div>
        </div>
      </div>
    ) : (
      <></>
    )
  );
};

export default Weathercard;
