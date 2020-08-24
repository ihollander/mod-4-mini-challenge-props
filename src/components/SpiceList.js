import React from 'react'
import SpiceItem from './SpiceItem';

// class component
class SpiceList extends React.Component {

  renderSpices = (spices) => {
    return (
      spices.map(spice => <SpiceItem spice={spice} />)
    )
  }

  render() {
    return (
      <section className="spice-list">
        {this.renderSpices(this.props.spices)}
      </section>
    )
  }
}

export default SpiceList