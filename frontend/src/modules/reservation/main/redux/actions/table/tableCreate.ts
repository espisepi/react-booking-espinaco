import { TABLE_CREATE_FAIL, TABLE_CREATE_REQUEST, TABLE_CREATE_SUCCESS } from "../../types/tableTypes"
import * as tableService from '../../../services/tableService'
import { TableApi } from "../../../../interfaces"
import { Dispatch, Store } from "redux"
import tableList from './tableList'

// Action Creators ----------------------

const tableCreateRequest = () => {
    return {
        type: TABLE_CREATE_REQUEST
    }
}
const tableCreateSuccess = (table: TableApi) => {
    return {
        type: TABLE_CREATE_SUCCESS,
        payload: table
    }
}
const tableCreateFail = (error: Error) => {
    return {
        type: TABLE_CREATE_FAIL,
        payload: error
    }
}


// Side Effects -------------------------

export const tableCreate = (table: TableApi) => async(dispatch: Dispatch) => {
    try {
        dispatch( tableCreateRequest() )
        const tableCreated = await tableService.createTable(table);
        dispatch( tableCreateSuccess(tableCreated) );
        dispatch( tableList() as any );
    } catch (e) {
        dispatch( tableCreateFail(e) )
    }
}

export default tableCreate;