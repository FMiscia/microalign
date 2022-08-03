import React from "react"
import { Route } from "react-router-dom"

//Package CSS
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "animate.css/animate.min.css"

//Template SCSS Style
import "./assets/scss/style.scss"
import "./assets/scss/responsive.scss"

//Component Import
import Home from "./pages/Home"
import ScrollUpBtn from "./components/ScrollUpBtn"

import { TransitionGroup, CSSTransition } from "react-transition-group"

const App = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <div className="App">
            <div>
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
                                </section>
                            </CSSTransition>
                        </TransitionGroup>
                    )}
                />
                <ScrollUpBtn />
            </div>
        </div>
    )
}

export default App
