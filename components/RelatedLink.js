import Image from 'next/image';

export default function RelatedLink({ link, image, newTab }) {
  return (<>
    
    <a href={ link.url } target={ newTab ? '_blank' : '' }>
      <div className="group h-18 rounded-lg flex bg-gray-700 shadow-md cursor-pointer 
                      hover:shadow-lg hover:bg-gray-600 hover:shadow-lg
                      transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:z-100">
        <div className="flex flex-col items-center justify-center overflow-hidden">
          <div className="relative max-w-6xl">
            <img
              src={ image.src }
              className="object-cover rounded-lg"
            />
            <div className="absolute p-4 inset-0 flex flex-col justify-end bg-gradient-to-b from-transparent to-gray-900 backdrop backdrop-blur-5 text-white
                            transition duration-500 ease-in-out transform">
              <h1 className="font-bold text-4xl">{ link.pretty }</h1>
            </div>
          </div>
        </div>
      </div>
    </a>
  </>)
}