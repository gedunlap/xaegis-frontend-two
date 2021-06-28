import React, { useState } from 'react'

const Form = ({initialPost, handleSubmit, buttonLabel, history}) => {

    const [formData, setFormData] = useState(initialPost);

    //---- Functions -----

    // handleChange
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    // handleSubmit
    const handleSubmission = (event) => {
        event.preventDefault();
        handleSubmit(formData);
        history.push("/PostIndex");
    }

    return (
        <div className="container form">
        <form onSubmit={handleSubmission}>
            <div className="row">
                <div className="four columns">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        onChange={handleChange} 
                        value={formData.name} 
                        name="name" 
                    />
                </div>
                <div className="four columns">
                    <label htmlFor="contact">Contact</label>
                    <input 
                        type="text" 
                        onChange={handleChange} 
                        value={formData.contact} 
                        name="contact" 
                    />
                </div>
                <div className="four columns">    
                    <label htmlFor="sport">Sport</label>
                    <select 
                        name="sport" 
                        onChange={handleChange} 
                        value={formData.sport} 
                    >
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
                    <input 
                        style={{height: "100px", width: "60%"}} 
                        type="text" 
                        onChange={handleChange} 
                        value={formData.desc} 
                        name="desc" 
                    />
                </div>
            </div>
            <div className="row">
                <div className="six columns">
                    <label htmlFor="image">Image Link</label>
                    <input 
                        type="text" 
                        onChange={handleChange} 
                        value={formData.image} 
                        name="image" 
                    />
                </div>
                <div className="six columns">
                    <label htmlFor="video">Video Link</label>
                    <input 
                        type="text" 
                        onChange={handleChange} 
                        value={formData.video} 
                        name="video" 
                    />
                </div>
            </div>
            <br />
            <input className="button-primary" type="submit" value={buttonLabel} />
        </form>
        </div>
    )
}

export default Form;