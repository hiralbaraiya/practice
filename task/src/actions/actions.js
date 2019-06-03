export const editUser=(user)=>{
    console.log('action',user)
    return{
        type:'EDIT',
        payload:user
    }
}