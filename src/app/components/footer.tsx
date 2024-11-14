
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="bg-sky-900 flex p-4 justify-center">
        <Github className="bg-slate-200 rounded-full p-1 mr-2 w-5 h-5 sm:w-6 sm:h-6" />
        <Linkedin className="bg-slate-200 rounded-full p-1 w-5 h-5 sm:w-6 sm:h-6" />
        <p className="ml-6 font-semibold text-white text-xs sm:text-sm">
          © 2023 KIRAN SHAHID
        </p>
      </div>
    </footer>
  );
}
