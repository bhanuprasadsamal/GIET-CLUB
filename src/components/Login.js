import React, { useEffect, useState } from "react"
import axios from "axios"
import swal from 'sweetalert';
import { useNavigate, Link } from "react-router-dom"
import './Login.css'


function Login() {

    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e) {
        e.preventDefault();
    
        try {
            const response = await axios.post("http://localhost:8000/", {
                email,
                password
            });
    
            if (response.data.role === "admin") {
                // Redirect to admin page
                history("/admin");
                swal("Welcome Admin!", "You have logged in successfully as an admin.", "success");
            } else if (response.data.role === "user") {
                // Redirect to home page
                history("/home", { state: { id: email } });
                swal("Welcome Back!", "You have logged in successfully.", "success");
            } else {
                // Display error message for invalid credentials
                swal("Invalid Credentials", "Please check your email and password.", "error");
            }
        } catch (error) {
            // Handle server errors
            swal("Error", "An error occurred while logging in.", "error");
            console.error(error);
        }
    }
    


    return (
        <div className="login">

            <h1>Login</h1>

            <form action="POST">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />
                <input type="submit" onClick={submit} />

            </form>

            <br />
            <p>OR</p>
            <br />

            <Link to="/signup">Signup Page</Link>

        </div>
    )
}

export default Login