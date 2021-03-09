import { AiOutlineArrowRight } from "react-icons/ai";
import { HiExternalLink } from "react-icons/hi";
import Link from "next/link";

export default function Project({ image, logo, post, title, link, description, children }) { // only children are icons
  return (
    <>
      {/* overflow-hidden */}
      <div className="rounded rounded-lg bg-gray-800 shadow max-w-xs my-3 pb-1">
          <img src={image.src} className="w-full rounded rounded-t-lg" />
          <div className="flex justify-start items-end -ml-2 -mt-6">
            <div className="w-16 bg-gray-700 rounded-full p-1">
              <img src={logo.src} className="rounded-full" />
            </div>
            { link.url ? (
            <a className="pl-2 pb-1 text-sm text-blue-400 hover:text-blue-500" href={link.url} target="_blank">
              { link.pretty }
              <HiExternalLink style={{ display: 'inline-flex', marginInline: '0.3rem', marginBottom: '0.1rem' }} />
            </a>
            ) : (
              <span className="pl-2 pb-1 text-sm text-gray-400 cursor-not-allowed	">
                { link.pretty }
              </span>
            )
            }
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
          <p className="text-right pb-1">
            <Link href={ post.link }>
              <a className="text-blue-400 hover:text-blue-500">
                Learn more
                <AiOutlineArrowRight style={{ display: 'inline-flex', marginInline: '0.3rem', marginBottom: '0.1rem' }} />
              </a>
            </Link>
          </p>
        </div>
        {/* icons */}
        { children }
      </div>
    </>
  )
}