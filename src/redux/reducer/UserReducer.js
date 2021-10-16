import { ActionType } from '../typeAction/actionsTypes'

var User = {
      name: "",
      email: "",
      pass: "",
      address: {
            Ad1: "",
            Ad2: "",
            _city: "",
            _state: "",
            pincode: Number,
            mobileNum: Number,
      },
      orderHistory: {
           _iid: [],
      },
      browseHistory: {
            _iid: [],
      },
      cart:{
            cartItems: [],
            Tquantity:0,
            totalprice:0,
      },
      pendingOrder: {
           _iid: "",
           quantity: ""

      },
      wishlist: {
           WL:[],
      }
}