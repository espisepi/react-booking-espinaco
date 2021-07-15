import TableApi from '../../table/Table'

export default interface TableListState {
    list: Array<TableApi>;
    loading: Boolean;
    error?: Error;
}