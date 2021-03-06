import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({date}) => {
    const [services,setServices]=useState([])
    const [treatment,setTreatment]=useState(null)
    useEffect(()=>{
        fetch('http://localhost:4000/service')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])

    return (
        <div>
           <h4 className='text-4xl text-secondary  text-center'> Available Appointments on {format(date,'PP')}</h4>
           <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3'>
               {
                   services.map(service=><Service
                   key={service._id}
                   service={service}
                   setTreatment={setTreatment}
                   ></Service>)
               }
           </div>
           {
               treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment}></BookingModal>
           }
        </div>
    );
};

export default AvailableAppointments;