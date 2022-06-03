import React, { Children } from 'react';
import Primary from '../Shared/Primary';
import pic from '../../Assets/treatment.png'

const Exceptional = () => {
    return (
        <div class="hero  ">
            <div class="hero-content flex-col lg:flex-row">
                <img src={pic}class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">Box Office News!</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <Primary >Order</Primary>
                </div>
            </div>
        </div>
    );
};

export default Exceptional;