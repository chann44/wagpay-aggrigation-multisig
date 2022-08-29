import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_TRANSFER_ASSET_MODAL } from "@/redux/types/commonTypes";

const TransferAssetsModal = dynamic(() => import("@/components/modals/TransferAssetsModal"), { ssr: false });

const AssetsLandingPage = () => {
  const dispatch = useDispatch();

  const {
    modals: {
      transferAssetModal
    }
  }: any = useSelector((store: any) => store.appSettingsReducer);

  const handleTransferClick = () => {
    dispatch({
      type: TOGGLE_TRANSFER_ASSET_MODAL,
      isOpen: true,
    });
  }
  return (
    <div className="px-4 lg:px-16 pt-8 lg:pb-24 ">
      <h1 className="text-2xl font-bold text-white">Assets</h1>
      <div className="mb-24">
        <div className="w-full  bg-secondaryDark min-h-52 rounded-2xl p-8 mt-4 text-white ">
          <div className="section-title flex items-center justify-between border-b border-gray-800  pb-4">
            <div className="text-xl">Balance</div>
            <div>
              <input type="search" placeholder="Search here..." className="placeholder-gray-500  px-4 dark-theme-place-holder py-2  border rounded-lg border-gray-800 bg-transparent text-white focus:outline-none" />
            </div>
          </div>
          <div className="flex lg:space-x-8 grow">
            <div className="asset-list-section  lg:basis-2/3 ">
              <div className="flex  items-center justify-between py-4">
                <p className="text-gray-500">
                  Asset Name
                </p>
                <p className="text-gray-500">
                  Balance
                </p>
              </div>
              <div className="list-ui ">
                {
                  React.Children.toArray([1].map(() => {
                    return (
                      <div className="flex items-center justify-between py-2.5">
                        <div className="flex space-x-4 items-center text-white">
                          <Image src="/assets/images/common/ether-logo.png" className="" width={30} height={30} />
                          <div className="flex flex-col ">
                            <p className="text-lg font-semibold text-white">DAI</p>
                            <p className="text-sm text-white">DAI Stable Coin</p>
                          </div>
                        </div>
                        <div className="flex flex-col justify-end text-right">
                          <p className="text-lg font-semibold text-white">323423</p>
                          <p className="text-sm text-white">$1223431.1231</p>
                        </div>
                      </div>
                    )
                  }))
                }
              </div>
            </div>
            <div className="basis-1/3 hidden lg:block">
              <div className="flex items-center justify-center py-4 ">
                <p className="text-gray-500 text-center">
                  Actions
                </p>
              </div>
              <div className="flex justify-center">
                <button
                  className="bg-secondaryColor rounded-lg text-white py-2 uppercase font-bold mt-4 px-12 mx-auto text-center w-52"
                  onClick={() => handleTransferClick()}
                >
                  Transfer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        transferAssetModal && <TransferAssetsModal />
      }
    </div>
  )
}

export default AssetsLandingPage;