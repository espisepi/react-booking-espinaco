import { combineReducers } from 'redux';
import { tableListReducer, tableCreateReducer } from './table';

export default combineReducers({
    table: combineReducers({
        tableList: tableListReducer,
        tableCreate: tableCreateReducer
        // tableCreate: ,
        // tableUpdate: ,
        // tableDelete: 
    })
})