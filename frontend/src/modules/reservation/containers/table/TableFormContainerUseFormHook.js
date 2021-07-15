import React, { useEffect, useState } from 'react'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import TableForm from '../../components/table/TableForm'
import { tableCreate } from '../../main/redux/actions'

// Form
import { useForm } from 'react-hook-form'
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
    name: yup.string().required().max(20),
    capacity: yup.number().required().positive().integer(),
    location: yup.string()
});

const defaultTableCreate = {
    name: 'default name',
    capacity: '4',
    location: ''
}

const TableFormContainer = () => {

    // Redux State
    // const { table: tableCreateForm, loading, error } = useSelector( state => state.table.tableCreate );


    // Redux Actions
    const dispatch = useDispatch();
    const tableCreateAction = (table) => dispatch( tableCreate(table) );


    // Rest of logic -----------------

    // Form
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onChange',
        defaultValues: { ...defaultTableCreate },
        resolver: yupResolver(schema)
    });
    const onSubmit = (data) => {
        tableCreateAction({ ...data })
    }

    console.log(register('name'))

   
    return (
        <div className="table-form-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input id="name" {...register( 'name') } />
                {errors.name && errors.name.type === "required" && <span>This is required</span>}
                {errors.name && errors.name.type === "maxLength" && <span>Max length exceeded</span> }
                <input id="capacity" type="number" {...register('capacity')} />
                {errors.capacity && <span>Capacity must be a positive number</span>}
                {/* <input {...register('location')} /> */}
                <input type="submit" />
            </form>
            {/* <TableForm table={form} loading={loading} error={error} onChange={onChange} handleSubmit={handleSubmit} /> */}
        </div>
    )
}

export default TableFormContainer
