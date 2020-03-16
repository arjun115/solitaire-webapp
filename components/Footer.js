import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export default class Footer extends Component {
    
    render() {
        return (
            <Navbar variant="dark" className="mt-auto">
                <Nav className="navbar-nav text-center w-100 footer-menu justify-content-end">
                    <Nav.Link href="/about" className="menu-item">About</Nav.Link>
                    <Nav.Link href="/blog" className="menu-item">Blog</Nav.Link>
                    <Nav.Link href="/cookies" className="menu-item">Cookies</Nav.Link>
                    <Nav.Link href="/privacy" className="menu-item">Privacy</Nav.Link>
                    <Nav.Link href="/terms" className="menu-item">Terms</Nav.Link>
                </Nav>
          </Navbar>
        )
    }
}