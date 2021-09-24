import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';

const options = {
    loop: true,
    autoplay: true,
    nav: false,
    mouseDrag: true,
    autoplayHoverPause: true,
    responsiveClass: true,
    dots: false,
    navText: [
        "<i class='icofont-double-left'></i>",
        "<i class='icofont-double-right'></i>"
    ],
    responsive:{
        0:{
            items:2,
        },
        768:{
            items:4,
        },
        1200:{
            items:6,
        }
    }
}
 
class Partner extends React.Component {
    render(){
        return (
            <div className="repair-partner-area">
                <div className="container">
                    <div className="row">
                        <OwlCarousel 
                            className="repair-partner-slider owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="col-lg-12 col-md-12">
                                <div className="single-repain-client">
                                    <Link to="#">
                                        <img src={require("../../assets/img/partner1.png")} alt="partner" />
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-repain-client">
                                    <Link to="#">
                                        <img src={require("../../assets/img/partner2.png")} alt="partner" />
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-repain-client">
                                    <Link to="#">
                                        <img src={require("../../assets/img/partner3.png")} alt="partner" />
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-repain-client">
                                    <Link to="#">
                                        <img src={require("../../assets/img/partner4.png")} alt="partner" />
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-repain-client">
                                    <Link to="#">
                                        <img src={require("../../assets/img/partner5.png")} alt="partner" />
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-repain-client">
                                    <Link to="#">
                                        <img src={require("../../assets/img/partner6.png")} alt="partner" />
                                    </Link>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Partner;