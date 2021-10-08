import React from "react"
import OwlCarousel from "react-owl-carousel3"

const options = {
    loop: false,
    autoplay: true,
    nav: false,
    margin: 30,
    mouseDrag: true,
    autoplayHoverPause: true,
    responsiveClass: true,
    dots: true,
    navText: [
        "<i class='icofont-double-left'></i>",
        "<i class='icofont-double-right'></i>",
    ],
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
        1200: {
            items: 3,
        },
    },
}

class Services extends React.Component {
    render() {
        return (
            <section
                id="services"
                className="info-services-area ptb-100"
            >
                <div className="container pb-15">
                    <div className="section-title text-center">
                        <h3>What we do</h3>
                        <p>
                            MicroAlign is developing a revolutionary alignment
                            solution to optimally connect multiple optical
                            fibers and photonic integrated chips. The connection
                            of optical fibers and photonic chips has always been
                            an exhausting operation, and MicroAlign’s task is to
                            provide a micro-positioning stage capable of
                            relaxing the involved strict alignment tolerances.
                            MicroAlign technology aims to optimize the quality
                            of each optical fiber-to-chip connection, for tens
                            of optical fibers and with sub-micrometer accuracy,
                            by means of a novel micro-electromechanical system.
                            The alignment method offered by MicroAlign has
                            potential impact in the Photonic manufacturing world
                            for a number of applications ranging from DATACOM,
                            sensing, LIDAR, up to infra-red communication.
                        </p>
                    </div>
                    <div className="section-title text-center">
                        <h3>Applications</h3>
                    </div>
                    <div className="row">
                        <OwlCarousel
                            className="info-services-slides owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="col-lg-12 col-md-12">
                                <div className="single-info-services">
                                    <h3>Si-Photonics wafer probe stations </h3>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-info-services">
                                    <h3>Fiber alignment manufacturing</h3>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-info-services">
                                    <h3>
                                        Fiber array-to-photonic chip assembly
                                    </h3>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-info-services">
                                    <h3>Beam steering for optical switching</h3>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>

                    {/* <div className="info-services-inner">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="single-inner-services">
                                    <i className="icofont-golden-ratio"></i>
                                    <h3>SOLUTION</h3>
                                    <p>
                                        MicroAlign brings a solution for the
                                        photonic manufacturing industry where
                                        sub-micron accuracy fiber alignment is
                                        needed
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="single-inner-services">
                                    <i className="icofont-architecture-alt"></i>
                                    <h3>EFFICIENCY</h3>
                                    <p>
                                        The per fiber accuracy alignment enables
                                        optimization of each optical fiber
                                        connection channel, with potential for
                                        more energy efficiency optical modules
                                        and higher quality testing processes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>
        )
    }
}

export default Services
