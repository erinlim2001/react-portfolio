import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Erin Lim Portfolio</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#aboutMe">About Me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#work">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contactMe">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://docs.google.com/document/d/1lnHHNazk5CWNKvR1ab-SO1DLRgPpIu2v/edit?usp=sharing&ouid=103374442675887078830&rtpof=true&sd=true">Resume</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.linkedin.com/in/erinlim123">LinkedIn</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://github.com/erinlim2001/Erin-Lim-Portfolio">Portfolio Code</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar
