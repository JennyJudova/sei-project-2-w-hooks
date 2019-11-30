import React from 'react'

// const RefreshButton = () => {

//   return (
//     <button type="button" className="refresh" onClick={() => window.location.reload(true)}>Refresh</button>
//   )

// }

// export default RefreshButton

class RefreshButton extends React.Component {
  constructor() {
    super()

    this.state = {
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    location.reload()
  }

  render() {
    return (
      <button className="refresh" onClick={this.handleClick}>Refresh</button>
    )
  }
}

export default RefreshButton