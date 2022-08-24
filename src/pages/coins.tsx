import Background from "@/layouts/background";
import Badge from "@/layouts/badge";
import Coin from "@/components/coin";
import CardLayout from "@/layouts/cardlayout";
import Link from "next/link";

const Coins = () => {
  return (
    <>
      <CardLayout>
        <Background>
          <Badge>
            <Link href="/transection">
              <div>
                <Coin />
              </div>
            </Link>
          </Badge>
        </Background>
      </CardLayout>
    </>
  );
};

export default Coins;
