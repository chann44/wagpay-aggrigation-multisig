import React from "react";
import Image from "next/image";

const TransactionProcessingModal = () => {
  return (
    <div id="transaction-review-modal" tabIndex={-1} className="custom-modal overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
      <div className="relative p-4 w-full mt-32 max-w-md h-full mx-auto md:h-auto">
        <div className="relative bg-white rounded-lg shadow ">
          <div className="flex justify-center font-medium items-center p-3 rounded-t border-b   ">
            Transaction Processing
          </div>
          <div className="p-6 justify-center flex flex-col dark:bg-white rounded-b-lg">
            <Image src="/assets/images/common/loader.svg" className="animate-spin " width={100} height={100} />
            <p className="text-sm text-center pt-8">Please sign the Transaction in your wallet...</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransactionProcessingModal

