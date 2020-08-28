import React from 'react'

class SpiceItem extends React.Component {

  render() {

    return (
      <div className="spice-item">
        <img src={this.props.spice["image"]} alt={`${this.props.spice["title"]}`} />
        <div className="details">
          <h2>{this.props.spice["title"]}</h2>
          <p>{this.props.spice["description"]}</p>
          <em>{this.props.spice["notes"]}</em>
        </div>
      </div> 
    )
  }
}

export default SpiceItem
