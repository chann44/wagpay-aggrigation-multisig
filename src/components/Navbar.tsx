import Link from "next/link";
import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar2 = () => {
  return (
    <header className="bg-wagpay-dark pb-4 lg:pb-0">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-6 ">
          <div className="flex items-center">
            <Link href="/">
              <a className="text-[#615CCD]">
                <span className="sr-only">Wagpay</span>
                <h2 className="text-3xl font-bold ">Wagpay.</h2>
              </a>
            </Link>
          </div>
          <div className="flex items-center cursor-pointer space-x-8 ">
            <ConnectButton.Custom>
              {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                mounted,
              }) => {
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

                      if (chain.unsupported) {
                        return (
                          <button
                            onClick={openChainModal}
                            type="button"
                            className="rounded-full border border-transparent bg-red-600 py-2 px-4 text-base font-medium text-white"
                          >
                            Wrong network
                          </button>
                        );
                      }
                      return (
                        <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0 md:space-x-4 lg:space-x-6">
                          <button
                            onClick={openChainModal}
                            className="flex items-center text-white rounded-full border border-transparent bg-[#615CCD] px-1 text-base font-medium  "
                            type="button"
                          >
                            {chain.hasIcon && (
                              <div
                                style={{
                                  background: chain.iconBackground,
                                  width: 28,
                                  height: 28,
                                  borderRadius: 999,
                                  overflow: "hidden",
                                  marginRight: 4,
                                }}
                              >
                                {chain.iconUrl && (
                                  <img
                                    alt={chain.name ?? "Chain icon"}
                                    src={chain.iconUrl}
                                    style={{ width: 28, height: 28 }}
                                  />
                                )}
                              </div>
                            )}
                            <span className="rounded-full  px-4 py-2">
                              {chain.name}
                            </span>
                          </button>

                          <button
                            onClick={openAccountModal}
                            type="button"
                            className="rounded-full px-7  bg-[#615CCD]  text-base text-white "
                          >
                            {account.displayName}
                          </button>
                        </div>
                      );
                    })()}
                  </div>
                );
              }}
            </ConnectButton.Custom>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar2;
