const intialstate = {
    user:{}
}

export const userReducer = (state = intialstate,action)=> {

    switch (action.type){
        case "LOGIN_SUCCES":
           return {
            ...state, user: action.payload
        };
        case "LOGIN_ERROR":
            return intialstate;
        default: 
        return intialstate;
    }
}