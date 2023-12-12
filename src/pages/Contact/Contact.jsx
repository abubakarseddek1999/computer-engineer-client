import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import swal from "sweetalert";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_y9ie19r', 'template_5to78dm', form.current, 'LTu1g8i9IIhfTU9qv')
            .then((result) => {
                console.log(result.text);
                swal('success')
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div id="contact" className="my-20">
            <h2 className="text-2xl md:text-3xl font-bold text-center my-10">Contact me</h2>
            <div className="flex flex-col md:flex-row justify-center gap-10">
                <div className=" text-center">
                    <div className="text-3xl text-pink-600 flex justify-center"><IoCall /></div>
                    <p className="text-2xl font-bold">Call</p>
                    +8801728306504

                </div>

                <div className=" text-center">
                    <div className="text-3xl flex justify-center text-pink-600"><MdEmail /></div>
                    <p className="text-2xl font-bold">Email</p>
                    <p>abubakarseddek1999@gmail.com</p>

                </div>
                <div className=" text-center">
                    <div className="text-3xl text-center text-pink-600 flex justify-center"> <FaLocationDot /></div>
                    <p className="text-2xl font-bold">Location</p>
                    <p>Brahmanbaria,Bangladesh</p>

                </div>
            </div>

            <div className="border border-fuchsia-500  p-5 m-8 rounded-xl bg-slate-700 ">
                <form ref={form} className="card-body" onSubmit={sendEmail}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-white">Name</span>
                        </label>
                        <input type="text" placeholder="Your name" name="from_name" className="input border input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-white">Email</span>
                        </label>
                        <input type="email" placeholder="Your email" name="from_email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-white">Message</span>
                        </label>
                        <textarea className="border rounded" name="message" />


                        <input className="btn mt-5 uppercase font-bold text-xl" type="submit" value="Send" />
                    </div>

                    {/* <label>Name</label> 
                    <input type="text" name="from_name" /> */}

                    {/* <label>Email</label>
                    <input type="email" name="from_email" /> */}

                    {/* <label>Message</label>
                    <textarea name="message" />

                    <input type="submit" value="Send" /> */}
                </form>
            </div>
        </div>
    );
};

export default Contact;