import { AiOutlineArrowRight } from "react-icons/ai";

export default function Project({ image, logo, title, link, description, children }) { // only children are icons
  return (
    <>
      {/* overflow-hidden */}
      <div className="rounded rounded-lg bg-gray-800 shadow max-w-xs my-3">
          <img src={image.src} className="w-full rounded rounded-t-lg" />
          <div className="flex justify-start items-end -ml-2 -mt-6">
            <div className="w-16 bg-gray-700 rounded-full p-1">
              <img src={logo.src} className="rounded-full" />
            </div>
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
    </>
  )
}