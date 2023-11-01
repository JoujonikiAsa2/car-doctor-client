import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Booking from "../Booking/Booking";
import axios from "axios";

const Bookings = () => {

    const { user } = useContext(AuthContext)

    const [bookings, setBookings] = useState([])

    const url = `http://localhost:5000/bookings?email=${user?.email}`
    useEffect(() => {

        axios.get(url, {withCredentials: true})
        .then(res => {
            setBookings(res.data);
        })
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setBookings(data))
    }, [url]);

    const handleDelete = (id) =>{
        fetch(`http://localhost:5000/bookings/${id}`,{
            method: "DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.deletedCount > 0)
            {
                alert("Deleted Successfully")
            }
            const newRemaining = bookings.filter(booking=> booking._id != id)
            setBookings(newRemaining)
        })
    }

    const handleBookingConfirm = (id) =>{
        fetch(`http://localhost:5000/bookings/${id}`,{
            method: "PATCH",
            headers: {"content-type":"application/json"},
            body: JSON.stringify({status: "confirm"})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount > 0)
            {
               const remaining = bookings.filter(booking=> booking._id != id)
               const updated = bookings.find(bookings=> bookings._id === id)
               updated.status = 'confirm'
               const newBookings = [updated, ...remaining];
               setBookings(newBookings)
            }
        })
    }

    // console.log(bookings)
    return (
        <div>
            <div className="py-12 md:py-20 lg:py-20">
                <div className=" w-[80vw] overflow-auto">
                    <table className="table">
                        {/* head */}
                        <tbody>
                            {
                                bookings.map(booking=> <Booking key={booking._id} booking={booking} handleDelete={handleDelete} handleBookingConfirm={handleBookingConfirm}></Booking>)
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default Bookings;