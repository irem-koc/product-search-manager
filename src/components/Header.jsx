import React from 'react'
import { Link } from 'react-router-dom'
import "./../styles/Header.css"
const Header = () => {
  return (
    <div className='header'>
        <ul>
            <Link className='link' to="/">Home</Link>
            <Link className='link' to="/products">Products</Link>
        </ul>
    </div>
  )
}

export default Header