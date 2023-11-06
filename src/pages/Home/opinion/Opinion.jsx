

const Opinion = () => {
    return (
        <div className="m-24 shadow-sm ">
            <h2 className="text-xl text-center md:text-3xl lg:text-4xl font-bold">Customers Opinion</h2>
            
            <p className="text-center mt-5 mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet orci tortor, <br /> sed dignissim urna ullamcorper sit amet.</p>

            <div className="flex flex-col md:flex-row">
                <div className="flex-1">
                  

                    <img className="object-cover w-full" src="https://i.postimg.cc/1Xwv5HKh/wepik-export-20231105182803-IMs-I.png" alt="" />

                </div>

                <div className="flex flex-col justify-center items-center flex-1 p-5">
                    <h3 className="my-5 text-xl"> Always friendly, honest service. Wonderful repair service fron the professional people earned money. Comparable prices and good advice. I appreciate the ride to work to work the same day it broke down.</h3>

                    <div className="avatar">
                        <div className="w-24 rounded">
                            <img src="https://i.postimg.cc/HW4GkhyS/360-F-224869519-a-Rae-Lneq-ALf-PNBzg0xx-MZXghtv-BXkf-IA.jpg" />
                        </div>
                    </div>
                    
                    <p className="text-xl font-bold">BRANDON</p>
                    <p>CTO,FULCRUM DESIGN</p>

                </div>
            </div>

        </div>
    );
};

export default Opinion;