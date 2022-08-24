// import { useRouter } from 'next/router';

import CardLayout from "@/layouts/cardlayout";
import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Index = () => {
  // const router = useRouter();

  return (
    <Main meta={<Meta title="wagpay swap" description="" />}>
      <CardLayout>
        <ConnectButton.Custom>
          {({ account, chain, openConnectModal, mounted }) => {
            return (
              <div
                {...(!mounted && {
                  "aria-hidden": true,
                  style: {
                    opacity: 0,
                    pointerEvents: "none",
                    userSelect: "none",
                  },
                })}
              >
                {(() => {
                  if (!mounted || !account || !chain) {
                    return (
                      <button
                        onClick={openConnectModal}
                        type="button"
                        className="rounded-full border border-transparent bg-secoandryColor text-white py-2 px-4 text-base font-medium text-wagpay-dark"
                      >
                        Connect Wallet
                      </button>
                    );
                  }
                })()}
              </div>
            );
          }}
        </ConnectButton.Custom>
      </CardLayout>
    </Main>
  );
};

export default Index;
