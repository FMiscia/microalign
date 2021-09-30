import React from "react"
import { Link } from "react-router-dom"

class Footer extends React.Component {
    render() {
        return (
            <footer className="repair-footer-area">
                {/* <section className="repair-subscribe-area">
                    <div className="container">
                        <div className="repair-subscribe-content">
                            <h2>Subscribe to our newsletter</h2>

                            <form className="newsletter-form" data-toggle="validator">
                                <div className="form-group">
                                    <input type="text" className="input-newsletter" placeholder="First Name" />
                                </div>

                                <div className="form-group">
                                    <input type="text" className="input-newsletter" placeholder="Last Name" />
                                </div>

                                <div className="form-group">
                                    <input 
                                        type="email" 
                                        className="input-newsletter" 
                                        placeholder="Email Address*" 
                                        name="EMAIL" 
                                        required ={true} 
                                        autoComplete="off" 
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary">Submit <i className="icofont-arrow-right"></i></button>
                                <div id="validator-newsletter" className="form-result"></div>
                            </form>
                        </div>
                    </div>
                </section> */}

                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <Link to="#">
                                        <img
                                            height={30}
                                            src={require("../assets/img/logo-white.png")}
                                            alt="core"
                                        />
                                    </Link>
                                </div>
                                <ul className="social-links">
                                    {/* <li>
                                        <Link to="#">
                                            <i className="icofont-facebook"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <i className="icofont-twitter"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <i className="icofont-instagram"></i>
                                        </Link>
                                    </li> */}
                                    <li>
                                        <a href="https://nl.linkedin.com/company/microalign">
                                            <i className="icofont-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Services</h3>

                                <ul className="services-list">
                                    <li>
                                        <Link to="#">Reproduction</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Agistment</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Hay For Sale</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Foaling Down</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Semen Freezing</Link>
                                    </li>
                                </ul>
                            </div>
                        </div> */}

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Contacts</h3>

                                <ul className="contact-list">
                                    <li>
                                        <span>Legal Address:</span> Groene Loper
                                        3, 5612AE, Eindhoven, NL
                                    </li>
                                    <li>
                                        <span>Visiting Address:</span>Het
                                        Eeuwsel 57, 5612 AZ, Eindhoven, NL
                                    </li>
                                    <li>
                                        <span>Delivery Address:</span>Het
                                        Eeuwsel 57, 5612 AZ, Eindhoven, NL
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Working Hours</h3>

                                <ul className="working-hours">
                                    <li>
                                        <span>Monday:</span> 8AM - 6PM
                                    </li>
                                    <li>
                                        <span>Tuesday:</span> 8AM - 6PM
                                    </li>
                                    <li>
                                        <span>Wednesday:</span> 8AM - 6PM
                                    </li>
                                    <li>
                                        <span>Thursday - Friday:</span> 8AM -
                                        6PM
                                    </li>
                                    <li>
                                        <span>Sunday:</span> Closed
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                    </div>
                </div>

                <div className="repair-copyright-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <p>
                                    Copyright @2021 MicroAlign. All rights
                                    reserved.
                                </p>
                            </div>

                            {/* <div className="col-lg-6 col-md-6 text-right">
                                <ul>
                                    <li><Link to="#">Terms & Conditions</Link></li>
                                    <li><Link to="#">Privacy Policy</Link></li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>

                <div className="map-box">
                    <img
                        src={require("../assets/img/footer-map.png")}
                        alt="footer"
                    />
                </div>
            </footer>
        )
    }
}

export default Footer
