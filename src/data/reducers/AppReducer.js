const INITIAL_STATE = {
    loading_app: false,
}

export default function AppReducer(state = INITIAL_STATE, action){

    switch (action.type) {
        
        case 'SET_LOADING': {
            console.log('Reducer SET_LOADING called with Payload: ');
            console.log(action.payload);
            state.loading_app = action.payload;
            return {...state, loading_app: action.payload };
        }
        default: return state;
    }
    
};
