import { AiOutlineArrowRight } from "react-icons/ai";

export default function Project({ image, logo, title, link, description, children }) { // only children are icons
  return (
    <div>
      {/* overflow-hidden */}
      <div className="rounded rounded-lg bg-gray-800 shadow max-w-xs my-3">
          <img src={image.src} className="w-full rounded rounded-t-lg" />
          <div className="flex justify-start items-end -ml-2 -mt-6">
            <img src={logo.src} className="w-16 bg-gray-700 rounded-full" />
            <a className="pl-2 pb-1 text-sm text-blue-400 hover:text-blue-500" href={link.url}>
              { link.pretty }
            </a>
          </div>
        <div className="text-left px-6">
          <div>
            <h3 className="text-white text-2xl font-semibold">
              { title }
            </h3>
            <p className="text-left font-sans font-light text-grey-dark">
              { description }
            </p>
          </div>
          <p className="text-white text-right pb-1">
            <a className="cursor-pointer text-blue-400 hover:text-blue-500">
              Learn more
              <AiOutlineArrowRight style={{ display: 'inline' }} />
            </a>
            
          </p>
        </div>
        {/* icons */}
        { children }
      </div>

      {/* {image && 
        <img
          src={image.src}
          className="rounded-t-lg w-96" 
      />}
      <div className="py-8 px-10">
        <h3 className="text-center text-white text-2xl font-semibold">{title}</h3>
        <div className="flex flex-col items-center text-white">
          {children}
        </div>
      </div> */}
    </div>
  )
}