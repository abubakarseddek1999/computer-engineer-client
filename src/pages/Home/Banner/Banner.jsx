
// import img4 from '../../../assets/images/banner/4.jpg';
const Banner = () => {
    return (
        <div className="carousel w-full  h-[600px]">

            <div id="slide1" className="carousel-item  relative w-full">
                <img src="https://i.postimg.cc/dV6gD23Y/14727a93d1f9b33211a72c609f9323e8.jpg" className="w-full rounded-xl" />

                <div className="absolute rounded-xl h-full left-0 top-0  flex items-center  gap-5  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">

                    <div className="space-y-7 pl-12 w-1/2 ">

                        <h2 className='text-6xl text-white'>Computer Repair Service</h2>

                        <p className='text-white'> There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

                        <div className=' flex gap-5'>
                            <button className="btn btn-active bg-sky-800">More Detail</button>

                        </div>
                    </div>

                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.postimg.cc/442PSW0q/360-F-254808568-fj6iu-Mwwzlo-SZYKbh-DPSh-Wz-SK6-Ge-Ej-Xj.jpg" className="w-full rounded-xl" />
                <div className="absolute rounded-xl h-full left-0 top-0  flex items-center  gap-5  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">

                    <div className="space-y-7 pl-12 w-1/2 ">

                        <h2 className='text-6xl text-white'>Computer Repair Service</h2>

                        <p className='text-white'> There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

                        <div className=' flex gap-5'>
                            <button className="btn btn-active bg-sky-800">More Detail</button>

                        </div>
                    </div>

                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.postimg.cc/RV9tGKSy/240-F-487587526-VK1no-YWZZDSr-Bpmc6d-ALbxvec-Ji3-ZTz-U.jpg" className="w-full rounded-xl" />
                <div className="absolute rounded-xl h-full left-0 top-0  flex items-center  gap-5  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">

                    <div className="space-y-7 pl-12 w-1/2 ">

                        <h2 className='text-6xl text-white'>Computer Repair Service</h2>

                        <p className='text-white'> There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

                        <div className=' flex gap-5'>
                            <button className="btn btn-active bg-sky-800">More Detail</button>

                        </div>
                    </div>

                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.postimg.cc/7hqL113N/240-F-71186578-Qlne4-Du0-Jd-Cp2-WYIo-Cmfh-Dd9s0lq-WQym.jpg" className="w-full rounded-xl" />
                <div className="absolute rounded-xl h-full left-0 top-0  flex items-center  gap-5  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">

                    <div className="space-y-7 pl-12 w-1/2 ">

                        <h2 className='text-6xl text-white'>Computer Repair Service</h2>

                        <p className='text-white'> There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

                        <div className=' flex gap-5'>
                            <button className="btn btn-active bg-sky-800">More Detail</button>

                        </div>
                    </div>

                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;