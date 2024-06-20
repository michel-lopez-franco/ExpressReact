const express = require('express')
const app = express()

const ReactDOMServer = require('react-dom/server')
const React = require('react')

const Componente = require('./Componente.jsx')

app.get('/', (req, res) => {
  const html = ReactDOMServer.renderToString(
    React.createElement(Componente)
  )
  console.log(html)
  res.send(html)
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
