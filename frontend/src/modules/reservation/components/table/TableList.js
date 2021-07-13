import React from 'react'
import PropTypes from 'prop-types'

const TableList = ({ tables, loading, error }) => {

    if( loading ) { return <h1>Loading</h1> }

    if( error ) { return <h1>Error: {error} </h1> }

    if(!Array.isArray(tables) || tables.length === 0 ) { return <h1>Tabla vacia</h1> }

    return (
        <div className="table-list">
            { tables.map( table => (
                <div key={table.id}>
                    <h2>{table.name}</h2>
                    <h2>capacity: {table.capacity}</h2>
                </div>
            ) ) }
        </div>
    )
}

TableList.propTypes = {
    // tables: PropTypes.arrayOf(PropTypes.shape({

    // }))
}

export default TableList
