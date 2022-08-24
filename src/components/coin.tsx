import Link from "next/link";
import assets from "public.json";
const Coin = () => {
  return (
    <div className="flex cursor-pointer justify-between items-center">
      <div className="text-left">
        <p className="text-2xl">USDC Coin</p>
        <p className="text-sm">ox234...23</p>
      </div>
      <div className="flex space-x-3">
        <p className="text-lg font-bold">1000</p>
        <img src={assets.usdc} alt="" className="w-6 h-6" />
      </div>
    </div>
  );
};
export default Coin;
