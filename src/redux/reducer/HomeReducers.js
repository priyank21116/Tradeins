import { ActionType } from '../typeAction/actionsTypes'


var allitemsList = {
      listarray: [],
     
}
var selectedlist={
}

export const allItems = (state = allitemsList, { type, payload }) => {
      switch (type) {
            case ActionType.ALL_DATA:
                  return { ...state,listarray : [...payload] }
            default:
                  return state;
      }
}


export const oneProduct = (state ={}, { type, payload }) => {
      switch (type) {
            case ActionType.SELECTD_ITEM:
                  return {...payload }

            case ActionType.DESELECT_ITEM:
                  return {}

            default:
                  return state;

      };
};


