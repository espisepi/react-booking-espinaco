import { combineReducers } from 'redux';
import { tableListReducer } from './tableReducer';

export default combineReducers({
    table: combineReducers({
        tableList: tableListReducer
    })
})