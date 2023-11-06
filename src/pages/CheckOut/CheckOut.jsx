import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";



const CheckOut = () => {
    const service = useLoaderData();
    const { _id, title, price,img } = service;
    const { user } = useContext(AuthContext)
    console.log(user);


    const handleBookService = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;

        const booking = {
            customerName: name,
            email,
            date,
            img,
            service: title,
            service_id: _id,
            price: price
        }
        console.log(booking);


        fetch('http://localhost:5000/bookings',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                alert('services book success')
            }
        })

    }



    return (
        <div className="border p-5 m-5">
            <h2 className="text-center font-bold">Book Service: {title} </h2>
            <form onSubmit={handleBookService}>

                <div className="m-5 md:flex gap-5  justify-center">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text font-bold"> Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="name" defaultValue={user?.displayName} className="input input-bordered w-full" />
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
                            <span className="label-text font-bold"> Email</span>
                        </label>
                        <label className="input-group">

                            <input type="email" name="email" defaultValue={user?.email} className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold"> Due amount</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="taste" defaultValue={'$' + price} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>


                <div className="m-5  gap-5 justify-center mb-5">

                    <input type="submit" value="Order Confirm" className="btn text-white btn-block bg-[#ff3911ca]" />

                </div>

            </form>

        </div>
    );
};

export default CheckOut;