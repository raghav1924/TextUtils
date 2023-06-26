import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function NavBar(props) {
  return (
    <>
    <nav className={'navbar bg-dark navbar-expand-lg bg-body-tertiary'} data-bs-theme={props.mode}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li>
      </ul>
      <div className={`form-check form-switch mx-4 text-${props.mode==='light'?'dark':'light'}`} >
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        </div>
      {/* <button className="btn btn-warning me-5 btn-sm" >Mode</button> */}
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

NavBar.prototype={
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired,
}

NavBar.defaultProps={
    title:'Set Title of this Website',
    aboutText: 'Set About Us Heading'
}