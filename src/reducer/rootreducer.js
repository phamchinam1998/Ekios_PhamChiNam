import { combineReducers } from '@reduxjs/toolkit';
import HomepageReducer from '../reducer/homepage';

const rootreducer = combineReducers({
    Homepage: HomepageReducer,
})

export default rootreducer;