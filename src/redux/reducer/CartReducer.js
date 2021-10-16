import { ActionType } from '../typeAction/actionsTypes'

var cart = {
      cartItems: [],
      Tquantity:0,
      totalprice:0,
}


export const addInClientCart = (state = cart , { type,payload }) => {
      switch (type) {
            case ActionType.ADD_TO_CART:
             console.log("PPPProduct",payload.deatiledProdReducer.id)
             console.log("This is cart product",payload)
             const check = state.cartItems.find(pr=> pr.id === payload.deatiledProdReducer.id);
             console.log(check)
             console.log("Stttatatatee",state)

             
             if(check){
                   return state;
             }else{
                   
                   const Tprice =state.totalprice + payload.deatiledProdReducer.price*(payload.quantity);
                   console.log("ati dsknfsdjvn price",Tprice)
                   const Tquant= state.Tquantity + payload.quantity
                   payload.deatiledProdReducer["quantity"] = payload.quantity
                   console.log("TTTTTTTTTTTTTTT",payload.deatiledProdReducer)

                   return{
                         ...state, cartItems: [...state.cartItems,payload.deatiledProdReducer],totalprice:Tprice,Tquantity:Tquant,
                   }

             }
            
            
      

            default:
                  return state;
      }
};


export const removeFromCart = (state = cart, { type, payload }) => {
      switch (type) {
            case ActionType.REMOVE_FROM_CART:
                  let array = cart.cartItems
                  array.map((item) => {
                        if (item.id === payload) {
                              const index = array.indexOf(item);
                              if (index > -1) {
                                    array.splice(index, 1);
                              }

                        }
                        return array;
                  })
                  return state


            default:
                  return state;
      }
};
