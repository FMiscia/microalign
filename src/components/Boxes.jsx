import React from "react"

class Boxes extends React.Component {
    render() {
        return (
            <section className="info-boxes-area">
                <div className="container">
                    <div className="row m-0">
                        <div className="col-lg-4 col-md-6 p-0">
                            <div className="single-info-box">
                                <h3>THE PROBLEM</h3>
                                <p>
                                    Efficient connection of optical fiber arrays
                                    and photonic chips requires sub-micron
                                    assembly, a cost and time consuming
                                    operation.
                                </p>
                                <img
                                    src={require("../assets/img/problem.png")}
                                    alt="problem"
                                />

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
                            <div className="single-info-box active">
                                <h3>THE SOLUTION</h3>
                                <p>
                                    The MicroAlign fiber positioning method
                                    provides per fiber alignment capabilities
                                    and simultaneous control for all the fibers.
                                    The proposed method relax assembly
                                    tolerances and can suppress misalignment due
                                    to fiber eccentricity.
                                </p>
                                <img
                                    src={require("../assets/img/solution.png")}
                                    alt="solution"
                                />

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
                            <div className="single-info-box">
                                <h3>THE PRODUCT VISION</h3>
                                <p>
                                    The MicroAlign standalone stage will be
                                    provided with control electronics and
                                    software for fast and accurate fiber array
                                    alignment, in wafer testing and photonic
                                    assembly equipment.
                                </p>
                                <img
                                    src={require("../assets/img/vision.png")}
                                    alt="core"
                                />

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

export default Boxes
