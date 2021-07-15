import { TableListState, Table, CustomAction } from "../../../../interfaces/Interfaces";
import { 
    TABLE_LIST_REQUEST,
    TABLE_LIST_SUCCESS,
    TABLE_LIST_FAIL,
} from '../../types/tableTypes';


/** Table List State --------------------------------- */
const initialTableListState: TableListState = {
    loading: false,
    error: undefined,
    list: []
}
export default function tableListReducer( state: TableListState = initialTableListState, action: CustomAction ) {
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