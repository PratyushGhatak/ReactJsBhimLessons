import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav class="nav">
    <Link class="nav-link" aria-current="page" to="/">Home</Link>
    <Link class="nav-link" to="/child">Child</Link>
    </nav>
  )
}

export default Nav