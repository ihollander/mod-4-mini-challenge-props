import React from 'react'

// function component (arrow fn syntax)
const Header = props => {
  // TODO: find a way to get the spiceCount passed down as a prop to this component
  
  
  return (
    <header>
      <h1>The Spice Store</h1>
      <h3>We have {props.spiceCount} spices in stock!</h3>
    </header>
  )
}

export default Header