import { TOGGLE_TRANSACTION_PROCESSING_MODAL, TOGGLE_TRANSACTION_REVIEW_MODAL, TOGGLE_TRANSFER_ASSET_MODAL, SET_TRANSFER_ASSET_DATA_MODAL } from "../types/commonTypes";

const initialState = {
  modals: {
    transactionReviewModal: false,
    transactionProcessingModal: false,
    transferAssetModal: false,
  },
  modalsData: {
    transferAssetModal: {}
  }
}

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TOGGLE_TRANSACTION_REVIEW_MODAL:
      return {
        ...state,
        modals: {
          transactionReviewModal: action.isOpen,
        }
      };

    case TOGGLE_TRANSACTION_PROCESSING_MODAL:
      return {
        ...state,
        modals: {
          transactionProcessingModal: action.isOpen,
        }
      };

    case TOGGLE_TRANSFER_ASSET_MODAL: {
      return {
        ...state,
        modals: {
          transferAssetModal: action.isOpen,
        }
      }
    }

    case SET_TRANSFER_ASSET_DATA_MODAL: {
      console.warn(action.payload)
      return {
        ...state,
        modalsData: {
          transferAssetModal: action.payload,
        }
      }
    }
    default:
      return { ...state };
  }
}

export default userReducer;