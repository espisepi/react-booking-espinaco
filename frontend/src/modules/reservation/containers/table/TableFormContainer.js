import React, { useState } from 'react'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import TableForm from '../../components/table/TableForm';
import { tableCreate } from '../../main/redux/actions';

const defaultTableCreate = {
    id: undefined,
    name: '',
    capacity: '4',
    location: ''
}

const TableFormContainer = () => {

    // Redux State
    const { table: tableCreateForm, loading, error } = useSelector( state => state.table.tableCreate );


    // Redux Actions
    const dispatch = useDispatch();
    const tableCreateAction = (table) => dispatch( tableCreate(table) );


    // Rest of logic -----------------

    const table = tableCreateForm || defaultTableCreate;
    const [ form, setForm ] = useState(table);

    const handleSubmit = (e) => {
        if(form.id) {
            // tableUpdateAction(form);
            console.log('tiene ID y no deberia')
        } else {
            tableCreateAction(form);
        }
    }

    const onChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        });
    }


    return (
        <div className="table-form-container">
            <TableForm table={form} loading={loading} error={error} onChange={onChange} handleSubmit={handleSubmit} />
        </div>
    )
}

export default TableFormContainer
