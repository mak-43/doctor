import React, { useState } from 'react';
import chair from '../../Assets/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css'; 
import { format } from 'date-fns';

const AppointmentBanner = ({date,setDate}) => {
   
    return (
        <div class="hero min-h-screen ">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt='dentist'/>
                <div>
                 <DayPicker 
                 mode='single'
                 selected={date}
                 onSelect={setDate}
                 required
                 />;
                   <p>You have selected: {format(date,'PP')}</p>
                </div>
              
            </div>
           
        </div>
    );
};

export default AppointmentBanner;