import ChainSelect from "@/components/chainselect";
import Coin from "@/components/coin";
import CoinSelect from "@/components/coinselect";
import Background from "@/layouts/background";
import Badge from "@/layouts/badge";
import CardLayout from "@/layouts/cardlayout";

const Transection = () => {
  return (
    <>
      <CardLayout>
        <Background>
          <div className="w-full flex space-x-3">
            <div className="w-[50%] xl:block hidden space-y-2">
              <Badge>
                <Coin />
              </Badge>
              <Badge>
                <Coin />
              </Badge>
              <Badge>
                <Coin />
              </Badge>
            </div>
            <div className="w-full xl:w-[50%] p-4 lg:pt-14 space-y-4">
              <div className="flex space-x-2">
                <div className="bg-terceryDark w-full flex justify-center">
                  <ChainSelect />
                </div>
                <div className="bg-terceryDark w-full flex justify-center">
                  <CoinSelect />
                </div>
              </div>
              <div className="space-y-2">
                <Badge>
                  <div className="flex justify-between">
                    <p>you recive: </p>
                    <p>100x</p>
                  </div>
                </Badge>
                <Badge>
                  <div className="flex justify-between">
                    <p>slipage: </p>
                    <p>0.12</p>
                  </div>
                </Badge>
                <Badge>
                  <div className="flex justify-between">
                    <p>bridge:</p>
                    <p>hypehen</p>
                  </div>
                </Badge>
                <button className="bg-secoandryColor w-full p-2 text-white">
                  swap
                </button>
              </div>
            </div>
          </div>
        </Background>
      </CardLayout>
    </>
  );
};

export default Transection;
