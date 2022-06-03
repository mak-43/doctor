import React from 'react';

const ReviewCard = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">

                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde saepe ipsa placeat molestias consequuntur magnam?</p>
                <div className='flex items-center'>
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-2">
                            <img src={review.img} />
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl'>{review.name}</h4>
                        <h4>{review.location}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;