import React from 'react';
import pic from '../../Assets/appointment.png'
import Primary from '../Shared/Primary';
const Contact = () => {
    return (
        <div className='py-5' style={{
            background:`url(${pic})`,
            backgroundSize:'cover'
        }}>
            <div className='text-center my-4'>
                <h4 className='text-2xl text-primary'>Contact us</h4>
                <h2 className='text-4xl text-white'>Stay connected with us</h2>
            </div>
            <div className='flex flex-col justify-center items-center gap-3'>
            <input type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" />
            <input type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" />
            <textarea type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" />
            <Primary>Submit</Primary>
            </div>
        </div>
    );
};

export default Contact;