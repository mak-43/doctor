import React from 'react';
import Footer from '../Shared/Footer';
import Appointment from './Appointment';
import Banner from './Banner';
import Contact from './Contact';
import Exceptional from './Exceptional';
import Info from './Info';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className=''>
            <Banner/>
            <Info/>
            <Services/>
            <Exceptional/> 
            <Appointment/>
            <Testimonial/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;