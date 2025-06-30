import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../../Services/Services';
import ClientLogosMarquee from '../ClientLogosMarquee/ClientLogosMarquee';
import Benefits from '../Benefits/Benefits';
import BeMerchart from '../BeMerchart/BeMerchart';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Services/>
            <ClientLogosMarquee/>
            <Benefits/>
            <BeMerchart/>
        </div>
    );
};

export default Home;