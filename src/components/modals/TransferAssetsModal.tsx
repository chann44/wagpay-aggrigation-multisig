import React, { useState } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";

import { CHAIN_LIST } from "@/utils/AppConfig";
import { SET_TRANSFER_ASSET_DATA_MODAL, TOGGLE_TRANSACTION_REVIEW_MODAL, TOGGLE_TRANSFER_ASSET_MODAL } from "@/redux/types/commonTypes";

type ChainPropType = {
  id: number;
  name: string;
  icon: string
}

const TransferAssetsModal = () => {
  const dispatch = useDispatch();
  const [showNetworkDropDown, setNetworkDropDown] = useState("")
  const [transferData, setTransferData] = useState({
    fromNetwork: CHAIN_LIST[0],
    toNetwork: CHAIN_LIST[0],
    assetFrom: CHAIN_LIST[0],
    assetTo: CHAIN_LIST[0],
    transferAmount: 0,
    recievedAmount: 0,
  })

  const handleNetworkSelection = (type: string, value: ChainPropType | number) => {
    handleNetworkOptions("none")
    setTransferData(prevState => {
      return {
        ...prevState,
        [type]: value,
      }
    })
  }

  const handleClose = () => {
    dispatch({
      type: TOGGLE_TRANSFER_ASSET_MODAL,
      isOpen: false,
    });
  }
  const handleTransferClick = () => {
    dispatch({
      type: SET_TRANSFER_ASSET_DATA_MODAL,
      payload: transferData
    })
    dispatch({
      type: TOGGLE_TRANSACTION_REVIEW_MODAL,
      isOpen: true,
    })
  }

  const handleNetworkOptions = (section: string) => {
    setNetworkDropDown(section);
  }

  const handleInputChange = (e: any) => {
    const amount = parseFloat(e.target.value)
    if (isNaN(amount)) {
      return
    }
    setTransferData(prevState => {
      return {
        ...prevState,
        transferAmount: amount,
        recievedAmount: amount * 2,
      }
    })
  }

  // console.warn(transferData)
  return (
    <div id="tranfer-asset-modal" tabIndex={-1} className="custom-modal overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
      <div className="relative p-4 w-full mt-24 max-w-md h-full mx-auto md:h-auto">
        <div className="relative bg-white rounded-lg shadow text-black">
          <div className="flex justify-between font-medium items-center p-3 pl-6 rounded-t border-b ">
            Transfer
            <button type="button" onClick={() => handleClose()} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900  text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white rounded-full" >
              <svg aria-hidden="true" className="w-5 h-5 rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-6 justify-center flex flex-col dark:bg-white rounded-b-lg text-xs">
            <div className="flex items-center space-x-4 justify-between">
              <div className="">
                <p>Transfer From</p>
                <div className="flex items-center my-2 cursor-pointer w-32 min-w-32 justify-between relative  border border-gray-100 px-2 py-1 rounded-lg"
                  onClick={() => handleNetworkOptions("from-section-1")}
                  onMouseLeave={() => handleNetworkOptions("none")}
                >
                  <div className="flex items-center space-x-2 " >
                    <Image src={transferData?.fromNetwork?.icon || ""} className="rounded-full" width={20} height={20} />
                    <div className="" >{transferData.fromNetwork?.name} </div>
                  </div>
                  <Image src="/assets/images/common/down-icon.png" className={`${showNetworkDropDown === 'from-section-1' ? 'rotate-180' : 'rotate-0'} `} width={20} height={20} />
                  <div className={`absolute cursor-pointer z-10 top-7 w-32 min-w-32 bg-white border border-gray-100 left-0 rounded-lg px-2 py-1 ${showNetworkDropDown === 'from-section-1' ? 'block' : 'hidden'}`}>
                    {
                      React.Children.toArray(CHAIN_LIST.map(item => {
                        return (
                          <div className="flex items-center space-x-2 my-2" onClick={() => handleNetworkSelection("fromNetwork", item)}>
                            <Image src={item.icon} className="rounded-full" width={20} height={20} />
                            <div className="pt-1" >{item.name} </div>
                          </div>
                        )
                      }))
                    }
                  </div>
                </div>
              </div>
              <Image src="/assets/images/common/transaction.png" className="" width={20} height={20} />
              <div className="relative" >
                <p>Transfer To</p>
                <div className="flex items-center cursor-pointer my-2 w-32 min-w-32 justify-between relative border border-gray-100 px-2 py-1 rounded-lg"
                  onClick={() => handleNetworkOptions("from-section-2")}
                  onMouseLeave={() => handleNetworkOptions("none")}
                >
                  <div className="flex items-center space-x-2 " >
                    <Image src={transferData?.toNetwork?.icon || ""} className="rounded-full" width={20} height={20} />
                    <div className="" >{transferData.toNetwork?.name} </div>
                  </div>
                  <Image src="/assets/images/common/down-icon.png" className={`${showNetworkDropDown === 'from-section-2' ? 'rotate-180' : 'rotate-0'} `} width={20} height={20} />
                  <div className={`absolute cursor-pointer z-10 top-7 w-32 min-w-32 bg-white  border border-gray-100 left-0 rounded-lg px-2 py-1 ${showNetworkDropDown === 'from-section-2' ? 'block' : 'hidden'}`}>
                    {
                      React.Children.toArray(CHAIN_LIST.map(item => {
                        return (
                          <div className="flex items-center space-x-2 my-2" onClick={() => handleNetworkSelection("toNetwork", item)}>
                            <Image src={item.icon} className="rounded-full" width={20} height={20} />
                            <div className="pt-1" >{item.name} </div>
                          </div>
                        )
                      }))
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className="my-2">
              <p>You Send</p>
              <div className="flex items-center py-2">
                <input
                  type="number"
                  placeholder="0.0"
                  className="border border-gray-100 p-2 rounded-l-lg basis-2/3"
                  onKeyUp={(e) => handleInputChange(e)}
                />
                <div className="basis-1/3 border border-gray-100 p-1 rounded-r-lg relative" onClick={() => handleNetworkOptions("from-section-3")}
                  onMouseLeave={() => handleNetworkOptions("none")}>
                  <div>
                    <span className="flex items-center space-x-2 " >
                      <Image src={transferData?.assetFrom?.icon || ""} className="rounded-full" width={20} height={20} />
                      <span className="" >{transferData.assetFrom?.name} </span>
                    </span>
                    <div className={`absolute cursor-pointer z-10 top-7 w-32 min-w-32 bg-white  border border-gray-100 left-0 rounded-lg px-2 py-1 ${showNetworkDropDown === 'from-section-3' ? 'block' : 'hidden'}`}>
                      {
                        React.Children.toArray(CHAIN_LIST.map(item => {
                          return (
                            <div className="flex items-center space-x-2 my-2" onClick={() => handleNetworkSelection("assetFrom", item)}>
                              <Image src={item.icon} className="rounded-full" width={20} height={20} />
                              <div className="pt-1">{item.name} </div>
                            </div>
                          )
                        }))
                      }
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center py-2">
                <p className="border border-gray-100 p-2 rounded-l-lg basis-2/3" > {transferData.recievedAmount}</p>
                <div className="basis-1/3 border border-gray-100 p-1 rounded-r-lg relative" onClick={() => handleNetworkOptions("from-section-4")}
                  onMouseLeave={() => handleNetworkOptions("none")}>
                  <div >
                    <span className="flex items-center space-x-2 " >
                      <Image src={transferData?.assetTo?.icon || ""} className="rounded-full" width={20} height={20} />
                      <span className="" >{transferData.assetTo?.name} </span>
                    </span>
                    <div className={`absolute cursor-pointer z-10 top-7 w-32  min-w-32 bg-white  border border-gray-100 left-0 rounded-lg px-2 py-1 ${showNetworkDropDown === 'from-section-4' ? 'block' : 'hidden'}`}>
                      {
                        React.Children.toArray(CHAIN_LIST.map(item => {
                          return (
                            <div className="flex items-center space-x-2 my-2" onClick={() => handleNetworkSelection("assetTo", item)}>
                              <Image src={item.icon} className="rounded-full" width={20} height={20} />
                              <div className="pt-1" >{item.name} </div>
                            </div>
                          )
                        }))
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="bg-secondaryColor rounded-lg text-white py-2 uppercase font-bold mt-4 cursor-pointer disabled:opacity-25"
              onClick={() => handleTransferClick()}
              disabled={!transferData.transferAmount && !transferData.recievedAmount}
            >
              Transfer
            </button>
          </div>
        </div>
      </div>
    </div >
  )
}

export default TransferAssetsModal;