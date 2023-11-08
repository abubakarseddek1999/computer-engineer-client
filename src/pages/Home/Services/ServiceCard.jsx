/* eslint-disable react/prop-types */
import { motion } from "framer-motion"
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    // console.log(service);
    const { img, _id, title, price, service_provider, description } = service;
    console.log(_id);

    return (
        // <div className="card w-96 bg-base-100 shadow-xl">

        //     <figure className="px-10 pt-10">
        //         <img src={img} alt="Shoes" placeholder='image' className="rounded-xl" />
        //     </figure>

        //     <div className="card-body  ">

        //         <h2 className="card-title font-bold">{title}</h2>
        //         <p className="text-blue-500">Price: ${price}</p>

        //         <div className="flex justify-between">
        //             <Link to ={`checkout/${_id}`} > <button className='btn hover:text-black text-white bg-[#3065a2]'>Book now</button></Link>
        //             <button className="btn text-blue-500 font-bold ">DETAILS</button>
        //         </div>
        //     </div>
        // </div>
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }} className="card w-96 bg-base-100 shadow-xl">

            <figure data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000" className="px-10 pt-10">
                <img src={img} alt="Shoes" placeholder='image' className="rounded-xl" />
            </figure>

            <div className="p-5">
                <h3 className="text-lg font-bold mt-2">{title}</h3>
                <p className="text-green-600 font-semibold text-lg mt-2">
                    $
                    <CountUp end={price}
                    duration={20}
                    />
                </p>
                <p className="text-gray-500 text-sm">{description}</p>
                <div className="flex items-center mt-2">
                    <img src={img} alt={title} className="w-8 h-8 rounded-full" />
                    <span className="ml-2 font-bold text-gray-600">{service_provider?.
                        name}</span>
                </div>
                <p className="text-gray-500 font-bold text-sm mt-2">{service_provider?.
                    service_area
                }</p>
                <div>
                    {/* <Link to ={`checkout/${_id}`}> <button className="btn btn-block bg-[#3065a2] text-white hover:text-black"> Book</button></Link> */}
                    <Link to={`details/${_id}`}> <button className="btn mt-2 btn-block bg-[#3065a2] text-white hover:text-black"> DETAILS</button></Link>
                </div>

            </div>
        </motion.div >
    );
};

export default ServiceCard;
