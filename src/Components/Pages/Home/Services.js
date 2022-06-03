import React from 'react';
import fluoride from '../../Assets/fluoride.png'
import whitening from '../../Assets/whitening.png'
import cavity from '../../Assets/cavity.png'
import Service from './Service';
const Services = () => {
    const services=[
        {
            _id:1,
            name:'Fluoride Treatment',
            description:'',
            img:fluoride
        },
        {
            _id:2,
            name:'Whitening Teeth',
            description:'',
            img:whitening
        },
        {
            _id:3,
            name:'cavity Treatment',
            description:'',
            img:cavity
        },
    ]
    return (
        <div className='my-12'>
            <div className='text-center'>
                <h3 className='text-primary text-xl font-bold uppercase'>Our services</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4 px-5'>
                {
                    services.map(service=><Service
                    key={service._id}
                    service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;