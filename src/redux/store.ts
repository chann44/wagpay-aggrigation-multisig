import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import { createWrapper } from "next-redux-wrapper"
import rootReducer from "./reducers/rootReducer"

const middleware = [thunk]
let store: any;
const makeStore = () => {
  store = createStore(rootReducer, compose(applyMiddleware(...middleware)))
  return store
}
export { store }
export const wrapper = createWrapper(makeStore)

export default wrapper;