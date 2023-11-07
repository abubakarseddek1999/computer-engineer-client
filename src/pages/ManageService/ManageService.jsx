import { useEffect, useState } from "react";
import UseServices from "../../hooks/UseServices";
import ManageCard from "./ManageCard";
import Swal from "sweetalert2";


const ManageService = () => {

    const allServices = UseServices();
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredServices, setFilteredServices] = useState([]);

    // Filter services based on the search input
    // const filteredServices = allServices.filter(service => {
    //     return service.title.toLowerCase().includes(searchTerm.toLowerCase());
    // });

    useEffect(() => {
        const updatedFilteredServices = allServices.filter(service => {
          return service.title.toLowerCase().includes(searchTerm.toLowerCase());
        });
    
        setFilteredServices(updatedFilteredServices);
      }, [searchTerm, allServices]);
   


    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/services/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your booking has been deleted.',
                                'success'
                            )
                            const remaining = filteredServices.filter(ser => ser._id !== _id);
                            setFilteredServices(remaining);
                        }
                    })
            }
        })
    }



    return (
        <div className="my-5">
            <div className="text-center space-y-2 ">
                <h2 className="text-xl md:text-2xl font-bold">Manage Service  </h2>
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
                    filteredServices?.map((service) => <ManageCard
                     key={service._id}
                     handleDelete={handleDelete}
                      service={service}> </ManageCard>)
                }
            </div>

        </div>
    );
};

export default ManageService;