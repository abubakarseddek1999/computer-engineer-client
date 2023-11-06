import { useState } from "react";
import UseServices from "../../hooks/UseServices";
import AllServiceCard from "./allServiceCard";


const AllServices = () => {
    const allServices = UseServices();
    const [searchTerm, setSearchTerm] = useState('');

    // Filter services based on the search input
    const filteredServices = allServices.filter(service => {
        return service.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <div className="my-5">
            <div className="text-center space-y-2 ">
                <h2 className="text-xl md:text-2xl font-bold">Our All Service  </h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>

            {/* Search input */}
            <div className="text-center my-4">

                <div className="flex justify-center">
                    <div className="form-control ">
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="Search by service name"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="input w-96 input-bordered"
                            />
                            <button className="btn w-20 btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    filteredServices?.map((service) => <AllServiceCard key={service._id} service={service}> </AllServiceCard>)
                }
            </div>

        </div>
    );
};

export default AllServices;