import Router from 'next/router';
import { Navbar, Nav } from 'react-bootstrap'
import { Component } from 'react'
export default class Navigation extends Component {

    state = {
        menuItems: [
            { key: 'classic', path: '/game/classic', label: 'Classic Solitaire', active: false },
            { key: 'spider', path: '/game/spider', label: 'Spider Solitaire', active: false },
            { key: 'freecell', path: '/game/freecell', label: 'Freecell Solitaire', active: false },
            { key: 'pyramid', path: '/game/pyramid', label: 'Pyramid Solitaire', active: false }
        ]
    }

    componentDidMount(path) {
        let menuItems = [...this.state.menuItems]
        for (let item of menuItems) {
            if (item.path === Router.pathname) {
                item.active = true
            }
        }
        this.setState({ menuItems })
    }
    
    render() {

        let items = this.state.menuItems.map(({ key, path, label, active }) => {
            let current = active ? ' current': ''
            return (<Nav.Link key={key} href={path} className={"menu-item" + current}>{label}</Nav.Link>)
        })

        return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className="align-items-stretch">
            <Navbar.Brand>
              <a href="/">
                <img
                    src="/logo.png"
                    className="img-fluid logo"
                    alt="SOLITAIRE100 Logo"
                />
              </a>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-between align-items-stretch w-100">
                <Nav className="menu-items navbar-nav mx-auto text-center align-items-center">
                    {items}
                </Nav>
                <Nav className="flex-row justify-content-center align-items-flex-start flex-nowrap">
                    <Nav.Link rel="noopener" href="https://www.facebook.com/SOLITAIRE100official" target="_blank">
                        <img className="social-icon img-fluid" src="/social/facebook.png" alt="Facebook Link" />
                    </Nav.Link>
                    <Nav.Link rel="noopener" href="https://twitter.com/SOLITAIRE100_" target="_blank">
                        <img className="social-icon img-fluid" src="/social/twitter.png" alt="Twitter Link" />
                    </Nav.Link>
                    <Nav.Link rel="noopener" href="https://www.instagram.com/solitaire100_/" target="_blank">
                        <img className="social-icon img-fluid" src="/social/instagram.png" alt="Instagram Link" />
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
          </Navbar>
        )
    }
}