// import { useEffect, useState } from "react";
import UseServices from "../../../hooks/UseServices";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const services = UseServices();

    // const [services, setServices] = useState([]);


    // useEffect(()=>{
    //     fetch('http://localhost:5000/services')
    //     .then(res =>res.json())
    //     .then(data =>setServices(data))
    // },[])


    return (
        <div className="my-5">
            <div className="text-center space-y-2 ">
                <h2 className="text-xl md:text-2xl font-bold">Our Service  </h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="flex justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    {
                        services?.slice(0, 4).map((service) => <ServiceCard key={service._id} service={service}></ServiceCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Services;