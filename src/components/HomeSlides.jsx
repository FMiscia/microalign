import React from "react"
import { Link } from "react-router-dom"
import ModalVideo from "react-modal-video"
import "../../node_modules/react-modal-video/scss/modal-video.scss"
import OwlCarousel from "react-owl-carousel3"
import VisibilitySensor from "react-visibility-sensor"
import i from "react-icofont"

const options = {
    loop: false,
    autoplay: true,
    nav: false,
    items: 1,
    mouseDrag: true,
    autoplayHoverPause: true,
    responsiveClass: true,
    dots: true,
    navText: [
        "<i class='icofont-double-left'></i>",
        "<i class='icofont-double-right'></i>",
    ],
}

class HomeSlides extends React.Component {
    state = {
        isOpen: false,
    }

    openModal = () => {
        this.setState({ isOpen: true })
    }

    render() {
        return (
            <section id="home">
                <React.Fragment>
                    <OwlCarousel
                        className="repair-home-slides owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="repair-main-banner item-bg1">
                            <div className="container">
                                <div className="row align-items-center">
                                    <VisibilitySensor>
                                        {({ isVisible }) => (
                                            <React.Fragment>
                                                <div className="col-lg-7">
                                                    <div className="repair-banner-content">
                                                        <h2
                                                            className={
                                                                isVisible
                                                                    ? "animated fadeInUp"
                                                                    : ""
                                                            }
                                                        >
                                                            The cutting edge
                                                            fiber-array
                                                            alignment technology
                                                        </h2>
                                                        <p
                                                            className={
                                                                isVisible
                                                                    ? "animated zoomIn"
                                                                    : ""
                                                            }
                                                        >
                                                            MicroAlign is
                                                            developing a
                                                            revolutionary
                                                            alignment solution
                                                            to optimally connect
                                                            multiple optical
                                                            fibers and photonic
                                                            integrated chips
                                                        </p>
                                                        {/* <Link
                                                        to="#"
                                                        className={`
                                                            btn btn-primary ${
                                                                isVisible
                                                                    ? "animated fadeInDown"
                                                                    : ""
                                                            }
                                                        `}
                                                    >
                                                        Get a Quote
                                                    </Link> */}
                                                    </div>
                                                </div>

                                                <div className="col-lg-5">
                                                    <div className="banner-video text-center">
                                                        <Link
                                                            to="#"
                                                            className={`
                                                            popup-youtube ${
                                                                isVisible
                                                                    ? "animated fadeInUp"
                                                                    : ""
                                                            }
                                                        `}
                                                            onClick={(e) => {
                                                                e.preventDefault()
                                                                this.openModal()
                                                            }}
                                                        >
                                                            <i className="icofont-ui-play"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </React.Fragment>
                                        )}
                                    </VisibilitySensor>
                                </div>
                            </div>
                        </div>

                        <div className="repair-main-banner item-bg2">
                            <div className="container">
                                <div className="row align-items-center">
                                    <VisibilitySensor>
                                        {({ isVisible }) => (
                                            <React.Fragment>
                                                <div className="col-lg-7">
                                                    <div className="repair-banner-content">
                                                        <h2
                                                            className={
                                                                isVisible
                                                                    ? "animated fadeInUp"
                                                                    : ""
                                                            }
                                                        >
                                                            Huge impact in the
                                                            Photonic
                                                            manufacturing world
                                                        </h2>
                                                        <p
                                                            className={
                                                                isVisible
                                                                    ? "animated zoomIn"
                                                                    : ""
                                                            }
                                                        >
                                                            Wide range of
                                                            applications: from
                                                            DATACOM, sensing,
                                                            LIDAR, up to
                                                            infra-red
                                                            communication.
                                                        </p>
                                                        {/* <Link
                                                        to="#"
                                                        className={`
                                                            btn btn-primary ${
                                                                isVisible
                                                                    ? "animated fadeInDown"
                                                                    : ""
                                                            }
                                                        `}
                                                    >
                                                        Get a Quote
                                                    </Link> */}
                                                    </div>
                                                </div>

                                                <div className="col-lg-5">
                                                    <div className="banner-video text-center">
                                                        <Link
                                                            to="#"
                                                            className={`
                                                            popup-youtube ${
                                                                isVisible
                                                                    ? "animated fadeInUp"
                                                                    : ""
                                                            }
                                                        `}
                                                            onClick={(e) => {
                                                                e.preventDefault()
                                                                this.openModal()
                                                            }}
                                                        >
                                                            <i className="icofont-ui-play"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </React.Fragment>
                                        )}
                                    </VisibilitySensor>
                                </div>
                            </div>
                        </div>

                        {/* <div className="repair-main-banner item-bg3">
                        <div className="container">
                            <div className="row align-items-center">
                                <VisibilitySensor>
                                    {({ isVisible }) => (
                                        <React.Fragment>
                                            <div className="col-lg-7">
                                                <div className="repair-banner-content">
                                                    <h2
                                                        className={
                                                            isVisible
                                                                ? "animated fadeInUp"
                                                                : ""
                                                        }
                                                    >
                                                        Multi-Brand Onsite PC
                                                        Support
                                                    </h2>
                                                    <p
                                                        className={
                                                            isVisible
                                                                ? "animated zoomIn"
                                                                : ""
                                                        }
                                                    >
                                                        Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        adipiscing elit, sed do
                                                        eiusmod tempor dolore
                                                        magna aliqua.
                                                    </p>
                                                    <Link
                                                        to="#"
                                                        className={`
                                                            btn btn-primary ${
                                                                isVisible
                                                                    ? "animated fadeInDown"
                                                                    : ""
                                                            }
                                                        `}
                                                    >
                                                        Get a Quote
                                                    </Link>
                                                </div>
                                            </div>

                                            <div className="col-lg-5">
                                                <div className="banner-video text-center">
                                                    <Link
                                                        to="#"
                                                        className={`
                                                            popup-youtube ${
                                                                isVisible
                                                                    ? "animated fadeInUp"
                                                                    : ""
                                                            }
                                                        `}
                                                        onClick={(e) => {
                                                            e.preventDefault()
                                                            this.openModal()
                                                        }}
                                                    >
                                                        <i className="icofont-ui-play"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </React.Fragment>
                                    )}
                                </VisibilitySensor>
                            </div>
                        </div>
                    </div> */}
                    </OwlCarousel>

                    <ModalVideo
                        channel="youtube"
                        isOpen={this.state.isOpen}
                        videoId="szuchBiLrEM"
                        onClose={() => this.setState({ isOpen: false })}
                    />
                </React.Fragment>
            </section>
        )
    }
}

export default HomeSlides
