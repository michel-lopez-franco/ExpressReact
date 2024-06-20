// Sin utilizar jsx
const React = require('react')

class App extends React.Component {
  handleClick () {
    console.log('Button clicked')
  }

  render () {
    return (
      <div>
        <h1> Hola Mundo con React </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet corporis, pariatur beatae tempora quam ut!</p>
        <button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}

module.exports = App
