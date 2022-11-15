import React, { useState } from 'react'

export const Signin = () => {
    const[exampleInputEmail1, setEmail1] = useState("");
    const[exampleInputPassword1, setPass1] = useState("");
    const Submit = () => {

    }
    return (
        <div>
            <h2>Add your profile</h2>
            <form onSubmit={Submit}>
                <div class="mb-3 my-3">
                    <label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" value={exampleInputEmail1} onChange={(e) => setEmail1(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" value={exampleInputPassword1} onChange={(e) => setPass1(e.target.value)}class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-sm btn-success">Submit</button>
            </form>

        </div>
    )
}