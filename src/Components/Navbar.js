import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
    <a className="navbar-brand"href="/">{props.title} </a>
    

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link"href="/"> <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link"href="/">{props.link}</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle"href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item"href="/">Action</a>
          <a className="dropdown-item"href="/">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item"href="/">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled"href="/">Disabled</a>
      </li>
    </ul>
    <div className={`custom-control custom-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input type="checkbox" className="custom-control-input" id="customSwitch1" onClick={props.togglemode}/>
  <label className="custom-control-label" htmlFor="customSwitch1" >Enable Dark Mode</label>
</div>
  </div>
</nav>
  )
}
 Navbar.propTypes={
  title: PropTypes.string,
   link:PropTypes.string
  }
  Navbar.defaultProps={
    title:"Set The title here"
  }