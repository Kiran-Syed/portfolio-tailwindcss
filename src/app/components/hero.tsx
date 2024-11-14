
import { Facebook, Flower, Github, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <main className="mt-20 sm:mt-24 md:mt-28">
      <div className="w-[90%] max-w-7xl flex justify-between mx-auto py-8 sm:flex-row flex-col gap-8">
        <div className="w-full sm:w-[50%] p-4">
          <h1 className="capitalize font-bold text-2xl md:text-3xl lg:text-4xl">
            Hi there!
          </h1>

          <div className="mt-4">
            <span className="font-bold text-xl md:text-2xl uppercase">
              i'm
              <span className="font-bold text-2xl md:text-3xl uppercase text-gray-600 ml-2">
                kiran
              </span>
              <span className="font-bold text-2xl md:text-3xl uppercase text-fuchsia-700 font-mono ml-2">
                shahid
                <Flower className="inline-block ml-2 w-6 h-6 md:w-8 md:h-8" />
              </span>
            </span>
          </div>

          <p className="text-gray-500 font-bold font-sans my-6 text-sm md:text-base leading-relaxed max-w-2xl">
            Fronted Web Developer Based in Pakistan Welcome to my portfolio! I'm
            a dedicated frontend web developer with a passion for crafting
            responsive, user-friendly websites. Combining creativity with
            technical expertise, I specialize in transforming ideas into
            engaging digital experiences.
          </p>

          <div className="flex gap-6 mb-8">
            <Linkedin className="w-10 h-10 md:w-12 md:h-12 bg-slate-300 p-2 rounded-full hover:bg-slate-400 hover:border hover:border-gray-500 transition-all" />
            <Github className="w-10 h-10 md:w-12 md:h-12 bg-slate-300 p-2 rounded-full hover:bg-slate-400 hover:border hover:border-gray-500 transition-all" />
            <Facebook className="w-10 h-10 md:w-12 md:h-12 bg-slate-300 p-2 rounded-full hover:bg-slate-400 hover:border hover:border-gray-500 transition-all" />
          </div>

          <button className="px-6 py-2 text-sm md:text-base font-semibold rounded-lg bg-gradient-to-r from-red-700 to-pink-300 text-white hover:bg-gradient-to-r hover:from-red-800 hover:to-pink-400 transition-all">
            Contact Me
          </button>
        </div>

        <div className="w-full sm:w-[50%] flex items-center justify-center">
          <Image
            src="/images/girl.jpg"
            alt="cover"
            width={500}
            height={500}
            className="rounded-full w-[280px] h-[280px] md:w-[400px] md:h-[400px] object-cover shadow-xl shadow-gray-500"
            priority
          />
        </div>
      </div>
    </main>
  );
}
