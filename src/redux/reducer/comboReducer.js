import { combineReducers } from 'redux';

import {addInClientCart,removeFromCart} from './CartReducer'
import {allItems,oneProduct} from './HomeReducers'


const combinereducers = combineReducers({
      allItems,
      oneProduct,
      addInClientCart,
      removeFromCart,
})

export default combinereducers;