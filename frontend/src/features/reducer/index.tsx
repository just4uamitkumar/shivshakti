import { combineReducers } from 'redux';
import devoteeReducer from '../devoteeReducer'


const rootReducer = combineReducers({
    devotees:devoteeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
