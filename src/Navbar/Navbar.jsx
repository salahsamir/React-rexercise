import React from 'react'
import { Link } from 'react-router-dom'
import style from './navbar.module.css'
export default function () {
  return (
<nav className="navbar navbar-expand-lg bg-black  ">
  <div className="container p-2">
    <Link className="navbar-brand text-white fw-bolder fs-3" to="">START REACT</Link>
    <button className="navbar-toggler bg-white btn btn-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon " />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
       
       <li className="nav-item">
          <Link className="nav-link text-white fw-blod fs-5" to="about">ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white fw-blod fs-5" to="portfolio">PORTFOLIO</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white fw-blod fs-5" to="api">MOVIES</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white fw-blod fs-5" to="location">LOCATION</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link text-white fw-blod fs-5" to="contact">CONTACT</Link>
        </li>
   
      </ul>
    </div>
  </div>
</nav>

  )
}
