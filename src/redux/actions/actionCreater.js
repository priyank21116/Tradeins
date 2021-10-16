import {ActionType} from '../typeAction/actionsTypes'


export const showAllProduct=(products)=>{
      return({
            type:ActionType.ALL_DATA,
            payload:products,
      })
}
export const showSelectedItem=(product)=>{
      return({
            type:ActionType.SELECTD_ITEM,
            payload:product,
      })
}
export const removeSelectedItem=()=>{
      return({
            type:ActionType.DESELECT_ITEM,
      })
}
export const addToCart=(product)=>{
      return({
            type:ActionType.ADD_TO_CART,
            payload:product,
      })
}

export const removeFromCart=(productid)=>{
      return({
            type:ActionType.REMOVE_FROM_CART,
            payload:productid,
      })
}