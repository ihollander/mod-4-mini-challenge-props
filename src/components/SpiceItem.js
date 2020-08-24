import React from 'react'

class SpiceItem extends React.Component {

  render() {
    const {image, title, description, notes} = this.props;

    return (
      <div className="spice-item">
        <img src={image} alt={title} />
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