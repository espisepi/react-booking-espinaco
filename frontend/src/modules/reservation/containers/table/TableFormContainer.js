import React, { useEffect, useState } from 'react'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import TableForm from '../../components/table/TableForm';
import { tableCreate } from '../../main/redux/actions';

// Form
import { isPositiveNumber } from '../../utils/validations';
import { isEmpty } from 'lodash';


const defaultTableCreate = {
    name: '',
    capacity: '4',
    location: ''
}

function validateForm({ name, capacity, location }) {
    const errors = {}
    if( isEmpty(name) ) {
        errors.name = 'Name can not be empty'
    }
    if( !isPositiveNumber(capacity) || capacity === 0 || isEmpty(capacity) ) {
        errors.capacity = 'Capacity must be a positive number'
    }
    return errors;
}

const TableFormContainer = () => {

    // Redux State
    const { table: tableCreateForm, loading, error } = useSelector( state => state.table.tableCreate );


    // Redux Actions
    const dispatch = useDispatch();
    const tableCreateAction = (table) => dispatch( tableCreate(table) );


    // Rest of logic -----------------
    const [ form, setForm ] = useState(defaultTableCreate);
    useEffect(()=>{
        const table = tableCreateForm || defaultTableCreate;
        setForm(table)
    },[tableCreateForm])
    const [ formError, setFormError ] = useState({})
    const handleSubmit = (e) => {
        const errors = validateForm(form)
        setFormError(errors)
        if(isEmpty(errors)) {
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
            <TableForm table={form} loading={loading} error={error} formError={formError} onChange={onChange} handleSubmit={handleSubmit} />
        </div>
    )
}

export default TableFormContainer
