import { combineReducers } from 'redux';
import { TableReducer } from './tableReducer';

export default combineReducers({
    table: TableReducer
})