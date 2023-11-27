import React from 'react';
import '../index.css';

const Footer = () => {
    return (
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-0 border-top position-absolute w-100 bottom-0 bg-dark text-light">
        <div class="col-md-4 d-flex align-items-center text-danger">
        <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
            <svg class="bi" width="30" height="24"></svg>
        </a>
        <span class="mb-3 mb-md-0 text-light fs-6">vomvom ,inc</span>
        </div>
  </footer>
    )
}

export default Footer