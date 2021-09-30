import React from "react"

class RepairBoxes extends React.Component {
    render() {
        return (
            <section className="repair-boxes-area">
                <div className="container">
                    <div className="row m-0">
                        <div className="col-lg-4 col-md-6 p-0">
                            <div className="single-repair-box">
                                <h3>THE PROBLEM</h3>
                                <p>
                                    Imperfections as core eccentricity in
                                    fiber-arrays compromises the efficient
                                    optical connection between photonic
                                    integrated circuits and the optical fibers.
                                </p>
                                <img
                                    src={require("../assets/img/core.png")}
                                    alt="core"
                                />
                                {/* <Link to="#">Read More</Link> */}

                                <div className="img-box">
                                    <img
                                        src={require("../assets/img/shape1.png")}
                                        alt="box"
                                    />
                                    <img
                                        src={require("../assets/img/shape2.png")}
                                        alt="box"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3 p-0">
                            <div className="single-repair-box active">
                                <h3>THE SOLUTION</h3>
                                <p>
                                    The MicroAlign fiber positioning provides
                                    per fiber alignment capabilities and
                                    parallel control for simultaneous alignment
                                    of all the fibers.
                                </p>
                                <img
                                    src={require("../assets/img/solution.png")}
                                    alt="solution"
                                />
                                {/* <Link to="#">Read More</Link> */}

                                <div className="img-box">
                                    <img
                                        src={require("../assets/img/shape1.png")}
                                        alt="box"
                                    />
                                    <img
                                        src={require("../assets/img/shape2.png")}
                                        alt="box"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 p-0">
                            <div className="single-repair-box">
                                <h3>THE ALIGNMENT STAGE</h3>
                                <p>
                                    The MicroAlign standalone stage is provided
                                    with electronics and software control for
                                    fast and accurate active alignment
                                    capabilities
                                </p>
                                <img
                                    src={require("../assets/img/stage.png")}
                                    alt="core"
                                />
                                {/* <Link to="#">Read More</Link> */}

                                <div className="img-box">
                                    <img
                                        src={require("../assets/img/shape1.png")}
                                        alt="box"
                                    />
                                    <img
                                        src={require("../assets/img/shape2.png")}
                                        alt="box"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default RepairBoxes
