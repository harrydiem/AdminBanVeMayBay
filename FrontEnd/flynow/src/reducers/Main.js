import * as types from '../constants/ActionType'


var initialState  = [] // Nơi Component cha đặt Dữ liệu

// var findIndexID = ( item , id) =>{
//     var result = -1
//     item.forEach((item, index)=>{
//         if(item.id === id){
//             result = index
//         }
//     })
//     return result
// }


const Main = ( state = initialState , action) => {
    // var index = -1;
    // Switch case rẻ nhánh cách trường hợp sử dụng 
    switch(action.type){
        case  types.SELECT_ALL:
            state= action.data
           return [...state]
        case types.SELECT_ALL_FLIGHT:
            state= action.data
            return state
        // case types.DELECT_ONE_FLIGHT:
        //     state= action.data
        //     return [...state]       
 
     default : return state
    }    

}

export default Main