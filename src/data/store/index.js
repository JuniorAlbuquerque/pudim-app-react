import { createStore, combineReducers } from 'redux';
import UserReducer from '../reducers/UserReducer';
import AppReducer from '../reducers/AppReducer';


const rootReducer = combineReducers({
    user: UserReducer,
    app: AppReducer,
  });


const store = createStore(rootReducer);
export default store;