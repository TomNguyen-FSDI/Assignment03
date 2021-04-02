import priceReducer from './price';

import {combineReducers} from 'redux';

const allReducers = combineReducers ({
    price: priceReducer
});

export default allReducers;