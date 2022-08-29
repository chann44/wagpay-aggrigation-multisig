import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_TRANSACTION_PROCESSING_MODAL, TOGGLE_TRANSACTION_REVIEW_MODAL } from "@/redux/types/commonTypes";

const TransactionReviewModal = () => {
  const dispatch = useDispatch();
  const {
    modalsData: {
      transferAssetModal
    }
  }: any = useSelector((store: any) => store.appSettingsReducer);

  const handleClose = () => {
    dispatch({
      type: TOGGLE_TRANSACTION_REVIEW_MODAL,
      isOpen: false,
    });
  }

  const handleContinueTransaction = () => {
    dispatch({
      type: TOGGLE_TRANSACTION_PROCESSING_MODAL,
      isOpen: true,
    });

    setTimeout(() => {
      dispatch({
        type: TOGGLE_TRANSACTION_PROCESSING_MODAL,
        isOpen: false,
      });
      console.warn('Transaction completed')
    }, 3000)
  }

  return (
    <div id="transaction-review-modal" tabIndex={-1} className="custom-modal overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
      <div className="relative p-4 w-full mt-32 max-w-md h-full mx-auto md:h-auto">
        <div className="relative bg-white rounded-lg shadow ">
          <div className="flex justify-between font-medium items-center p-3 pl-6 rounded-t border-b ">
            Review Transaction Details
            <button type="button" onClick={() => handleClose()} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900  text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white rounded-full" >
              <svg aria-hidden="true" className="w-5 h-5 rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-6 justify-center flex flex-col dark:bg-white rounded-b-lg text-sm font-300">
            {/* Chain Component -> Potential Reusable */}
            <div className="bg-gray-100 rounded-lg px-4 py-3 flex flex-col space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Image src={transferAssetModal?.fromNetwork?.icon} className="rounded-full" width={20} height={20} />
                  <p className="text-xs font-semibold">{transferAssetModal.fromNetwork.name}</p>
                </div>

                <Image src="/assets/images/common/arrow.svg" className="" width={20} height={20} />
                <div className="flex items-center space-x-3">
                  <p className="text-xs font-semibold">{transferAssetModal.toNetwork.name}</p>
                  <Image src={transferAssetModal?.toNetwork?.icon} className="rounded-full" width={20} height={20} />
                </div>
              </div>
              <div className="flex items-center justify-between text-xs">
                <div>
                  <div className="flex items-center space-x-2">
                    <Image src={transferAssetModal?.assetFrom?.icon} className="rounded-full" width={20} height={20} />
                    <div className="flex flex-col ">
                      <p className="text-xs font-bold">{transferAssetModal.transferAmount} DAI</p>
                      <p className="text-xs ">$1</p>
                    </div>
                  </div>
                  <p className="py-0.5">Amount Being Sent</p>
                </div>
                <div className="text-right ">
                  <div className="flex items-center space-x-3 justify-end">
                    <div className="flex flex-col ">
                      <p className="text-xs font-bold">{transferAssetModal.recievedAmount} DAI</p>
                      <p className="text-xs text-right">$1</p>
                    </div>
                    <Image src={transferAssetModal?.assetTo?.icon} className="rounded-full" width={20} height={20} />
                  </div>
                  <p className="py-0.5">Amount Being Received</p>
                </div>
              </div>
            </div>
            <div className="my-4 text-xs">
              <div className="flex justify-between items-center ">
                <p>
                  Receiving Address
                </p>
                <p>
                  edfnndkjnkenw
                </p>
              </div>
              <div className="flex justify-between items-center ">
                <p>
                  Number of Signatures Required
                </p>
                <p>
                  2
                </p>
              </div>
              <div className="flex justify-between items-center ">
                <p>
                  Expected Nonce
                </p>
                <p>
                  47820
                </p>
              </div>
            </div>
            <button className="bg-secondaryColor rounded-lg text-white py-2 uppercase font-bold" onClick={() => handleContinueTransaction()}>
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransactionReviewModal
