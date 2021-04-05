import cartReducer from './cartReducer';

import {combineReducers} from 'redux';

const allReducers = combineReducers ({
    state: cartReducer
});

export default allReducers;