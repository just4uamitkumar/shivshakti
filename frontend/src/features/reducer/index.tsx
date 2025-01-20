import { combineReducers } from 'redux';
import devoteeReducer from '../devoteeReducer'
import countryReducer from '../countryReducer'


const rootReducer = combineReducers({
    devotees:devoteeReducer,
    countries:countryReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
