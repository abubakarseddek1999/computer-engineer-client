// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UseServices from "../../../hooks/UseServices";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const services = UseServices();

    // const [services, setServices] = useState([]);


    // useEffect(()=>{
    //     fetch('https://computer-engineer-server.vercel.app/services')
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
            <div className="flex justify-center items-center my-10">
                <Link to='/allservices'> <button className="btn hover:text-black bg-[#3065a2] text-white shadow-xl"> SHOW ALL SERVICE</button></Link>
            </div>

        </div>
    );
};

export default Services;