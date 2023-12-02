import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const BookAppointment = () => {
    const [name, setName] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [existingBookings, setExistingBookings] = useState([]);
    const [error, setError] = useState(null);

    const handleBooking = () => {
        if (!name || !selectedDate || !selectedTime) {
            setError('Please fill in all fields.');
            return;
        }
        const newBooking = `${selectedDate.toDateString()} at ${selectedTime.toLocaleTimeString()} - ${name}`;
        setExistingBookings((prevBookings) => [...prevBookings, newBooking]);
        // Clear the form fields
        setName('');
        setSelectedDate(null);
        setSelectedTime(null);
        setError(null);
    };

    return (
        <div className="booking-container">
            {/* Page title */}
            <div className='text-light'>
                <h1>Book Appointment</h1>
            </div>
            <div className="booking-content">
                {/* Form */}
                <form>
                    {/* Name */}
                    <label>
                        Name&nbsp;
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                    <br />
                    {/* Date */}
                    <label>
                        Date&nbsp;
                        <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        dateFormat="MMMM d, yyyy"
                        placeholderText="Select a date"
                        />
                    </label>
                    <br />
                    {/* Time */}
                    <label>
                        Time&nbsp;
                        <DatePicker
                        selected={selectedTime}
                        onChange={(date) => setSelectedTime(date)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                        placeholderText="Select a time"
                        />
                    </label>
                    <br />
                    {/* Book button */}
                    <div className="d-flex justify-content-center align-items-center">
                        <button type="button" onClick={handleBooking} className="form-button">
                            Book Appointment
                        </button>
                    </div>
                </form>
                {/* Error message */}
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <hr />
                {/* My Appointments */}
                <h2>Existing Bookings</h2>
                <ul>
                {
                    existingBookings?.map((booking, index) => (
                        <li key={index}>{booking}</li>
                    ))
                }
                </ul>
            </div>
        </div>
    );
};

export default BookAppointment;