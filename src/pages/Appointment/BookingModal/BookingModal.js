import React, { useContext } from 'react';
import { format } from 'date-fns';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';


const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
    const { name: treatmentName, slots } = treatment; // treatment is appointment options just different name
    const date = format(selectedDate, 'PP');
    const { user } = useContext(AuthContext);



    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const slot = form.slot.value;
        const phone = form.phone.value;

        const booking = {
            patient: name,
            appointmentDate: date,
            treatment: treatmentName,
            slot: slot,
            email: email,
            phone: phone
        }

        // TODO:
        // send data to the server
        // and once data is saved then close the modal
        // and display success toast

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setTreatment(null);
                    toast.success('Booking Confirmed');
                    refetch();
                }
                else {
                    toast.error(data.message);
                }

            })


    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-10">{treatmentName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-6'>
                        <input type="text" disabled value={format(selectedDate, 'PP')} className="input w-full" />
                        <select name='slot' className="select select-bordered w-full">

                            {
                                slots.map((slot, i) => <option
                                    key={i}
                                    value={slot}
                                >{slot}</option>)
                            }
                        </select>
                        <input type="text" defaultValue={user?.displayName} disabled name='name' placeholder="Full Name" className="input input-bordered w-full" />
                        <input type="text" defaultValue={user?.email} disabled name='email' placeholder="Email" className="input input-bordered w-full" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full" />
                        <input type="submit" value="Submit" className='w-full btn' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;