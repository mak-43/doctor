import React from 'react';

const Service = ({ service ,setTreatment}) => {
    const {name,slots } = service
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body text-center">
                <h2 class="text-xl font-bold text-secondary">{name}</h2>
                <p>
                    {
                        slots.length
                        ?
                        <span>{slots[0]}</span>
                        :
                        <span className='text-red-500'>Try another date</span>
                    }
                </p>
                <p>{slots.length} {slots.length>1? 'Spaces':'Space'} available </p>
                <div class="card-actions justify-center">
                   
                    <label  disabled={slots.length===0} onClick={()=>setTreatment(service)} for="booking-modal" class="btn btn-sm btn-primary text-white">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;