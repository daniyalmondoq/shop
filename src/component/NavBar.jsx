import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <nav  className='navbar navbar-expand-lg sticky-top navbar-dark bg-dark'>
                <div  className="container-fluid">
                    <a  className="navbar-brand" href="/">Super Mart</a>
                    <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span  className="navbar-toggler-icon"></span>
                    </button>
                    <div  className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul  className="navbar-nav">
                            <li  className="nav-item">
                                <Link  className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li  className="nav-item">
                                <Link  className="nav-link" to={"/About"}>About</Link>
                            </li>
                            <li  className="nav-item">
                                <Link  className="nav-link" to={"/Shop"}>Product</Link>
                            </li>
                            <li  className="nav-item">
                                <Link  className="nav-link" to={"/Contact"}>Contact</Link>
                            </li>
                            <li  className="nav-item dropdown">
                                <a  className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown link
                                </a>
                                <ul  className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a  className="dropdown-item" href="/">Action</a></li>
                                    <li><a  className="dropdown-item" href="/">Another action</a></li>
                                    <li><a  className="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <!-- Checked switch --> */}
                <div  className="form-check form-switch" d-flex justify-content-end>
                    <input  className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                    <label  className="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
                </div>
            </nav>
        </>
    )
}

export default NavBar