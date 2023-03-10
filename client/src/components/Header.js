import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <nav>
            <div className="logo">
                BOOKATION
            </div>
            <ul className="nav_list">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/allbooks'>Books</Link></li>
                <li><Link to='/add-new-book'>Add Book</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header