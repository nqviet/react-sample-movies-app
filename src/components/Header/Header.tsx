import React from 'react'

import { Link } from '../../Router'

import './Header.scss'

export interface HeaderProps {}

export default function Header() {
  return (
    <header className="cheader">
      <div className="header-content">
        <Link className="nav-item" to="/">
          <span className="logo">PROJECT</span>
        </Link>
        <nav className="nav">
          <Link className="nav-item" to="/">
            Movies
          </Link>
        </nav>
        <a href="#javascript" className="login-btn">
          Login
        </a>
      </div>
    </header>
  )
}
