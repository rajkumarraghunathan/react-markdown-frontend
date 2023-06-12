import React from 'react'
import { Link } from 'react-router-dom'
import { CgProfile } from 'react-icons/cg';
import axios from 'axios';
import { API_URL } from '../API/api';
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const navigate = useNavigate();

    const logout = async () => {
        await axios.get(`${API_URL}/logout`).then((response) => {
            if (response.data.message == 'User signed-out!') {
                alert('User logout Successfully..........')
                navigate('/')
            }
        });

    }

    return (
        <>
            <nav className="navbar navbar-dark bg-primary text-white px-2">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand" >Markdown</Link>
                    <form className="d-flex nav-item dropdown dropstart " role="button">
                        <CgProfile className="nav-link dropdown-toggle pe-auto fs-4" data-bs-toggle="dropdown" aria-expanded="false" />
                        <ul className="dropdown-menu text-center " >
                            <li><a className="dropdown-item text-primary pe-auto" onClick={logout}>Logout</a></li>
                        </ul>
                    </form>
                </div>
            </nav>
        </>
    )
}

export default Header

