import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../API/api';
import { Link, useNavigate } from 'react-router-dom';


const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleForgotPassword = async (e) => {
        e.preventDefault();

        try {
            await axios.post(`${API_URL}/forgot-password`, { email: email });
            console.log(email);
            setMessage('Password reset link sent to your email');
        } catch (error) {
            setMessage('User not found');
        }

    };

    return (
        <div className='container'>
            <form className=' p-5 ' onSubmit={handleForgotPassword}>
                <div className="card text-center">
                    <div className="card-header">
                        <h2>Forgot Password</h2>
                    </div>
                    <div className="card-body">
                        <div className="form-group row">
                            <label htmlFor="exampleInputEmail1" className="col-sm-2 col-form-label">Email address</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email}
                                    onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                        </div>

                    </div>
                    <div className="card-footer text-muted">
                        <div className="mb-3">
                            <p style={{ textAlign: "center", color: 'blue' }}><Link to='/'>Login</Link></p>
                        </div>
                        <div className=''>
                            <button type="submit" className="btn btn-primary" >Submit</button>
                        </div>
                    </div>
                </div>
                <div className="dropdown-divider"></div>
                <p className='text-center text-success'>{message}</p>
            </form>
        </div>
    );
};

export default ForgotPassword;
