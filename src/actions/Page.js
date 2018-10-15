import * as types from './../constants/Action_Type';

const PAGE_ACTION = 'PAGE_ACTION';

export default function PageAction(index) {
  return {
    type: PAGE_ACTION,
    indexPage: index 
  }
};
export const addPoem = (poem) => {
  return {
    type: types.ADD_POEM,
    poem
  }
};
export const listPoem = () => {
  return {
    type: types.LIST_POEM
  }
}
