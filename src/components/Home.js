import React from 'react'
import { Link } from 'react-router-dom'

import Greeting from './Greeting'

class Home extends React.Component {
  constructor() {
    super()

    this.state = {
      city: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.keyPress = this.keyPress.bind(this)
  }

  handleChange(e) {
    this.setState({ city: e.target.value })
  }

  handleSubmit() {
    if (!this.state.city) return null
    this.props.history.push(`/weather/${this.state.city}`)
  }

  keyPress(e) {
    if (e.keyCode === 13) return this.handleSubmit()
  }

  render() {
    return (
      <>
        <div className="container">
          <Greeting />
          <p className="subtitle is-2 has-text-centered">Where do you live?</p>
        </div>
        <section className="home">
          <input className="input"
            onKeyDown={(e) => this.keyPress(e)}
            onChange={(e) => this.handleChange(e)}
            placeholder="Type in your city"
          />
          <button className="button city" onClick={this.handleSubmit}>HIT ME!</button>
        </section>
        <div className="london">
          <Link to={'/weather/London'} style={{ textDecoration: 'none' }}>
            <button className="button london">HEY - I&apos;M A LONDONER!</button>
          </Link>
        </div>
        <div className="flying">
          <img className="catGif" src="http://giphygifs.s3.amazonaws.com/media/sIIhZliB2McAo/giphy.gif"></img>
        </div>
      </>
    )
  }
}

export default Home