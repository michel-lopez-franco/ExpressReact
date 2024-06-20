// Sin utilizar jsx
const React = require('react')

class App extends React.Component {
  render () {
    return (
      React.createElement('h1', null, 'Hola Mundo con React')
    )
  }
}

module.exports = App
