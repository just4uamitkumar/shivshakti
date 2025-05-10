import { combineReducers } from 'redux';
import devoteeReducer from '../devoteeReducer'
import countryReducer from '../countryReducer'
import userReducer from '../userReducer'


const rootReducer = combineReducers({
    devotees:devoteeReducer,
    countries:countryReducer,
    user:userReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
