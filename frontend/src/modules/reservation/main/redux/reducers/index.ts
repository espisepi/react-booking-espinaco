import { combineReducers } from 'redux';
import { tableListReducer } from './table';

export default combineReducers({
    table: combineReducers({
        tableList: tableListReducer,
        // tableCreate: ,
        // tableUpdate: ,
        // tableDelete: 
    })
})