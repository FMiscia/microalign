import React from 'react';
//Components List
import NavBarHome from "../components/NavBarHome";
import Footer from "../components/Footer";
import HomeSlides from '../components/HomeSlides';
import RepairBoxes from '../components/RepairBoxes';
import About from '../components/About';
import Services from '../components/Services';
import Team from '../components/Team';
 
class HomeSeven extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render(){
        return (
            <React.Fragment>

                <NavBarHome pageName="home" />

                <HomeSlides />

                <RepairBoxes />

                <About />

                <Services />

                <Team />

                {/* <Gallery />

                <Feedback />

                <Pricing />

                <Partner />
                
                <Blog /> */}

                <Footer />
            </React.Fragment>
        );
    }
}
 
export default HomeSeven;