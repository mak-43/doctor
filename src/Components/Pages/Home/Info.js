import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../Assets/icons/clock.svg'
import location from '../../Assets/icons/marker.svg'
import phone from '../../Assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 '>
            
            <InfoCard cartTitle='Opening hour' bgClass='bg-gradient-to-r from-secondary to-primary' img={clock} />
            <InfoCard cartTitle='Our location' bgClass='bg-neutral' img={location} />
            <InfoCard cartTitle='Contact us' bgClass='bg-gradient-to-r from-secondary to-primary' img={phone} />
        </div>
    );
};

export default Info;