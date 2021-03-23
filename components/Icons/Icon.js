import React from 'react';

import Tooltip from './Tooltip';
// import Image from 'next/image';

// holds a specific, given icon 
export default function buildIcon(componentName, { href, color, label, src }) {
  let icon;
  if (componentName) {
    icon = React.createElement( // create element based on custom component
      eval(componentName),
      { color, size: '3rem' }
    );
  } else { // no componentName should default to using an img tag
    icon = React.createElement(
      'img',
      { src, width: 48, height: 48, style: {  }, alt: `${label} icon` }
    )
  }
  const circle = React.createElement( // circle around the icon
    'div',
    { className: `h-14 w-14 rounded-full flex items-center justify-center bg-gray-700 shadow-md cursor-pointer 
                  hover:shadow-lg hover:bg-gray-600 hover:shadow-lg
                  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110`
    },
    icon
  );
  const link = React.createElement( // wrap everything in a link
    'a',
    { href, className: "hover:transform scale-120", target: "_blank" },
    circle
  );
  if (!label) {
    return link; // to return without a tooltip label
  } else {
    return (
      <Tooltip label={ label }>
        { link }
      </Tooltip>
    )
  }
}