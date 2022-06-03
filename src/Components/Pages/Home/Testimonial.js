import React from 'react';
import quote from '../../Assets/icons/quote.svg'
const Testimonial = () => {

    
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-primary font-bold'>Testimonials</h4>
                    <h2 className='text-3xl' >What our patients say </h2>
                </div>
                <div>
                    <img src={quote} className='lg:w-48 sm:w-24' alt="" />
                </div>
            </div>
            <div>

            </div>
        </section>
    );
};

export default Testimonial;