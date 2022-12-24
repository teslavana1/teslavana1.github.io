import React, { Component } from 'react'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import { Link, NavLink } from 'react-router-dom';
import { Download } from '@mui/icons-material';

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark sticky-top bg-dark">
                <div className="Navbar container-fluid">
                    <Link to='/'>
                        <span className="navbar-brand mb-0 h1 ms-1">Andrew Michael Gay</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse ms-1" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item mb-0 align-items-center">
                                {/* <div> */}
                                <NavLink to='/sw/resume' end className="nav-link">
                                    Resume
                                </NavLink>
                                {/* <a href='https://drive.google.com/uc?export=download&id=1c5h5l5OCQQFk5nGes1T1lF33prVWRiZC'
                                    className="btn btn-outline-light d-inline ms-2">
                                    <Download className="bi bi-download" />
                                </a>
                                </div> */}
                            </li>
                            <li className="nav-item mb-0">
                                <NavLink to='/sw/portfolio' className="nav-link" >Portfolio</NavLink>
                            </li>
                            </ul>
                            <div className="d-flex ms-auto me-lg-1 px-0 nav-item download mb-0">
                                <a href='https://drive.google.com/uc?export=download&id=1SAl3IETWPAUNfNY_v_2slQu_A56g1EF5'
                                    className="btn btn-outline-light ms-lg-auto mt-2 mt-lg-0">
                                    <b>Resume</b>
                                    <Download className="bi bi-download ms-2" />
                                </a>
                        </div>
                    </div>
                </div>

                <div className="ms-auto">

                </div>
            </nav>
        )
    }
}

export default Nav