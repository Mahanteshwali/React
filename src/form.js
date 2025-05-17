import { React, useState } from "react";

const Form = () => {

    const [data, formdata] = useState({
        name: "",
        country: "",
        details: "",
        accepted: false,
        gender: ""
    })

    const handleChanges = (e) => {
        const { name, value, type, checked } = e.target;
        formdata((last_checkin) => ({
            ...last_checkin, [name]: type === 'checkbox' ? checked : value,
        }))

    };
    const formdataSubmit = (e) => {
        e.preventDefault();
        alert(`the form has been Submited name: ${data.name} county: ${data.country} details: ${data.details}`)
    }

    return (
        <div>
            <form onSubmit={formdataSubmit}>
                <input
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={handleChanges}
                    required
                    placeholder="Name"
                ></input>

                <textarea
                    placeholder="details"
                    value={data.details}
                    onChange={handleChanges}
                    name="details"
                >
                </textarea>

                <select name="country" value={data.country} onChange={handleChanges}>
                    <option value="usa">usa</option>
                    <option value="china">china</option>
                    <option value="india">India</option>
                </select>

                <label>Gender:</label>
                <label>Male
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={data.gender === "male"}
                        onChange={handleChanges}>
                    </input>
                </label>

                <label>female
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={data.gender === "female"}
                        onChange={handleChanges}
                    />
                </label>


                <label>Remember me
                    <input
                        type="checkbox"
                        name="accepted"
                        checked={data.fromchecked}
                        onChange={handleChanges}
                    ></input>
                </label>
                <br></br>
                <input type="Submit"></input>

            </form>
        </div>
    )
}

export default Form;