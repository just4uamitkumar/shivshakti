import { combineReducers } from 'redux';
import jyotirlingReducer from '../jyotirlingReducer'


const rootReducer = combineReducers({
    jyotirling:jyotirlingReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
