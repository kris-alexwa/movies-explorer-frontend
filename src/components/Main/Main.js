import React from 'react';
import './Main.css';
import HeaderUnauth from '../Header/HeaderUnauth/HeaderUnauth';
import HeaderAuthUser from '../Header/HeaderAuthUser/HeaderAuthUser';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Footer from '../Footer/Footer';

function Main(props) {
    return (
        <>
            {props.loggedIn ? <HeaderAuthUser selectedMobileLink={'main'} selectedLink={'movies'} dark={true} classNameSelected={'header__links_main'}/> : <HeaderUnauth />}
            <main className="content">
                <Promo />
                <AboutProject />
                <Techs />
                <AboutMe />
                <Portfolio />
            </main>
            <Footer />
        </>
    )
}

export default Main;