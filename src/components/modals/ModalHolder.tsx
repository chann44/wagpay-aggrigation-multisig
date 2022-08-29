import React from "react";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";

const TransactionProcessingModal = dynamic(() => import("@/components/modals/TransactionProcessingModal"), { ssr: false });
const TransactionReviewModal = dynamic(() => import("@/components/modals/TransactionReviewModal"), { ssr: false });

const ModalHolder = () => {
  const {
    modals: {
      transactionProcessingModal,
      transactionReviewModal,
    }
  }: any = useSelector((store: any) => store.appSettingsReducer);
  return (
    <div>
      {
        transactionProcessingModal && <TransactionProcessingModal />
      }
      {
        transactionReviewModal && <TransactionReviewModal />
      }
    </div>
  )
}

export default ModalHolder;