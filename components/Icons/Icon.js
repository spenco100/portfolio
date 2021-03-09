import React from 'react';

import Tooltip from './Tooltip';
import Image from 'next/image';

// holds a specific, given icon 
export default function buildIcon(componentName, { href, color, label, src }) {
  let icon = React.createElement( // create element based on a string, like IoLogoVue
    eval(componentName),
    { color, size: '3rem' }
  );
  if (src) { {/* layout: 'fill', style: { padding: '2em' } */}
    icon = React.createElement(
      Image,
      { src, width: 48, height: 48, style: {  } }
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