

const WorkShop = () => {
    return (
        <div className="my-24">
            <div>
                <h1 className=" font-bold text-xl md:text-3xl  text-center"> Our Workshop</h1>
                <h4 className="text-xl text-center my-5">Are computer problems causing you frustration and inconvenience? <br /> Join us for an empowering Computer Repair Workshop <br /> where you can take control of your tech issues!  </h4>
            </div>
            
            <div>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
                    <div className="w-full   p-2">
                        <div className="bg-gray-100 p-4 rounded-lg">
                           <img src="https://i.postimg.cc/y86nW22f/gallery-2.webp" alt="" />
                        </div>
                    </div>
                    <div className="w-full   p-2">
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <img src="https://i.postimg.cc/Dz8gPLvL/gallery-3.webp" alt="workshop photo" />
                        </div>
                    </div>
                    <div className="w-full   p-2">
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <img src="https://i.postimg.cc/Wb8wRXt0/gallery-1.webp" alt="workshop photo" />
                        </div>
                    </div>
                    <div className="w-full   p-2">
                        <div className="bg-gray-100 p-4 rounded-lg">
                       <img src="https://i.postimg.cc/yNMFhGrC/gallery-6.webp" alt="workshop photo" />
                        </div>
                    </div>
                    <div className="w-full   p-2">
                        <div className="bg-gray-100 p-4 rounded-lg">
                            {/* <img src="photo5.jpg" alt="Photo 5" class="w-full h-auto"> */}
                            <img src="https://i.postimg.cc/7PMg7m3j/gallery-7.webp" alt="workshop photo" />
                        </div>
                    </div>
                    <div className="w-full   p-2">
                        <div className="bg-gray-100 p-4 rounded-lg">
                         <img src="https://i.postimg.cc/VLkbt1Lb/gallery-8.webp" alt="workshop photo" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WorkShop;