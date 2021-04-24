import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <Header />
      <Container className="my-3">
        <div>Hello</div>
      </Container>
    </Router>
  )
}

export default App
