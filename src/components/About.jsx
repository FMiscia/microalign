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
                                    <h3>The MicroAlign origins.</h3>
                                    <p>
                                        MicroAlign technology is based on the
                                        results of a PhD project performed at
                                        TU/e, and part of the MEMPHIS II program
                                        funded by the Dutch Research Council
                                        (NWO).
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
                                        A micro-positioning system capable of
                                        aligning multiple optical fibers has
                                        been invented during the project and
                                        represents the core of the MicroAlign
                                        technology. The potential of the
                                        alignment system in relaxing assembly
                                        tolerances in the photonic manufacturing
                                        industry has motivated the team to
                                        explore the market potential of the new
                                        technology. MicroAlign has been awarded
                                        in 2019 with the Take-Off phase 1 grant
                                        from NWO, with the MRE Metropoolregio
                                        Eindhoven in 2020, and with the Take-Off
                                        phase 2 grant in 2021. MicroAlign is now
                                        developing the micro-positioning
                                        technology towards the industry
                                        requirements, for both photonic testing
                                        and assembly applications. MicroAlign
                                        operates with access to the highly
                                        equipped TU/e facilities and to the
                                        Nanolab Eindhoven cleanroom, and can
                                        leverage on the developed photonic,
                                        electronic, and mechanical knowledge to
                                        propose a quality solution.
                                    </i>
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="info-about-image">
                                <img
                                    src={require("../assets/img/IPOBuilding.jpg")}
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
