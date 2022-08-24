import React, { useState } from "react";
import asset from "public.json";

const coins = [
  {
    id: 1,
    name: "USDC",
    icon: asset.usdc,
  },
  {
    id: 2,
    name: "USDT",
    icon: asset.usdc,
  },
];

const CoinSelect = () => {
  const [isDropDownOpenCoin, setIsDropDownOpenCoin] = useState(false);
  const [value, setValue] = useState("USDC");
  const [icon, setIcon] = useState(asset.usdc);

  const selectedCoin = (coin: any) => {
    setValue(coin.name);
    setIcon(coin.icon);
    setIsDropDownOpenCoin(!isDropDownOpenCoin);
  };

  return (
    <>
      <div className="relative flex items-center  w-full">
        <div
          className="flex text-xl items-center  w-full"
          onClick={() => setIsDropDownOpenCoin(!isDropDownOpenCoin)}
        >
          <div className="form-select flex justify-center w-full cursor-pointer select-none flex-row  border-none bg-tertiaryLight px-1 text-black dark:bg-quaternaryGray dark:text-white">
            <div className="flex flex-row items-center">
              <img
                className="mr-2.5 w-6 h-6 rounded-md object-cover"
                src={icon}
                alt="chain_icon"
              />
              <span className="text-lg leading-6">{value}</span>
            </div>
          </div>
        </div>
        {isDropDownOpenCoin && (
          <div className="absolute top-12 left-0 z-10 overflow-hidden rounded-b-md bg-tertiaryLight text-black shadow dark:bg-secondaryGray w-full dark:text-white">
            {coins.map((coin) => (
              <div
                key={coin.id}
                className="flex s w-full cursor-pointer justify-center select-none flex-row  bg-tertiaryLight py-2.5 pl-3 pr-2 text-white bg-terceryDark dark:bg-secondaryGray"
                onClick={() => selectedCoin(coin)}
              >
                <div className="flex flex-row items-center">
                  <img
                    className="mr-2.5 h-6 w-6 rounded-md bg-gray-300 object-cover"
                    src={coin.icon}
                    alt="chain_icon"
                  />
                  <span className="text-sm leading-6">{coin.name}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CoinSelect;
