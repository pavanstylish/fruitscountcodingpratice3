// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {key1: 0, key2: 0}

  Mangoes = () => {
    this.setState(prevState => ({key1: prevState.key1 + 1}))
  }

  Bananas = () => {
    this.setState(prevState => ({key2: prevState.key2 + 1}))
  }

  render() {
    const {key1} = this.state
    const {key2} = this.state
    return (
      <div className="container">
        <div className="main">
          <h1 className="heading">
            Bob ate {key1} mangoes {key2} bananas
          </h1>
          <div className="sub-main">
            <div>
              <img
                className="img1"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mangoes"
              />
              <button onClick={this.Mangoes} type="button">
                Eat mangoes
              </button>
            </div>
            <div>
              <img
                className="img2"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="bananas"
              />
              <button onClick={this.Bananas} type="button">
                Eat bananas
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
