import React from "react"
import WOW from "wowjs"
import i from "react-icofont"

class About extends React.Component {
    componentDidMount() {
        new WOW.WOW({
            boxClass: "wow",
            animateClass: "animated",
            offset: 20,
            mobile: true,
            live: false,
        }).init()
    }

    render() {
        return (
            <section id="about" className="info-about-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="info-about-content">
                                <div className="section-title">
                                    <span>About Us</span>
                                    <h3>
                                        We are a spin-off of the Eindhoven
                                        University of Technology (TU/E).
                                    </h3>
                                    <p>
                                        MicroAlign has been founded in April
                                        2021 in Eindhoven, the Netherlands, and
                                        is a spin-off of the Eindhoven
                                        University of Technology (TU/E).
                                    </p>
                                </div>

                                <ul>
                                    <li>
                                        <i className="icofont-users"></i>
                                        Experience
                                    </li>
                                    <li>
                                        <i className="icofont-badge"></i>
                                        Excellence
                                    </li>
                                </ul>

                                <p>
                                    <i>
                                        MicroAlign technology is based on the
                                        results of the PhD project performed
                                        from Simone Cardarelli within the TU/E.
                                        A micro-positioning system capable of
                                        aligning multiple optical fibers has
                                        been invented and represents the core of
                                        the MicroAlign technology. The potential
                                        of the alignment system in relaxing
                                        assembly tolerances in the photonic
                                        manufacturing industry has motivated the
                                        team to explore the market potential of
                                        the new technology. MicroAlign has been
                                        awarded in 2019 with the Take-Off phase
                                        1 grant from NWO, with the MRE
                                        Metropoolregio Eindhoven in 2020, and
                                        with the Take-Off phase 2 grant in 2021.
                                        MicroAlign is now developing the
                                        micro-positioning technology to the
                                        industry needs level.
                                    </i>
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="info-about-image">
                                <img
                                    src={require("../assets/img/fiber-3.jpg")}
                                    className="wow fadeInDown"
                                    alt="fiber"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About
