import React from 'react'
import { Link } from 'react-router-dom'
import { CgProfile } from 'react-icons/cg';
import axios from 'axios';
import { API_URL } from '../API/api';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';




const Header = () => {

    const navigate = useNavigate();

    const logout = async () => {
        const accessToken = Cookies.get('accessToken');
        await axios.get(`${API_URL}/logout`,
            {
                headers: {
                    cookies: accessToken,
                }, withCredentials: true
            }).then((response) => {
                const redirectUrl = response.data.redirectUrl;
                if (response.data.message === 'User signed-out!') {
                    Cookies.remove('accessToken');
                    toast('User logout Successfully..........')
                    navigate(redirectUrl)
                }
            }).catch(error => console.log(error));
    }

    return (
        <>
            <nav className="navbar navbar-dark bg-primary text-white px-2">
                <div className="container-fluid">
                    <Link className="navbar-brand" >Markdown</Link>
                    <form className="d-flex nav-item dropdown dropstart " role="button">
                        <CgProfile className="nav-link dropdown-toggle pe-auto fs-4" data-bs-toggle="dropdown" aria-expanded="false" />
                        <ul className="dropdown-menu text-center " >
                            <li><span className="dropdown-item text-primary pe-auto" onClick={logout}>Logout</span></li>
                        </ul>
                        <ToastContainer />
                    </form>
                </div>
            </nav>
        </>
    )
}

export default Header

