

const Faq = () => {
    return (
        <div className=" bg-slate-50  ">
            <p className="text-xl md:text-3xl lg:text-5xl font-bold text-center py-5"><span className="text-blue-500">F</span>requently <span className="text-blue-500">A</span>sked <span className="text-blue-500">Q</span>uestions </p>

            <div className="flex flex-col md:flex-row justify-center items-center">
                {/* about the social event  */}

                <img className=" w-[50%]" src="https://i.postimg.cc/SRKpQDZ1/FAQs-rafiki.png" alt="faq image" />



                <div className=" my-5">

                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                        How long will it take to repair my computer?
                           
                        </div>
                        <div className="collapse-content">
                            <p className="text-blue-700">The repair time depends on the issue is complexity. We aim to provide a time estimate after diagnosing your computer.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                         How do I schedule a computer repair service?
                        </div>
                        <div className="collapse-content">
                            <p className="text-blue-700">You can schedule a computer repair service by calling our hotline or filling out the online booking form on our website.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                        Do you offer on-site repair services?
                        </div>
                        <div className="collapse-content">
                            <p className="text-blue-700">Yes, we offer both on-site and remote repair services for your convenience.</p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Faq;