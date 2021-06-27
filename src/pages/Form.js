import React, { useState } from 'react'

const Form = ({initialTodo, handleSubmit, buttonLabel, history}) => {

    const [formData, setFormData] = useState(initialTodo);

    //---- Functions -----

    // handleChange
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    // handleSubmit
    const handleSubmission = (event) => {
        event.preventDefualt()
        handleSubmit(formData)
        history.push("/")
    }

    return (
        <div className="container form">
        <form onSubmit={handleSubmission}>
            <div className="row">
                <div className="four columns">
                    <label htmlFor="name">Name</label>
                    <input type="text" onChange={handleChange} value={formData?.name} name="name" id="" />
                </div>
                <div className="four columns">
                    <label htmlFor="contact">Contact</label>
                    <input type="text" onChange={handleChange} value={formData?.contact} name="contact" id="" />
                </div>
                <div className="four columns">    
                    <label htmlFor="sport">Sport</label>
                    <select name="sport" onChange={handleChange} value={formData?.sport} id="">
                        <option value="Snowboarding">Snowboarding</option>
                        <option value="Skateboarding">Skateboarding</option>
                        <option value="Rock Climbing">Rock Climbing</option>
                        <option value="BMX">BMX</option>
                        <option value="Freestyle MX">Freestyle MX</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="twelve columns">
                    <label htmlFor="desc">Bio</label>
                    <input style={{height: "100px", width: "60%"}} type="text" onChange={handleChange} value={formData?.desc} name="desc" id="" />
                </div>
            </div>
            <div className="row">
                <div className="six columns">
                    <label htmlFor="image">Image Link</label>
                    <input type="text" onChange={handleChange} value={formData?.image} name="image" id="" />
                </div>
                <div className="six columns">
                    <label htmlFor="video">Video Link</label>
                    <input type="text" onChange={handleChange} value={formData?.video} name="video" id="" />
                </div>
            </div>
            <br />
            <input className="button-primary" type="submit" value={buttonLabel} />
        </form>
        </div>
    )
}

export default Form;