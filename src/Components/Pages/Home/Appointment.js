import React from 'react';
import doctor from '../../Assets/doctor.png'
import bg from '../../Assets/appointment.png'
import Primary from '../Shared/Primary';

const Appointment = () => {
    return (
        <section style={{
            background:`url(${bg})`
        }} className="flex justify-center items-center my-28">
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-2'>
                <h3 className='text-xl text-primary'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an appointment Today</h2>
                <p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos delectus incidunt sunt dolore similique quibusdam facere repudiandae quos accusantium dicta quasi mollitia, fugiat commodi id quia officia laboriosam recusandae quisquam.</p>
                <Primary>get started</Primary>
            </div>
        </section>
    );
};

export default Appointment;