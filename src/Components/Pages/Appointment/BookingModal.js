import React from 'react';
import { format } from 'date-fns';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
const BookingModal = ({treatment,date,setTreatment}) => {
    const {_id,name,slots}=treatment
    const handleBooking=e=>{
        e.preventDefault()
        const book={
            date:e.target.date.value,
            slot:e.target.slot.value,
            name:e.target.date.value,
            email:e.target.email.value,
            phone:e.target.phone.value
        }
       // const slot=e.target.slot.value
        console.log(book)
        fetch('http://localhost:4000/booking',{
            method:'post',
            body:JSON.stringify(book)

        })
        .then(res=>res.json())
        .then(data=>{
            toast('Booked')
            console.log(data)
        })
        
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-secondary">Booking for : {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-2 justify-items-center mt-2'>
                        <input type="text" name='date' disabled value={format(date,'PP')}class="input input-bordered w-full max-w-xs" />
                        <select name='slot' class="input input-bordered w-full max-w-xs">
                           {
                               slots.map(slot=><option value={slot}>{slot} </option>)
                           }
                        </select>

                        <input type="text" name='name' placeholder="Name" class="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' placeholder="Email" class="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value='submit' class="btn w-full max-w-xs" />
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default BookingModal;