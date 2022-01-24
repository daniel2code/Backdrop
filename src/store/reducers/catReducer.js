import {saveCat, getCatList} from '../types/types';
import {retrieveData} from '../../database/schema';

export const initialState = {
  catData: retrieveData || null,
  newData: null,
  sourceData: null,
};

export const reducer = (state, action) => {
  if (action.type === saveCat) {
    alert('event fired');
    return {
      ...state,
      newData: action.payload,
    };
  } else if (action.type === getCatList) {
    let data = retrieveData();
    return {
      ...state,
      sourceData: data,
    };
  } else {
    return state;
  }
};
