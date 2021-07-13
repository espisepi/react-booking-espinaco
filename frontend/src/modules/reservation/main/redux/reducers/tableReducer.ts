import { TableState, Table, CustomAction } from "../../../interfaces/Interfaces";
import { TABLE_LIST_FAIL, TABLE_LIST_REQUEST, TABLE_LIST_SUCCESS } from '../types/tableTypes';


const initialState: TableState = {
    loading: false,
    error: undefined,
    list: [],
    active: undefined
}

// Escribir los reducers pensando que tienen que modificar o no el state (normalmente si xD)
export function TableReducer( state: TableState = initialState, action: CustomAction ) {
    switch(action.type) {
        case TABLE_LIST_REQUEST:
            return {
                ...state,
                loading: true,
                error: undefined,
                list: []
            }
        case TABLE_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                error: undefined,
                list: action.payload as Array<Table>
            }
        case TABLE_LIST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload as Error,
                list: []
            }
        default:
            return state;
    }
}