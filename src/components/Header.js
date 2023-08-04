import React from 'react'
import { Link } from 'gatsby'

export default function Header() {
  return (
    <nav>
      <h1>Bastani</h1>
      <div className="links">
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </nav>
  )
}