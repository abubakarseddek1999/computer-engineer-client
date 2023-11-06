/* eslint-disable react/prop-types */

// import { Link } from "react-router-dom";

const AllServiceCard = ({ service }) => {
    const { img, _id, title, price, service_provider, description } = service;
    return (

        <div className="card w-96 bg-base-100 shadow-xl">

            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" placeholder='image' className="rounded-xl" />
            </figure>

            <div className="p-5">
                <h3 className="text-lg font-bold mt-2">{title}</h3>
                <p className="text-green-600 font-semibold text-lg mt-2">${price}</p>
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
                    <button className="btn btn-block"> Details</button>
                </div>

            </div>
        </div>



    );
};

export default AllServiceCard;