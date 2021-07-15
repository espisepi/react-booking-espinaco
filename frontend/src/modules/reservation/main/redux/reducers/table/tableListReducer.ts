import { TableListState, TableApi, Action } from "../../../../interfaces";
import { 
    TABLE_LIST_REQUEST,
    TABLE_LIST_SUCCESS,
    TABLE_LIST_FAIL,
} from '../../types/tableTypes';


/** Table List State --------------------------------- */
const initialState: TableListState = {
    list: [],
    loading: false,
    error: undefined
}
export default function tableListReducer( state: TableListState = initialState, action: Action ) {
    switch(action.type) {
        case TABLE_LIST_REQUEST:
            return {
                list: [],
                loading: true,
                error: undefined
            }
        case TABLE_LIST_SUCCESS:
            return {
                list: action.payload as Array<TableApi>,
                loading: false,
                error: undefined,
            }
        case TABLE_LIST_FAIL:
            return {
                list: [],
                loading: false,
                error: action.payload as Error
            }
        default:
            return state;
    }
}

/* */