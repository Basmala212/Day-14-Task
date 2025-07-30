import React from 'react'
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <>
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item">
            <NavLink className="nav-link" to={'/'} aria-current="page">Home
            <span className="visually-hidden">(current)</span></NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to={'/gallery'}>Gallery</NavLink>
            </li>
            <li className="nav-item">
           <NavLink className="nav-link" to={'/send'}>Send</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to={'/hero'}>Hero</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to={'/parent'}>Parent</NavLink>
             </li>
                        
            </ul>
            <form className="d-flex my-2 my-lg-0">
            <input className="form-control me-sm-2" type="text" placeholder="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
            </button>
                </form>
                </div>
                  </div>
                  </nav>

            
        </>
    )
}