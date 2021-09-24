import React, { Component } from "react"
import { Link } from "react-scroll"
import { LinkContainer } from "react-router-bootstrap"
import { Navbar, Container, Nav } from "react-bootstrap"

class NavBar extends Component {
    componentDidMount() {
        let elem = document.getElementById("navbar")
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elem.classList.add("is-sticky")
            } else {
                elem.classList.remove("is-sticky")
            }
        })
        let scrollWithOffset = (el, offset) => {
            const elementPosition = el.offsetTop - offset
            window.scroll({
                top: elementPosition,
                left: 0,
                behavior: "smooth",
            })
        }
        this.setState({ scrollWithOffset })
    }

    closeNavbar() {
        if (window.matchMedia("screen and (max-width: 991px)").matches) {
            document.getElementById("collaspe-btn").click()
        }
    }

    render() {
        return (
            <React.Fragment>
                <Navbar
                    sticky="top"
                    id="navbar"
                    bg="light"
                    expand="lg"
                    className="navbar navbar-expand-lg navbar-light bg-light"
                    collapseOnSelect={true}
                >
                    <Container>
                        <LinkContainer exact to="/">
                            <Navbar.Brand className="navbar-brand">
                                Micro<span>Align</span>
                            </Navbar.Brand>
                        </LinkContainer>

                        <Navbar.Toggle
                            aria-controls="basic-navbar-nav"
                            id="collaspe-btn"
                        />

                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <React.Fragment>
                                    <Link
                                        activeClass="active"
                                        to="home"
                                        spy={true}
                                        smooth={true}
                                        offset={-200}
                                        duration={800}
                                        className="nav-link homenav"
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        activeClass="active"
                                        to="about"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={800}
                                        className="nav-link"
                                        onClick={this.closeNavbar}
                                    >
                                        About us
                                    </Link>

                                    <Link
                                        activeClass="active"
                                        to="services"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={800}
                                        className="nav-link"
                                        onClick={this.closeNavbar}
                                    >
                                        What we do
                                    </Link>

                                    <Link
                                        activeClass="active"
                                        to="team"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={800}
                                        className="nav-link"
                                        onClick={this.closeNavbar}
                                    >
                                        Team
                                    </Link>
                                </React.Fragment>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default NavBar
