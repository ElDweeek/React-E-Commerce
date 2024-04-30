import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import NavLogo from '../images/NavLogo.png'


import '../Css/nav.css'


const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container">
          <div className="nav-logo">
            <a className="navbar-brand" href="/">
              <img src={NavLogo} alt="Logo" />
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li>
                <input
                  className="search d-block d-lg-none"
                  type="text"
                  id="mob-search"
                  placeholder="Search...."
                />
              </li>
              <li className="nav-item">
                <a className="nav-link m-1 p-2 p-lg-3" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link m-1 p-2 p-lg-3 "
                  aria-current="page"
                  href="/authors"
                >
                  Authors
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link m-1 p-2 p-lg-3 "
                  aria-current="page"
                  href="/books"
                >
                  Books
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link m-1 p-2 p-lg-3 "
                  aria-current="page"
                  href="/about"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link m-1 p-2 p-lg-3 "
                  aria-current="page"
                  href="/contact"
                >
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="search-icon-div  me-2 ps-2  d-none d-lg-block">
              <span>
              <FontAwesomeIcon icon={faMagnifyingGlass}/>
              </span>
              <input
                className="searchArea"
                type="text"
                id="desk-search"
                placeholder="Author / Book"
                autoFocus=""
              />
            </div>
            
            <a className="btn main-btn ps-4 pe-4" href="#/signin">
              Login
            </a>
          </div>
          <div className="shop-cart"></div>
        </div>
      </nav>

    </>
  )
}


export default Nav;