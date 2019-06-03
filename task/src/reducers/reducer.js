const initState = {
    users: [
        { id: 1, firstName: 'Hiral', lastName: 'Baraiya', mobile: '8140052312', address: ['Bhavnagar'] },
        { id: 2, firstName: 'Test', lastName: 'User', mobile: '9999999999', address: ['USA'] },
        { id: 3, firstName: 'React', lastName: 'Redux', mobile: '98888888888', address: ['Rajkot'] },
        { id: 4, firstName: 'React', lastName: 'Routing', mobile: '8888888888', address: ['Ahmedabad'] },
        { id: 5, firstName: 'Flex', lastName: 'Box', mobile: '4545454545', address: ['Gujrat'] },
    ]
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'EDIT':
            console.log('reducer',action.payload)
            return {...state,users:Object.assign([],state.users,{[action.payload.id-1]:action.payload})}
        default:
            return state
    }

}
export default reducer