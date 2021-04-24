import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'

import { Navbar } from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar variant="dark" bg="dark">
      <LinkContainer to="/">
        <Navbar.Brand>MyShop</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Signed in as: <a href="#login">Mark Otto</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
