import { createStore} from "redux";
import combinereducers from "./reducer/comboReducer";

const store = createStore(
      combinereducers,
      {},
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;