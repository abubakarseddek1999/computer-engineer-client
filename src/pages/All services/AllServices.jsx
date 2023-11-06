import UseServices from "../../hooks/UseServices";
import AllServiceCard from "./allServiceCard";


const AllServices = () => {
    const services = UseServices();
    return (
        <div className="my-5">
            <div className="text-center space-y-2 ">
                <h2 className="text-xl md:text-2xl font-bold">Our All Service  </h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services?.map((service) => <AllServiceCard key={service._id} service={service}> </AllServiceCard>)
                }
            </div>

        </div>
    );
};

export default AllServices;