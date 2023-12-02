import React from 'react'
import '../index.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Cars Community</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav m-auto mb-2 mb-md-0">
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/favorites">Favorites</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/book-appointment">Book Appointment</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/events">Events</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/news">News</Link>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <Link className="badge nav-link disabled mt-2 "></Link>
                    <Link className="btn btn-outline-success mx-2" to="/login">Login </Link>
                </form>
                </div>
            </div>
        </nav>
    )
}

export default Nav