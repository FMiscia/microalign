import React, { Component } from "react"
import OwlCarousel from "react-owl-carousel3"
import PropTypes from "prop-types"

class Team extends Component {
    render() {
        //Team loop start
        const teamData = this.props.teamsData.map((team, index) => (
            <div className="col-lg-12 col-md-12" key={index}>
                <div className="our-team">
                    <div className="pic">
                        <img src={team.image} alt="team" />
                        <ul className="social">
                            {team.linkedinLink && (
                                <li>
                                    <a href={team.linkedinLink}>
                                        <i className="icofont-linkedin"></i>
                                    </a>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="team-content">
                        <h3 className="title">{team.name}</h3>
                        <span className="post">{team.designation}</span>
                    </div>
                </div>
            </div>
        ))
        //Team loop END
        return (
            <React.Fragment>
                <section id="team" className="team-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <span>{this.props.sectionName}</span>
                            <h3>{this.props.sectionTitle}</h3>
                            <p>{this.props.sectionDescription}</p>
                        </div>
                        <div className="row">
                            <OwlCarousel
                                className="owl-theme team-slides"
                                loop={true}
                                autoplay={true}
                                margin={30}
                                nav={true}
                                mouseDrag={true}
                                autoplayHoverPause={true}
                                responsiveClass={true}
                                dots={false}
                                navText={[
                                    "<i class='icofont-curved-double-left'></i>",
                                    "<i class='icofont-curved-double-right'></i>",
                                ]}
                                responsive={{
                                    0: { items: 1 },
                                    768: {
                                        items: 2,
                                    },
                                    1024: {
                                        items: 3,
                                    },
                                    1200: {
                                        items: 4,
                                    },
                                }}
                            >
                                {teamData}
                            </OwlCarousel>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

//Props Types
Team.propTypes = {
    sectionName: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    servicesData: PropTypes.array,
}

//Default Props
Team.defaultProps = {
    sectionName: "Team",
    sectionTitle: "Our Team Members",
    sectionDescription: "",

    teamsData: [
        {
            linkedinLink:
                "https://nl.linkedin.com/in/simone-cardarelli-67536115a",
            name: "Simone Caldarelli",
            designation: "CEO and CO-FOUNDER",
            image: require("../assets/img/Simone.jfif"),
        },
        {
            linkedinLink: "https://it.linkedin.com/in/marco-fattori-831434a9",
            name: "Marco Fattori",
            designation: "Electronics – CO-FOUNDER",
            image: require("../assets/img/Marco.jfif"),
        },
        {
            linkedinLink:
                "https://nl.linkedin.com/in/nicola-calabretta-23142119",
            name: "Nicola Calabretta",
            designation: "Optical system – CO-FOUNDER",
            image: require("../assets/img/Nicola.png"),
        },
        {
            linkedinLink: "https://nl.linkedin.com/in/jaap-verheggen",
            name: "Jaap Verheggen",
            designation: "R&D specialist",
            image: require("../assets/img/Jaap.jfif"),
        },
        {
            linkedinLink: "https://nl.linkedin.com/in/dariolocascio",
            name: "Dario Lo Cascio",
            designation: "Business developer",
            image: require("../assets/img/Dario.jfif"),
        },
        {
            linkedinLink: "https://nl.linkedin.com/in/cees-luijendijk-3a8798",
            name: "Cees Luijendijk",
            designation: "Financial advisor and strategy developer",
            image: require("../assets/img/Cees.jfif"),
        },
    ],
}

export default Team
