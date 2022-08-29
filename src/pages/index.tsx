import Link from "next/link";

import { ConnectButton } from "@rainbow-me/rainbowkit";

import CardLayout from "@/layouts/cardlayout";
import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";

const Index = () => {
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
                        className="rounded-full border border-transparent bg-secondaryColor text-white py-2 px-4 text-base font-medium text-wagpay-dark"
                      >
                        Connect Wallet
                      </button>
                    );
                  } else {
                    return (
                      <Link href="/safes">
                        <div className="bg-secondaryColor px-4 py-2 text-lg rounded-full">
                          see all your safes
                        </div>
                      </Link>
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
