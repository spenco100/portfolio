import React from 'react';

// holds icons in 2 rows
export default function Icons ({ top, bottom, showBoth }) {
  const topIcons = top.props.children;
  let bottomIcons;
  if (showBoth) { // we have to check all the way down that these propertoes exist
    bottomIcons = bottom.props.children;
  }
  return (
    <div className="rounded-b-lg space-y-2 p-2">
      <div className="Icons-top flex flex-row justify-center space-x-2">
        { // make an array from props.top, render each child
          Object.keys(topIcons).map((icon, idx) => (
            topIcons[icon]
          ))
        }
      </div>
      <div className="Icons-bottom flex flex-row justify-center space-x-2">
        { showBoth &&
          Object.keys(bottomIcons).map((icon, idx) => (
            bottomIcons[icon]
          ))
        }
      </div>
    </div>
  )
}