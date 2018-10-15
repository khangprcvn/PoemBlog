import * as types from './../constants/Action_Type';

var poem = [];
var PoemReducer = (state = poem, action) => {
    switch(action.type){
        case types.ADD_POEM:
            var newPoem = {
                name : action.poem.name,
                type : action.poem.type,
                author : action.poem.author,
                desc : action.poem.desc,
                picture : action.poem.picture,
                content : action.poem.content
            };
            state.push(newPoem);
            console.log(poem);
            return [...state];
        case types.LIST_POEM:
            return [...state];
        default: return state;
    }

};
export default PoemReducer;