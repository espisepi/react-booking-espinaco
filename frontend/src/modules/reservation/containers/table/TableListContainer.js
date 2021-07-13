import React, { useEffect } from 'react'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import TableList from '../../components/table/TableList';
import { tableList } from '../../main/redux/actions/tableActions';

const TableListContainer = () => {

    // Consume State from redux
    const { loading, error, list: tables } = useSelector( state => state.table );

    // Consume action redux to invoke in any component attached
    const dispatch = useDispatch();
    const tableListAction = () => dispatch( tableList() );

    useEffect(() => {
        tableListAction();
    }, [])


    return (
        <div className="table-list-container">
            Table List container    
            <TableList tables={tables} loading={loading} error={error} />
            Fin List container
        </div>
    )
}

export default TableListContainer

