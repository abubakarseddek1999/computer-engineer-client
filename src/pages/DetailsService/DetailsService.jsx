import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";


const DetailsService = () => {
    const { id } = useParams()
    console.log(id);
    const [services, setServices] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const serviceItem = services.find(item => item._id === id)
    // console.log(serviceItem);


    return (
        <div className="p-5">

            <div>
                <h2 className="text-center font-bold text-2xl md:text-3xl">Service Provider Information</h2>
                <div className="avatar flex justify-center my-5">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={serviceItem?.service_provider?.image} />
                    </div>
                </div>
                <p className="text-center font-bold">{serviceItem?.service_provider?.
                    name}</p>
                <p className="text-center font-bold">{serviceItem?.service_provider?.service_area}</p>

            </div>

            <div className="p-5 rounded-xl border">
                <img className="rounded-xl" src={serviceItem?.img} alt="" />
                <div className="flex justify-between mt-5">
                    <h2 className="text-xl font-bold"> Service name: {serviceItem?.title}</h2>
                    <p className="text-xl font-bold">Price: ${serviceItem?.price}</p>
                </div>
                <p className="my-5 ">{serviceItem?.description}</p>
                <div className="flex items-center mt-2">
                    <img src={serviceItem?.img} alt={serviceItem?.title} className="w-8 h-8 rounded-full" />
                    <span className="ml-2 font-bold text-gray-600">{serviceItem?.service_provider?.
                        name}</span>
                </div>
                <Link to ={`/checkout/${serviceItem?._id}`}><button className="btn text-white my-5 hover:text-black btn-block bg-[#3065a2]">BOOK NOW</button></Link>
            </div>



        </div>
    );
};

export default DetailsService;