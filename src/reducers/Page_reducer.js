import data from '../data/data_writer';

const PAGE_ACTION = 'PAGE_ACTION';

let initialPage = {
  index: 1,
  writer: data[0]
}

function PageReducer(state = initialPage, action) {
  switch (action.type) {
    case PAGE_ACTION:
      let index = action.indexPage;
      let dataWriter = data[index - 1];
      return {
        ...state,
        index: action.indexPage,
        writer: [
          ...dataWriter
        ]
      }
    default:
      return state;
  }
}

export default PageReducer;