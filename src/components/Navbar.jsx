import React from 'react'
import SearchBar from './SearchBar'
import {Link} from 'react-router-dom'



function Navbar({onSearch}) {
  return (
        <div className='navbar_wrapper'>
            <div className='link_container'>
                <Link to='/about'>About</Link>
                <Link to='/home'>Home</Link>
                <Link to='/favorites'>Favorites</Link>
            </div>

            <SearchBar onSearch={onSearch} />
        </div>
  )
}

export default Navbar