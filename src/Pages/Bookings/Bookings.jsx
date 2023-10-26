import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Booking from "../Booking/Booking";

const Bookings = () => {

    const { user } = useContext(AuthContext)

    const [bookings, setBookings] = useState([])

    const url = `http://localhost:5000/bookings?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    // console.log(bookings)
    return (
        <div>
            <h2 className="text-5xl">My bookings: {bookings.length}</h2>
            <div>
                <div className="">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="flex items-center space-x-3">
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Use name</th>
                                <th className="w-44">Email</th>
                                <th>Price</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings.map(booking=> <Booking key={booking._id} booking={booking}></Booking>)
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default Bookings;