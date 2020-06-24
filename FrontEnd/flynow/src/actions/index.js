import * as types from './../constants/ActionType' //as : doi ten

export const getData = () => {
    return{
        type: types.SELECT_ALL,
    }
}

export const getFlight = () => {
    return{
        type: types.SELECT_ALL_FLIGHT,
    }
}

export const deleteOneFlight = (id) => {
    return{
        type: types.DELECT_ONE_FLIGHT,
        id
    }
}

// import * as types from './../constants/ActionType' //as : doi ten

// export const getUserData = (data) => {
//     return{
//         type: types.SELECT_ALL,
//         data
//     }
// }

// export const getFlight = (data) => {
//     return{
//         type: types.SELECT_ALL_FLIGHT,
//         data
//     }
// }



// export const deleteOneFlight = (data) => {
//     return{
//         type: types.DELECT_ONE_FLIGHT,
//         data
//     }
// }