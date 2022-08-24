import Background from "@/layouts/background";
import Badge from "@/layouts/badge";
import Coin from "@/components/coin";
import CardLayout from "@/layouts/cardlayout";

const Coins = () => {
  return (
    <>
      <CardLayout>
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
      </CardLayout>
    </>
  );
};

export default Coins;
