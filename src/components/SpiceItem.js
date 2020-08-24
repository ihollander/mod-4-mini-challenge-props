import React from 'react'

class SpiceItem extends React.Component {

  render() {
    let { title, image, description, notes } = this.props.spice

    return (
      <div className="spice-item">
        <img src={image} alt= {title} />
        <div className="details">
          <h2>{title}</h2>
          <p>{description}</p>
          <em>{notes}</em>
        </div>
      </div>
    )
  }
}

export default SpiceItem