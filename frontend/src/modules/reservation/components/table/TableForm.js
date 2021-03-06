import React from 'react'
import PropTypes from 'prop-types'

const TableForm = ({ table, loading, error, formError, onChange, handleSubmit, editMode }) => {
    const { name, capacity } = table;
    console.log(formError)
    return (
        <div>
            <input type="text" name="name" value={name} onChange={onChange} />
            {formError?.name && <h4>{formError.name}</h4>}
            <input type="number" name="capacity" value={capacity} onChange={onChange} />
            {formError?.capacity && <h4>{formError.capacity}</h4>}
            <button 
                type="button"
                onClick={handleSubmit}
            >
                { editMode ? (<span>edit</span>) : (<span>create</span>) }
            </button>
        </div>
    )
}

TableForm.propTypes = {
    table: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string.isRequired,
        capacity: PropTypes.string.isRequired,
        location: PropTypes.string
    }),
    // loading: PropTypes.bool,
    // error: PropTypes.error,
    onChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    editMode: PropTypes.bool
}

export default TableForm
