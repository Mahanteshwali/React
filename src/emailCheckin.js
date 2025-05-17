import React, { useState } from "react";

function Email() {

    const [email, setname] = useState("")
    const [error, seterror] = useState("")
    const submit_form = (e) => {
        e.preventDefault();
        verfication();
        if (!error && email.includes("@gmail")) {
            alert(`Email: ${email}`)
        }
    }

    const  verfication = () => {
        if (!email.includes("@gmail")) {
            seterror("invalid email");
        }
        else {
            seterror("")
        }
    }

    return (
        <div className="container">
            <form onSubmit={submit_form} >
                <input
                    type="email"
                    value={email}
                    placeholder="enter Email"
                    onChange={(e) => setname(e.target.value)}
                /><br />
                <button type="submit">submit</button>
                <div className="error_container">{error}</div>
            </form>
        </div>
    )
}
export default Email;