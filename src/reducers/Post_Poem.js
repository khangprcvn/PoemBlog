import * as types from './../constants/Action_Type';

var poem = [
    {
        name : 'Chào ngày mới',
        type : 'Thơ tình yêu',
        author : 'Trần Quang Hoài',
        desc : 'Một thời để nhớ',
        picture : 'https://lh4.googleusercontent.com/-UbvRd6JthAY/VQz0qoLZQWI/AAAAAAAAFdc/CjsJPI4a5Fs/w1023-h763/%25C3%25BD%2Bch%25C3%25AD.jpg',
        content : 'Dài lắm'
    },
    {
        name : 'Truyện Kiều',
        type : 'Thơ',
        author : 'Nguyễn Du',
        desc : 'Kiều và Vân',
        picture : 'https://i.ytimg.com/vi/EU-o7eT58BU/maxresdefault.jpg',
        content : 'Dài lắm'
    },
    {
        name : 'Tình yêu',
        type : 'Thơ',
        author : 'Đỗ Việt Khang',
        desc : 'Thất tình',
        picture : 'http://file.vforum.vn/hinh/2018/01/nhung-bai-tho-hay-ve-tinh-yeu-yeu-xa-yeu-don-phuong-1.png',
        content : 'Dài lắm'
    }
];
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