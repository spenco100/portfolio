import React from 'react';

export default function MiniIcon(componentName) {
  const Icon = React.createElement( // create element based on a string, like IoLogoVue
    eval(componentName),
    { color: 'white', size: '1rem' }
  );
  const Circle = React.createElement( // circle around the icon
    'div',
    { 
      className: `h-6 w-6 rounded-full flex items-center justify-center bg-gray-700 shadow-md z-30`
    },
    Icon
  );
  return (
    Circle
  )
}