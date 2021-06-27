import React, { useState } from 'react'

const Form = ({initialTodo, handleSubmit, buttonLabel, history}) => {

    const [formData, setFormData] = useState(initialTodo);

    //---- Functions -----

    // handleChange
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    // handleSubmit

    return <h1>Form</h1>
}

export default Form;