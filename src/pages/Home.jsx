import React from 'react';
//Components List
import NavBarHome from "../components/NavBarHome";
import Footer from "../components/Footer";
import HomeSlides from '../components/HomeSlides';
import Boxes from '../components/Boxes';
import About from '../components/About';
import Services from '../components/Services';
import Team from '../components/Team';
import Blog from '../components/Blog';
import CookieConsent from "react-cookie-consent"

 
class HomeSeven extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render(){
        return (
            <React.Fragment>
                <NavBarHome pageName="home" />
                <HomeSlides />
                <Boxes />
                <About />
                <Services />
                <Team />
                <Blog />
                <Footer />
                <CookieConsent>
                    This website uses cookies to enhance the user experience.
                </CookieConsent>
            </React.Fragment>
        )
    }
}
 
export default HomeSeven;