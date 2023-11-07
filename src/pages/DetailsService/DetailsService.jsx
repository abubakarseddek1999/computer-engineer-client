import { useParams } from "react-router-dom";
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
        <div>
             
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

            <div>
                <h2> Service name:{serviceItem?.title}</h2>
                <img src={serviceItem?.img} alt="" />
            </div>



        </div>
    );
};

export default DetailsService;