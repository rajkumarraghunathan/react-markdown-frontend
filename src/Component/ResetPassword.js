import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../API/api';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ResetPasswordForm = () => {
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const params = useParams()



    const handleResetPassword = async (e) => {
        e.preventDefault();
        try {

            await axios.post(`${API_URL}/Reset-password/${params.resetToken}`, {
                newPassword
            }).then((response) => {
                if (response.data.message === 'Password reset successful') {
                    setMessage('Password reset successfully......');
                    navigate('/')
                }
            })
        } catch (error) {
            setMessage('Invalid or expired reset token');
        }
    };

    return (
        <div className='container'>
            <div className='d-flex justify-content-center align-items-center pt-5'>
                <div className="card dropdown-menu shadow-lg" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h1 className="pb-3" style={{ textAlign: "center", color: 'blue' }}>Reset Password</h1>
                        <div className="dropdown-divider"></div>
                        <form onSubmit={handleResetPassword}>
                            <label htmlFor="exampleInputPassword1" className="form-label">Enter your new password</label>
                            <div className="mb-3 pt-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter your new password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                />
                            </div>
                            <div className="dropdown-divider"></div>
                            <div className='d-grid'>
                                <button type="submit" className="btn btn-primary" >Submit</button>
                            </div>

                        </form>
                        <div className="dropdown-divider"></div>
                        <p className='text-center text-danger'>{message}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPasswordForm;
