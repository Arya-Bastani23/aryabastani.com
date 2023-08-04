import React from 'react'
import Header from './Header'
import '../styles/global.css'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <div className="content">
        { children }
      </div>
      <footer>
        <p>Designed and built by Arya Bastani. In whatever town I'm in right now.</p>
      </footer>
    </div>
  )
}