import { TableCreateState, TableApi, Action } from "../../../../interfaces";
import { 
    TABLE_CREATE_REQUEST,
    TABLE_CREATE_SUCCESS,
    TABLE_CREATE_FAIL,
} from '../../types/tableTypes';


/** Table List State --------------------------------- */
const initialState: TableCreateState = {
    table: undefined,
    loading: false,
    error: undefined
}
export default function tableCreateReducer( state: TableCreateState = initialState, action: Action ) {
    switch(action.type) {
        case TABLE_CREATE_REQUEST:
            return {
                table: undefined,
                loading: true,
                error: undefined,
            }
        case TABLE_CREATE_SUCCESS:
            return {
                table: action.payload as TableApi,
                loading: false,
                error: undefined,
            }
        case TABLE_CREATE_FAIL:
            return {
                table: undefined,
                loading: false,
                error: action.payload as Error,
            }
        default:
            return state;
    }
}

/* */