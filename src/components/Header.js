import React from 'react'

// function component (arrow fn syntax)
const Header = props => {
  return (
    <header>
      <h1>The Spice Store</h1>
      <h3>We have {props.spiceCount} spices in stock!</h3>
    </header>
  )
}

export default Header