

const Contact = () => {
    return (
        <div className="flex rounded p-10 bg-blue-900">
            <div className="w-3/4">
                <h2 className="text-xl text-white text-center md:text-3xl lg:text-4xl font-bold">Do you have any question? <br /> Feel free to contact.</h2>

                <p className="text-center text-white my-5">Bring your valuable desktop, laptop, Macbook, tab or gaming pc. We will happy to serve our best to you.</p>

            </div>
            <div className=" flex justify-center items-center w-1/4">
                <button className="btn text-white font-bold hover:shadow-lg hover:bg-slate-300" style={{ background: 'linear-gradient(to right, #922d80, #0073e6)' }}>
                    CONTACT WITH US
                </button>
            </div>

        </div>
    );
};

export default Contact;