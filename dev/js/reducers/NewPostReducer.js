const newState = {
    newPost: false,
    savingNewPost: false,
    savedNewPost: false,
    errorSaving: false
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
        case 'SAVING_NEW_POST':{
            return {...state,
                savingNewPost: true
            }
            break;
        }
        case 'SAVED_NEW_POST':{
            return {...state,
                savingNewPost: false,
                savedNewPost: true,
                newPost: false,
            }
        }
        case 'ERROR_SAVING_POST':{
            return {
                ...state,
                savedNewPost: false,
                savingNewPost: false,
                errorSaving: true,
                newPost: false,
            }
        }
    }
    return state;
}