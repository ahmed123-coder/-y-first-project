import React from 'react'
import './Header.css';
import { Link } from "react-router-dom";


export default function Header() {
  return (
<div>
  <nav>
    <div className="logo">
      <h1>Logo</h1>
    </div>
    <ul id="menuList">
      <li><a>
        <Link to="/index">home</Link></a>
        Home
      </li>
      <li><a>
        <Link to="/about">about</Link></a>
        About
      </li>
      <li><a>
        <Link to="/services">service</Link></a>
        Services
      </li>
      <li><a>
        <Link to="/fgfdg" >dz</Link></a>
        Product
      </li>
      <li><a>
        <Link to="/gfdfg" >dz</Link></a>
        Contact
      </li>
    </ul>
    <div className="menu-icon">
    </div>
  </nav>
</div>

  )
}
