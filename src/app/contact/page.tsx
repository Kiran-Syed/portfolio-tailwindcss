
import { Mail, Phone } from "lucide-react";



export default function Contact() {
    return (

        <div className="bg-sky-100 pt-[35px] pb-[40px]">
            <div className="flex justify-around mt-[70px] flex-col sm:flex-row gap-11">

                <div className="w-[80%] sm:w-[35%] mx-auto">

                    <h1 className="capitalize font-bold text-xl">drop me a message</h1>

                    <p className="bg-violet-300 p-6 mt-8 mb-8 rounded-xl italic md:font-semibold sm:text-sm text-[12px] md:text-base"> I'd love to hear from you! Whether you have a question, feedback, or just want to connect,
                        feel free to reach out. You can contact me via email, social media, or the form below. I aim to
                        respond to all inquiries as quickly as possible.Looking forward to connecting with you! .
                    </p>

                    <div className="flex md:gap-6 flex-col lg:flex-row">

                        <p className="flex font-semibold"><Phone className="mr-4 " /> : +92-1111 11111</p> <br />
                        <p className="flex  font-semibold"><Mail className="mr-4" /> 1234@gmail.com</p>

                    </div>
                </div>


                <div className="rounded w-[70%] sm:w-[35%] md:w-[27%] max-h-[67vh] bg-gradient-to-r from-red-300 via-pink-300 to-sky-300 flex flex-col justify-center mx-auto">

                    <form action="/" className="w-[95%] max-h-[auto] p-6 grid gap-y-2.5 mt-3">

                        <div >
                            <label htmlFor="name" className="mt-[10px] mb-[10px] font-semibold"> Name </label> <br />
                            <input type="text" name="username" placeholder=" Name" required className="p-[5px] w-full rounded-[8px] border-2 border-gray-500" />
                            <br />
                        </div>

                        <div>
                            <label htmlFor="email" className="font-semibold"> Email </label> <br />
                            <input type="text" name="email" placeholder=" Email" required className="p-[5px] w-full rounded-[8px]  border-2 border-gray-500" />
                        </div>

                        <div>
                            <p className="font-semibold"> Message </p>
                            <textarea name="messeage" id="message" placeholder=" Message" className=" p-2 w-full rounded-[8px] border-2 border-gray-500 h-[20vh]"></textarea>
                        </div>

                        <button className="w-[40%] bg-violet-200 text-black font-bold p-[8px] rounded-[6px] text-[10px] sm:text-xs mx-auto hover:bg-violet-300">Send Message</button>

                    </form>
                </div>
            </div>
        </div>
    )
}