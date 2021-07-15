import { TableListState, Table, Action } from "../../../../interfaces";
import { 
    TABLE_LIST_REQUEST,
    TABLE_LIST_SUCCESS,
    TABLE_LIST_FAIL,
} from '../../types/tableTypes';


/** Table List State --------------------------------- */
const initialState: TableListState = {
    list: [],
    loading: false,
    success: undefined,
    error: undefined
}
export default function tableListReducer( state: TableListState = initialState, action: Action ) {
    switch(action.type) {
        case TABLE_LIST_REQUEST:
            return {
                loading: true,
                error: undefined,
                list: []
            }
        case TABLE_LIST_SUCCESS:
            return {
                loading: false,
                error: undefined,
                list: action.payload as Array<Table>
            }
        case TABLE_LIST_FAIL:
            return {
                loading: false,
                error: action.payload as Error,
                list: []
            }
        default:
            return state;
    }
}

/* */