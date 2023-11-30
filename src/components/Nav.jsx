import React from 'react'
import '../index.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav class="navbar navbar-expand-md navbar-dark">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">vomvom</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav m-auto mb-2 mb-md-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/home">Cars</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to="/book-appointment">Book Appointment</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to="/car-repair">Car Repairs</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to="/events">Events</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to="/news">News</Link>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <Link class="badge nav-link disabled mt-2 "></Link>
            <Link class="btn btn-outline-success mx-2" to="/sign-in">Login </Link>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Nav