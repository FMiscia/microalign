import React from 'react';
 
class RepairBoxes extends React.Component {
    render(){
        return (
            <section className="repair-boxes-area">
                <div className="container">
                    <div className="row m-0">
                        <div className="col-lg-4 col-md-6 p-0">
                            <div className="single-repair-box">
                                {/* <i className="icofont-laptop-alt"></i> */}
                                <h3>OUR IDEA</h3>
                                <p>
                                    The MicroAlign product idea is fiber array
                                    positioning stage, compatible with photonic
                                    testing and assembly equipment
                                </p>
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
                            <div className="single-repair-box active">
                                <h3>OUR STAGE</h3>
                                <p>
                                    The MicroAlign standalone stage is provided
                                    with electronics and software control for
                                    fast and accurate active alignment
                                    capabilities
                                </p>
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
                            <div className="single-repair-box">
                                <h3>OUR POSITIONING PROCESS</h3>
                                <p>
                                    The MicroAlign fiber positioning provides
                                    per fiber alignment capabilities and
                                    parallel control for simultaneous alignment
                                    of all the fibers.
                                </p>
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
 
export default RepairBoxes;