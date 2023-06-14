import React, { useState } from 'react'
import axios from 'axios';
import { API_URL } from '../API/api';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';


const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [message, setMessage] = useState('');
    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
        try {
            axios.post(`${API_URL}/login`, {
                email: email,
                password: password
            }).then((response) => {
                const token = response.data.token;
                const redirectUrl = response.data.redirectUrl;
                Cookies.set('token', token, { secure: true, sameSite: 'strict' }); // Store token in a secure cookie
                console.log(token);
                console.log(response.data.message);
                if (response.data.message === "User signed-in successfully.") {
                    navigate(redirectUrl)
                }
                else if (response.data.message === "Wrong User") {
                    setMessage('Wrong user')
                }
                else if (response.data.message === "Wrong Password") {
                    setMessage('Wrong Password')
                }
            })
                .catch((error) => {
                    console.log(error);
                    setMessage('error')
                });
        } catch (error) {
            console.log(error);
        }


    }

    return (
        <div className='container'>
            <div className='d-flex justify-content-center align-items-center pt-5'>
                <div className="card dropdown-menu shadow-lg" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h1 className="pb-3" style={{ textAlign: "center", color: 'blue' }}>Login</h1>
                        <div className="dropdown-divider"></div>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3 pt-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={e => setEmail(e.target.value)} required />
                            </div>
                            <div className="mb-3 pt-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={e => setPassword(e.target.value)} required />
                            </div>
                            <div className="dropdown-divider"></div>
                            <div className="mb-3">
                                If you have No Account<Link to='/Signup'>Click here</Link>
                            </div>
                            <div className="mb-3">
                                Forget Password<Link to='/Forget-password'>Click here</Link>
                            </div>
                            <div className='d-grid'>
                                <button type="submit" className="btn btn-primary" >Submit</button>
                            </div>
                            <div className="dropdown-divider"></div>
                            <p className='text-center text-danger'>{message}</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
