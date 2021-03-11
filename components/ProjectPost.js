import Head from 'next/head';
import Link from 'next/link';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { HiExternalLink } from "react-icons/hi";


export default function ProjectPost({ hero, title, time, link, children }) {
  return (<>
    <Head>
      <title>Projects | { title.page }</title>
    </Head>
    <div className="mx-auto">

      <div className="flex flex-col items-center justify-center overflow-hidden mb-2">
        <div className="relative max-w-6xl">
          <img
            src={ hero.src }
            className="object-cover rounded-b-xl"
          />
          <div className="absolute p-4 inset-0 flex flex-col justify-end bg-gradient-to-b from-transparent to-gray-900 backdrop backdrop-blur-5 text-white
                          transition duration-500 ease-in-out transform hover:opacity-20">
            <h1 className="font-bold text-4xl">{ title.main }</h1>
            <span className="opacity-70">{ time.start } {' '}-{' '} { time.end }</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center pb-28">
        <div className="max-w-3xl p-2 text-left">

          <div className="pb-2 w-full flex flex-row justify-between">
            <Link href="/">
              <a className="text-blue-400 hover:text-blue-500">
                <AiOutlineArrowLeft style={{ display: 'inline-flex', marginInline: '0.3rem', marginBottom: '0.1rem' }} />
                Back to home
              </a>
            </Link>
            <span className="text-right">

              { link.url ? (
              <Link href={ link.url }>
                <a className="text-blue-400 hover:text-blue-500" target="_blank">
                  { link.pretty }
                  <HiExternalLink style={{ display: 'inline-flex', marginInline: '0.3rem', marginBottom: '0.1rem' }} />
                </a>
              </Link>
              ) : (
                <span className="text-gray-400 cursor-not-allowed	">
                  { link.pretty }
                </span>
              )
              }

            </span>
          </div>

        <h2 className="text-2xl font-semibold mt-2 mb-4 text-white">{ title.article }</h2>
          <div className="text-gray-100">
            { children }
          </div>
        </div>
      </div>

    </div>
  </>)
}