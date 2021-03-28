import '../styles/globals.css';
import Icon from '../components/Icons/Icon';

import { SiNetlify, SiReact, SiTailwindcss } from "react-icons/si";

function MyApp({ Component, pageProps }) {
  return (<>
    <div className="bg-black text-blue-400 flex flex-direction-row px-20 py-3">
      <p>Contact Me</p>
      <p className="hover:text-blue-500 cursor-pointer">Spencer.Speas@gmail.com</p>
    </div>
    <Component {...pageProps} />
    <div className="flex flex-col pt-10 pb-8" style={{ backgroundColor: "#090C13" }}>
      <div className="flex flex-col items-center text-center text-white">
        <p className="text-2xl font-semibold">This Site</p>
        <p className="text-sm">Built on</p>
        <div className="flex flex-row p-2">
          <div className="p-1">
            { Icon(SiReact, { href: "https://reactjs.org/", color: "#61DAFB", label: "React" }) }
          </div>
          <div className="p-1">
            { Icon(null, { href: "https://nextjs.org/",  label: "NextJS", src: "images/icons/next.svg" }) }
          </div>
          <div className="p-1">
            { Icon(SiTailwindcss, { href: "https://tailwindcss.com/", color: "#06B6D4", label: "TailwindCSS" }) }
          </div>
          <div className="p-1">
            { Icon(SiNetlify, { href: "https://www.netlify.com/", color: "#15847D", label: "Netlify" }) }
          </div>
        </div>
      </div>
      <div className="mt-2 flex flex-col text-center w-full">
        <p className="opacity-50 text-gray-400">© Spencer Speas 2020</p>
      </div>
    </div>
  </>)
}

export default MyApp
