import React from 'react';
import quote from '../../Assets/icons/quote.svg'
import p1 from '../../Assets/people1.png'
import p2 from '../../Assets/people2.png'
import p3 from '../../Assets/people3.png'
import ReviewCard from './ReviewCard';
const Testimonial = () => {
    const reviews=[
        {
            _id:1,
            name:'Winson Herry',
            review:'',
            location:'usa',
            img:p1
        },
        {
            _id:2,
            name:'Winson Herry',
            review:'',
            location:'usa',
            img:p2
        },
        {
            _id:3,
            name:'Winson Herry',
            review:'',
            location:'usa',
            img:p3
        }
    ]

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
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                {
                    reviews.map(review=><ReviewCard
                    key={review._id} 
                    review={review}
                    ></ReviewCard>)
                }
            </div>
        </section>
    );
};

export default Testimonial;