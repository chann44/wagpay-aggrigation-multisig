import Background from "@/components/background";
import Badge from "@/components/badge";
import Coin from "@/components/coin";

const Coins = () => {
  return (
    <>
      <div className="h-[80vh] w-full flex justify-center items-center">
        <Background>
          <Badge>
            <Coin />
          </Badge>
          <Badge>
            <Coin />
          </Badge>
          <Badge>
            <Coin />
          </Badge>
        </Background>
      </div>
    </>
  );
};

export default Coins;
