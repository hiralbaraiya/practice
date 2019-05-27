export default function (state = { item: [] }, action) {
    switch (action.type) {
        case 'ADD_ITEM':
            return { ...state, item:[...state.item,action.payload] }
        default:
            return state
    }
}