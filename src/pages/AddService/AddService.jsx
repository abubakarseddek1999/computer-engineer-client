import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";



const AddService = () => {
    const { user } = useContext(AuthContext);

    const handleAddProduct = e => {
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
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Product Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                }
            })

    }
    return (
        <div className="p-10 border m-10 bg-stone-400 rounded-lg">

            <h3 className="text-center text-xl md:text-2xl font-bold ">Add New product</h3>

            <form onSubmit={handleAddProduct}>

                <div className="m-5 md:flex gap-5 justify-center">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text font-bold">service Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="title" placeholder="Service name" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Price</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="price" placeholder="Price " className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="m-5 md:flex gap-5 justify-center">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text font-bold">Provider Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="providerName" placeholder="Supplier name" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold"> service Area</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="area" placeholder="Service area" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="m-5 md:flex gap-5 justify-center">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold"> Description</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="description" placeholder="Description" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text font-bold"> Details</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                <div className="m-5 md:flex gap-5 justify-center">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold"> service image URL</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="serviceImage" placeholder="service image URL" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ">
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
                    <input type="submit" value="Add Service" className="btn btn-block bg-slate-200" />
                </div>

            </form>
        </div>

    );
};

export default AddService;