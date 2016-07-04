const initialState =  {
    isFetching: false,
    isFetched: false,
    isError: false,
    isDeleting: false,
    isDeleted: false,
    isErrorDeleted: false,
    posts: []
}
export default function (state = initialState, action) {
    switch (action.type) {
        case 'IS_FETCHING':{
            return {...state,isFetching: true};
            break;
        }
        case 'IS_FETCHED':{
            return {...state, 
                isFetching: false, 
                isFetched: true,
                posts: action.payload
            }
            break;
        }
        case 'IS_FETCH_ERROR':{
            return {...state,
                isFetching: false,
                isFetched: false,
                isError: true
            }
        }
        case "DELETING_POST":{
            return {...state, 
                isDeleting: true
            }
        }
        case "DELETED_POST":{
            return {...state, 
                isDeleting: false,
                isDeleted: true
            }
        }
        case 'SAVED_NEW_POST':{
            return {...state,
                posts: [action.payload]
            }
        }
    }
    return state;
}