const newState = {
    newPost: false
}
export default function (state = newState, action) {
    switch (action.type) {
        case 'NEW_BUTTON_CLICKED':{
            return {...state,newPost: true};
            break;
        }
        case 'CANCEL_NEW_POST':{
            return {...state, newPost: false}
            break;
        }
    }
    return state;
}