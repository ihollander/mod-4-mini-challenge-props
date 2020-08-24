import React from 'react'

class SpiceItem extends React.Component {

  render() {
    console.log(this.props)
    return (
      <div className="spice-item">
        <img src={this.props.spice.image} alt={this.props.spice.title} />
        <div className="details">
          <h2>{this.props.title}</h2>
          <p>{"replace me with a DESCRIPTION"}</p>
          <em>{"replace me with NOTES"}</em>
        </div>
      </div>
    )
  }
}

export default SpiceItem