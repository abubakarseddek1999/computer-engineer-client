import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import UseServices from "../../hooks/UseServices";
import Swal from "sweetalert";



const CheckOut = () => {
    const service = useLoaderData();
    const services = UseServices();

    const { id } = useParams()
    console.log(id);
    const serviceItem = services.find(item => item._id === id)
    console.log(serviceItem);

    console.log(service);
    const { _id, title, } = service;
    const { user } = useContext(AuthContext)
    console.log(user);
    const price= serviceItem?.price;
  


    const handleBookService = e => {
        e.preventDefault();
        const form = e.target;
        const date = form.date.value;
        const serviceImage = form.serviceImage.value;
        const userAddress = form.userAddress.value;
        const serviceName = form.serviceName.value;
        const email = user?.email;

        const booking = {
            serviceName: serviceName,
            userAddress,
            email,
            date,
            serviceImage,
            service: title,
            service_id: _id,
            price: price
        }
        console.log(booking);


        fetch('https://computer-engineer-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal('services Purchase success')
                }
            })

    }



    return (
        <div className="border p-5 m-5">
            <h2 className="text-center font-bold">Book Service: {title || serviceItem?.title} </h2>
            <form onSubmit={handleBookService}>

                <div className="m-5 md:flex gap-5  justify-center">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text font-bold">Service Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="serviceName" defaultValue={serviceItem?.title} className="input input-bordered w-full" readOnly />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold"> Date</span>
                        </label>
                        <label className="input-group">

                            <input type="date" name="date" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="m-5 md:flex gap-5 justify-center">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text font-bold">User Email</span>
                        </label>
                        <label className="input-group">

                            <input type="email" name="email" defaultValue={user?.email} className="input input-bordered w-full" readOnly/>
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold"> Service provider email</span>
                        </label>
                        <label className="input-group">

                            <input type="email" name="provider email" defaultValue={'......@gmail.com'} className="input input-bordered w-full" readOnly />
                        </label>
                    </div>
                </div>
                <div className="m-5 md:flex gap-5 justify-center">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text font-bold">User Address</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="userAddress" placeholder="user address" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Price</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="price" defaultValue={serviceItem?.price +'$'} className="input input-bordered w-full" readOnly />
                        </label>
                    </div> 
                </div>

                <div className="m-5 md:flex gap-5 justify-center">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-bold"> Service image</span>
                        </label>
                        <label className="input-group w-full">

                            <input type="text" name="serviceImage" defaultValue={serviceItem?.img} className="input input-bordered w-full flex-1" readOnly />
                        </label>
                    </div>

                </div>


                <div className="m-5  gap-5 justify-center mb-5">

                    <input type="submit" value="Purchase" className="btn text-white btn-block bg-[#3065a2]" />

                </div>

            </form>

        </div>
    );
};

export default CheckOut;