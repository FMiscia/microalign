import React from 'react';
import OwlCarousel from 'react-owl-carousel3';

const options = {
    loop: true,
    autoplay: true,
    nav: false,
    margin: 30,
    mouseDrag: true,
    autoplayHoverPause: true,
    responsiveClass: true,
    dots: true,
    navText: [
    "<i class='icofont-double-left'></i>",
    "<i class='icofont-double-right'></i>"
    ],
    responsive:{
        0:{
            items:1,
        },
        768:{
            items:2,
        },
        1200:{
            items:2,
        }
    }
}
 
class Feedback extends React.Component {
    render(){
        return (
            <section className="feedback-area pb-100">
                <div className="container">
                    <div className="section-title">
                        <span>Testimonials</span>
                        <h3>What customer say about us</h3>
                        <p>We enjoy adapting our strategies to offer every client the best solutions that are at the forefront of the industry.</p>
                    </div>

                    <div className="row">
                        <OwlCarousel 
                            className="repair-feedback-slides owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="col-lg-12 col-md-12">
                                <div className="single-repair-feedback">
                                    <div className="client-info">
                                        <img src={require("../../assets/img/client-avatar1.jpg")} alt="feedback" />

                                        <h3>Michel Jonson</h3>
                                        <span>CEO at Renovation PVT. Ltd.</span>
                                    </div>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                    <ul>
                                        <li><i className="icofont-star"></i></li>
                                        <li><i className="icofont-star"></i></li>
                                        <li><i className="icofont-star"></i></li>
                                        <li><i className="icofont-star"></i></li>
                                        <li><i className="icofont-star"></i></li>
                                    </ul>

                                    <i className="icofont-quote-left"></i>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-repair-feedback">
                                    <div className="client-info">
                                        <img src={require("../../assets/img/client-avatar2.jpg")} alt="feedback" />

                                        <h3>Michel Jonson</h3>
                                        <span>CEO at Renovation PVT. Ltd.</span>
                                    </div>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                    <ul>
                                        <li><i className="icofont-star"></i></li>
                                        <li><i className="icofont-star"></i></li>
                                        <li><i className="icofont-star"></i></li>
                                        <li><i className="icofont-star"></i></li>
                                        <li><i className="icofont-star"></i></li>
                                    </ul>

                                    <i className="icofont-quote-left"></i>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-repair-feedback">
                                    <div className="client-info">
                                        <img src={require("../../assets/img/client-avatar3.jpg")} alt="feedback" />

                                        <h3>Michel Jonson</h3>
                                        <span>CEO at Renovation PVT. Ltd.</span>
                                    </div>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                    <ul>
                                        <li><i className="icofont-star"></i></li>
                                        <li><i className="icofont-star"></i></li>
                                        <li><i className="icofont-star"></i></li>
                                        <li><i className="icofont-star"></i></li>
                                        <li><i className="icofont-star"></i></li>
                                    </ul>

                                    <i className="icofont-quote-left"></i>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>

                <div className="map-box"><img src={require("../../assets/img/map.png")} alt="feedback" /></div>
            </section>
        );
    }
}
 
export default Feedback;