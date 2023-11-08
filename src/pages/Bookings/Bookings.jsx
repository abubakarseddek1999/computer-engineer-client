import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";


const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const axiosSecure = UseAxiosSecure();

    // const url = `https://computer-engineer-server.vercel.app/bookings?email=${user?.email}`;
    const url = `/bookings?email=${user?.email}`;

    useEffect(() => {
        // fetch(url,{credentials:'include'})
        //     .then(res => res.json())
        //     .then(data => {
        //         setBookings(data)
        //     })
        axiosSecure.get(url)
        .then(res =>setBookings(res.data))

    }, [url,axiosSecure])

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://computer-engineer-server.vercel.app/bookings/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your booking has been deleted.',
                                'success'
                            )
                            const remaining = bookings.filter(cof => cof._id !== _id);
                            setBookings(remaining);
                        }
                    })
            }
        })
    }

    const handleBookingConfirm = id => {
    
        fetch(`https://computer-engineer-server.vercel.app/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount >0) {
                // update state 
                const remaining =bookings.filter(booking => booking.id !== id);
                const updated = bookings.find(booking => booking._id === id);
                updated.status = 'confirm'
                const newBookings =[updated, ...remaining];
                setBookings(newBookings);


                }
            })
    }

    return (
        <div className="border m-5 ">
            <h2 className="text-center my-5"> <span className=" font-bold">My Total Booking: </span>{bookings.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                              <button className="btn"> Delete Booking</button>
                            </th>
                            <th>Image</th>
                            <th>Service Name</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            bookings?.map(booking => <BookingRow 
                                booking={booking}
                                 handleDelete={handleDelete}
                                 handleBookingConfirm={handleBookingConfirm}
                                 key={bookings._id}></BookingRow>)
                        }

                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default Bookings;