import React from 'react';
import CarouselBanner from '../CarouselBanner/CarouselBanner';
import CovidInfo from '../CovidInfo/CovidInfo';
import HomeServices from '../HomeServices/HomeServices';
import WelcomeShop from '../WelcomeShop/WelcomeShop';

const Home = () => {
    return (
        <div>
            <CarouselBanner></CarouselBanner>
            <WelcomeShop></WelcomeShop>
            <HomeServices></HomeServices>
            <CovidInfo></CovidInfo>
        </div>
    );
};

export default Home;