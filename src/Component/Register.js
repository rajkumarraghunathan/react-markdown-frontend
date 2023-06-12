import axios from 'axios';
import React, { useState } from 'react'
import { API_URL } from '../API/api';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();


    const handleInput = (event) => {
        event.preventDefault()
        console.log(name);
        console.log(email);
        console.log(password);
        axios.post(`${API_URL}/Signup`, {
            name: name,
            email: email,
            password: password
        }).then((response) => {
            console.log(response.data)
            console.log(email);
            console.log(password);
            if (response.data.message == 'New user was added Sucessfully................') {
                navigate('/')
            }
            else if (response.data.message == 'User Already Exists') {
                setMessage('User Already Exists')
            }
            else {
                setMessage('Error While Added a User')
            }
        })
            .catch(err => console.log(err))
    }

    return (
        <div className='container'>
            <div className='d-flex justify-content-center align-items-center pt-5'>
                <div className="card dropdown-menu shadow-lg" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h1 className="pb-3" style={{ textAlign: "center", color: 'blue' }}>Register</h1>
                        <div className="dropdown-divider"></div>
                        <form onSubmit={handleInput}>
                            <div className="mb-3 pt-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} />

                            </div>
                            <div className="mb-3 pt-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" aria-describedby="emailHelp" value={email} onChange={e => setEmail(e.target.value)} />

                            </div>
                            <div className="mb-3 pt-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <p style={{ textAlign: "center", color: 'blue' }}><Link to='/'>Login</Link></p>
                            </div>
                            <div className="dropdown-divider"></div>
                            <div className='d-grid'>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register