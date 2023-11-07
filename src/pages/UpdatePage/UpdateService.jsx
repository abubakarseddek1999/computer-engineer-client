import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import { useParams } from "react-router-dom";



const UpdateService = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams()
    console.log(id);
    const [services, setServices] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const serviceItem = services.find(item => item._id === id)

    

    const handleUpdateProduct = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const price = form.price.value;
        const description = form.description.value;
        const image = form.providerImage.value;
        const service_area = form.area.value;
        const name = form.providerName.value;


        const img = form.serviceImage.value;
        const newProduct = { title, price, description, img, service_provider: { name, image, service_area } }
        console.log(newProduct);

        // send data to the server
        fetch(`http://localhost:5000/services/${id}`, {
            method:'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(newProduct)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: 'success!',
                    text: 'Product Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })

            }
        })
  

    }
    return (
        <div className="p-10 border m-10 bg-[#68809c] rounded-lg">

            <h3 className="text-center text-xl md:text-2xl font-bold text-white ">Update product</h3>

            <form onSubmit={handleUpdateProduct}>

                <div className="m-5 md:flex gap-5 justify-center">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text font-bold">service Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="title" defaultValue={serviceItem?.title} className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Price</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="price" defaultValue={serviceItem?.price} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="m-5 md:flex gap-5 justify-center">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text font-bold">Provider Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="providerName" defaultValue={serviceItem?.service_provider?.name} className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold"> service Area</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="area" defaultValue={serviceItem?.service_provider?.service_area} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="m-5 md:flex gap-5 justify-center">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold"> Description</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="description" defaultValue={serviceItem?.description} className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold"> service image URL</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="serviceImage" defaultValue={serviceItem?.img} className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                <div className="m-5 md:flex gap-5 justify-center">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-bold"> Provider image URL</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="providerImage" defaultValue={user?.photoURL
                            } className="input input-bordered w-full" readOnly />
                        </label>
                    </div>

                </div>

                <div className="m-5  gap-5 justify-center mb-5">
                    <input type="submit" value="Update Service" className="text-white btn btn-block hover:text-black bg-[#3065a2]" />
                </div>

            </form>
        </div>

    );
};

export default UpdateService;