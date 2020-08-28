import React from 'react'
import SpiceItem from "./SpiceItem"

class SpiceList extends React.Component {

  renderSpices = () => {
    return this.props.spices.map(spice => <SpiceItem spice={spice} />)
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
