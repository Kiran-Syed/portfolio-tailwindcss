

import { ArrowDownToLine } from "lucide-react";
import Image from "next/image"

export default function About() {
    return (
        <div className="min-h-screen flex flex-col ">
            <div className="w-[90%] flex sm:flex-row flex-col-reverse justify-between mx-auto mt-[14vh]">

                <div>
                    <Image src="/images/girls2.png" alt="cover" width="260" height="200" className="rounded-full mt-11 w-[58%] h-[43vh] mx-auto sm:w-[80%] sm:h-[50vh] md:h-[55vh] shadow-xl shadow-gray-500"></Image>
                </div>

                <div className="w-[80%] sm:w-[45%] mx-auto lg:mt-24">

                    <h1 className="font-bold text-xl uppercase text-gray-600 flex flex-row justify-center">About <span className="font-bold text-2xl uppercase text-fuchsia-700 font-mono ml-4"> Me </span></h1>

                    <p className="text-gray-500 font-bold font-sans mt-6 mb-6 text-center leading-6 md:leading-7 sm:text-sm md:text-base text-[12px]">

                        I am Passionate about coding, with a strong foundation in Html, Css Javascript, Typescript React and Next.js. Over the years,
                        My work is driven by curiosity and a constant desire to learn and evolve. I thrive in collaborative environments but am equally comfortable managing projects independently.

                    </p>


                      <div className="flex flex-row justify-center">
                    <button className=" border border-cyan-800 rounded-lg md:w-[30%] md:h-[35px] bg-cyan-700 text-white text-xs font-semibold hover:bg-cyan-600 flex items-center justify-center">Download CV<ArrowDownToLine className="w-[10%] h[20px] md:w-[13%] md:h-[25px] ml-2" /></button>
                    </div>
                </div>

                <div>

                    {/* <Image src="/images/girl.jpg" alt="cover" width="350" height="200" className="rounded-full h-[70vh] shadow-xl shadow-gray-500"></Image> */}

                </div>
            </div>
        </div>
    )
}