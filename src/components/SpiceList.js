import React from 'react'
import SpiceItem from './SpiceItem';

// class component
class SpiceList extends React.Component {

  renderSpices() {
    return this.props.spices.map(spice => <SpiceItem key={spice.id} spice={spice}/>)
  }

  render() {
    return (
      <section className="spice-list">
        {this.renderSpices()}
      </section>
    )
  }
}

export default SpiceList