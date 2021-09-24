import React from "react"
import { Route } from "react-router-dom"
import Page from "react-page-loading"

//Package CSS
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "animate.css/animate.min.css"

//Template SCSS Style
import "./assets/scss/style.scss"
import "./assets/scss/responsive.scss"

//Component Import
import Home from "./pages/Home"
// import About from "./components/About"
// import Services from "./components/Services"
// import Team from "./components/Team"
import ScrollUpBtn from "./components/ScrollUpBtn"

import { TransitionGroup, CSSTransition } from "react-transition-group"

const App = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <div className="App">
            <div>
                <Page loader={"bar"} color={"#506CEA"} size={9}>
                    <Route
                        render={({ location }) => (
                            <TransitionGroup className="transition-group">
                                <CSSTransition
                                    key={location.key}
                                    timeout={{ enter: 900, exit: 900 }}
                                    classNames="fade"
                                >
                                    <section className="route-section">
                                        <Home />
                                        {/* <Switch location={location}>
                                            <Route
                                                path="/about"
                                                component={About}
                                            />
                                            <Route
                                                path="/services"
                                                component={Services}
                                            />
                                            <Route
                                                path="/team"
                                                component={Team}
                                            />
                                            <Route
                                                path="/home"
                                                component={Home}
                                            />
                                            <Route
                                                path="/"
                                                exact
                                                component={Home}
                                            />
                                            <Redirect to="/not-found" />
                                        </Switch> */}
                                    </section>
                                </CSSTransition>
                            </TransitionGroup>
                        )}
                    />
                    <ScrollUpBtn />
                </Page>
            </div>
        </div>
    )
}

export default App
