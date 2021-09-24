import React from 'react';
import { Link } from 'react-router-dom';
import Lightbox from "react-image-lightbox";
import 'react-image-lightbox/style.css';
import mixitup from "mixitup";

const images = [
    require("../../assets/img/gallery-one.jpg"),
    require("../../assets/img/gallery-two.jpg"),
    require("../../assets/img/gallery-three.jpg"),
    require("../../assets/img/gallery-four.jpg"),
    require("../../assets/img/gallery-five.jpg"),
    require("../../assets/img/gallery-six.jpg")
];
 
class Gallery extends React.Component {

    state = {
        photoIndex: 0,
        isOpen: false
    };

    componentDidMount() {
        mixitup("#mix-wrapper", {
            animation: {
                effects: "fade rotateZ(0deg)",
                duration: 700
            },
            classNames: {
                block: "programs",
                elementFilter: "filter-btn",
            },
            selectors: {
                target: ".mix-target"
            }
        });
    }

    render(){
        const { photoIndex, isOpen } = this.state;
        return (
            <section id="gallery" className="gallery-area bg-fbf9f8">
                <div className="container">
                    <div className="section-title">
                        <span>Recent Projects</span>
                        <h3>Our work photo gallery</h3>
                        <p>We enjoy adapting our strategies to offer every client the best solutions that are at the forefront of the industry.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="shorting-menu gallery-shorting-menu">
                                <button className="filter" data-filter="all"><i className="icofont-wall"></i> All</button>
                                <button className="filter" data-filter=".laptop">Laptop</button>
                                <button className="filter" data-filter=".desktop">Desktop</button>
                                <button className="filter" data-filter=".smartphone">Smartphone</button>
                                <button className="filter" data-filter=".tablet">Tablet</button>
                                <button className="filter" data-filter=".hardware">Hardware</button>
                            </div>
                        </div>
                    </div>

                    <div className="shorting">
                        <div className="row" id="mix-wrapper">
                            <div className="col-lg-4 col-md-6 mix laptop mix-target">
                                <div className="single-gallery-item">
                                    <Link 
                                        to="#" 
                                        className="popup-btn"
                                        onClick={ e => {
                                            e.preventDefault();
                                            this.setState({ photoIndex: 0, isOpen: true })
                                        }}
                                    >
                                        <img src={images[0]} alt="work" />
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mix desktop mix-target">
                                <div className="single-gallery-item">
                                    <Link 
                                        to="#" 
                                        className="popup-btn"
                                        onClick={ e => {
                                            e.preventDefault();
                                            this.setState({ photoIndex: 1, isOpen: true })
                                        }}
                                    >
                                        <img src={images[1]} alt="work" />
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mix smartphone mix-target">
                                <div className="single-gallery-item">
                                    <Link 
                                        to="#" 
                                        className="popup-btn"
                                        onClick={ e => {
                                            e.preventDefault();
                                            this.setState({ photoIndex: 2, isOpen: true })
                                        }}
                                    >
                                        <img src={images[2]} alt="work" />
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mix tablet mix-target">
                                <div className="single-gallery-item">
                                    <Link 
                                        to="#" 
                                        className="popup-btn"
                                        onClick={ e => {
                                            e.preventDefault();
                                            this.setState({ photoIndex: 3, isOpen: true })
                                        }}
                                    >
                                        <img src={images[3]} alt="work" />
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mix hardware mix-target">
                                <div className="single-gallery-item">
                                    <Link 
                                        to="#" 
                                        className="popup-btn"
                                        onClick={ e => {
                                            e.preventDefault();
                                            this.setState({ photoIndex: 4, isOpen: true })
                                        }}
                                    >
                                        <img src={images[4]} alt="work" />
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mix smartphone mix-target">
                                <div className="single-gallery-item">
                                    <Link 
                                        to="#" 
                                        className="popup-btn"
                                        onClick={ e => {
                                            e.preventDefault();
                                            this.setState({ photoIndex: 5, isOpen: true })
                                        }}
                                    >
                                        <img src={images[5]} alt="work" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        imageTitle={photoIndex + 1 + "/" + images.length}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                        this.setState({
                            photoIndex: (photoIndex + images.length - 1) % images.length
                        })
                        }
                        onMoveNextRequest={() =>
                        this.setState({
                            photoIndex: (photoIndex + 1) % images.length
                        })
                        }
                    />
                )}
            </section>
        );
    }
}
 
export default Gallery;