const initialState = {
    newUpdate: false,
    updating: false,
    updated: false,
    updateError: false,
    post: {}
}

export default function(state = initialState, action){
    switch(action.type){
        case "EDIT_POST_CLICKED":{
            return {...state,
                newUpdate: true,
                post: action.payload    
            }
        }
        case 'CANCEL_UPDATE_POST':{
            return{
                ...state,
                newUpdate: false
            }
        }
        case 'UPDATING_POST':{
            return{
                ...state,
                updating: true,
            }
        }
        case 'UPDATED_POST':{
            return{
                ...state,
                newUpdate: false,
                updated: true,
                updating: false,
            }
        }
    }
    return state;
}