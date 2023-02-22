import React from 'react'
import SearchBar from './SearchBar'

function Nav(props) {
  return (
    <div style={{backgroundColor:"yellow", width:"100%", display:'flex', justifyContent:'flex-end'}}>
        <SearchBar onSearch={props.onSearch} />
    </div>
  )
}

export default Nav