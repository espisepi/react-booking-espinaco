import TableApi from '../../table/Table'

export default interface TableCreateState {
    table: TableApi;
    loading: Boolean;
    success?: Boolean;
    error?: Error;
}
