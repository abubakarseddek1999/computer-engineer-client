/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    // console.log(service);
    const {img,_id, title, price } = service;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" placeholder='image' className="rounded-xl" />
            </figure>

            <div className="card-body  ">

                <h2 className="card-title font-bold">{title}</h2>
                <p className="text-orange-500">Price: ${price}</p>

                <div className="flex justify-between">
                    <Link to ={`checkout/${_id}`} > <button className='btn text-white bg-[#FF3811]'>Book now</button></Link>
                    <button className="btn text-orange-500 font-bold ">arrow icon</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
