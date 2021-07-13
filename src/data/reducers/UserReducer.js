const INITIAL_STATE = {
    current_user: {
        name: "Bruno"
    },
}

export default function UserReducer(state = INITIAL_STATE, action){
 
    switch (action.type) {

        case 'SET_USER': {
            console.log('Reducer SET_USER called with Payload: ');
            console.log(action.payload);
            state.current_user = action.payload;
            return  {...state, current_user: action.payload };
        }
        default: return state;
    }
    
}