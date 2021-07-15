import { TABLE_LIST_FAIL, TABLE_LIST_REQUEST, TABLE_LIST_SUCCESS } from "../../types/tableTypes"
import * as tableService from '../../../services/tableService'
import { Table } from "../../../../interfaces"
import { Dispatch } from "redux"

// Action Creators ----------------------

const tableListRequest = () => {
    return {
        type: TABLE_LIST_REQUEST
    }
}
const tableListSuccess = (tables: Array<Table>) => {
    return {
        type: TABLE_LIST_SUCCESS,
        payload: tables
    }
}
const tableListFail = (error: Error) => {
    return {
        type: TABLE_LIST_FAIL,
        payload: error
    }
}


// Side Effects -------------------------

export const tableList = () => async(dispatch: Dispatch) => {
    try {
        dispatch( tableListRequest() )
        const tables = await tableService.getTables() as Array<Table>;
        dispatch( tableListSuccess(tables) )
    } catch (e) {
        dispatch( tableListFail(e) )
    }
}

export default tableList;