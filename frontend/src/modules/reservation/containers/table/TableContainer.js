import React from 'react'
import TableFormContainer from './TableFormContainer'
import TableListContainer from './TableListContainer'

const TableContainer = () => {
    return (
        <div className="table-container">
            <TableFormContainer />
            <TableListContainer />
        </div>
    )
}

export default TableContainer
