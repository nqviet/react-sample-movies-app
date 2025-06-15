import React from 'react'

import './Footer.scss'

export interface FooterProps {}

export default function Footer() {
  return (
    <footer className="cfooter">
      <div className="footer-content">
        <nav className="nav">
          <div className="footer-column">
            <div className="title">THE BASICS</div>
            <a href="#javascript">About Us</a>
            <a href="#javascript">Contact Us</a>
            <a href="#javascript">Forum</a>
          </div>
          <div className="footer-column">
            <div className="title">GET INVOLVED</div>
            <a href="#javascript">Add New Movie</a>
            <a href="#javascript">Add New TV Show</a>
          </div>
          <div className="footer-column">
            <div className="title">COMMUNITY</div>
            <a href="#javascript">Guidelines</a>
          </div>
          <div className="footer-column">
            <div className="title">LEGAL</div>
            <a href="#javascript">Terms of Use</a>
          </div>
        </nav>
      </div>
    </footer>
  )
}
