/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const AllServiceCard = ({service}) => {
    const {img,_id, title, price } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" placeholder='image' className="rounded-xl" />
            </figure>

            <div className="card-body  ">

                <h2 className="card-title font-bold">{title}</h2>
                <p className="text-blue-500">Price: ${price}</p>

                <div className="flex justify-between">
                    <Link to ={`checkout/${_id}`} > <button className='btn hover:text-black text-white bg-[#3065a2]'>Book now</button></Link>
                    <button className="btn text-blue-500 font-bold ">DETAILS</button>
                </div>
            </div>
        </div>
    );
};

export default AllServiceCard;