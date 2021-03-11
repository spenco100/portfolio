import React from 'react'; 

export default function Tooltip ({ children, label }) {
  return (
    <>
      <div className="relative">
        <div className="group relative flex">
          <div className="flex justify-center">
            { children }
          </div>
          <div className="bg-black text-white text-center text-xs rounded-lg p-2 absolute z-10 bottom-full pointer-events-none mb-1
                          transform -translate-x-1/2 left-1/2 opacity-0 group-hover:opacity-100
                          transition duration-500 ease-in-out transform group-hover:-translate-y-1"
          >
            { label }
            <svg className="absolute text-black h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve">
              <polygon className="fill-current" points="0,0 127.5,127.5 255,0"/>
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}