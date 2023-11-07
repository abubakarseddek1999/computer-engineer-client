/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
    const { _id, serviceImage, customerName, date, email, serviceName, price, status } = booking;



    return (

        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn">
                    Delete
                </button>
            </th>
            <td>

                <div className="avatar">
                    <div className="rounded w-12 h-12">
                        {serviceImage ? <img src={serviceImage} alt="Avatar Tailwind CSS Component" /> : ""}
                    </div>
                </div>


            </td>
            <td>
                {serviceName}
            </td>
            <td>{date}</td>
            <td>${price}</td>
            <th>
                {
                    status === 'confirm' ? <span className="font-bold text-primary"> confirmed</span>:
                    <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>
                }
            </th>
        </tr>


    );
};

export default BookingRow;