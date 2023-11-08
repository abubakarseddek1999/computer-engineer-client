import { useContext } from "react";
import UseServices from "../../hooks/UseServices";
// import AllServiceCard from "../All services/allServiceCard";
import { AuthContext } from "../../provider/AuthProvider";
import AllServiceCard from "../All services/allServiceCard";


const AllServices = () => {
    const { user } = useContext(AuthContext);

    const allServices = UseServices();
    // const [searchTerm, setSearchTerm] = useState('');

    // Filter services based on the search input
    // const filteredServices = allServices.filter(service => {
    //     return service.title.toLowerCase().includes(searchTerm.toLowerCase());
    // });
    // console.log(filteredServices);

    const myService = allServices.filter(item => item.email === user?.email)
    console.log(myService);

    return (
        <div className="my-5">
            <div className="text-center space-y-2 ">
                <h2 className="text-xl md:text-2xl font-bold">My Services  </h2>

            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    myService?.map((service) => <AllServiceCard key={service._id} service={service}> </AllServiceCard>)
                }
            </div>

        </div>
    );
};

export default AllServices;