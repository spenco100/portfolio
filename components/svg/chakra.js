
import React from 'react';
export default function ChakraLogo({ color }) {
  // if (color) {
  //   return (
  //     <svg width="582" height="582" viewBox="0 0 582 582" fill="none" xmlns="http://www.w3.org/2000/svg">
  //     <rect width="582" height="582" rx="291" fill="url(#paint0_linear)"/>
  //     <path d="M157.521 303.421L355.881 106.426C359.587 102.746 365.55 107.225 363.049 111.809L289.22 247.123C287.573 250.141 289.758 253.821 293.196 253.821H420.782C424.892 253.821 426.877 258.857 423.872 261.661L200.293 470.326C196.284 474.067 190.317 468.796 193.536 464.356L299.373 318.351C301.543 315.357 299.404 311.164 295.706 311.164H160.713C156.67 311.164 154.653 306.27 157.521 303.421Z" fill="white"/>
  //     <defs>
  //     <linearGradient id="paint0_linear" x1="291" y1="0" x2="291" y2="582" gradientUnits="userSpaceOnUse">
  //     <stop stop-color="#7BCBD4"/>
  //     <stop offset="1" stop-color="#29C6B7"/>
  //     </linearGradient>
  //     </defs>
  //     </svg> 
  //   )
  // } else {
    return (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* <svg width="582" height="582" viewBox="0 0 582 582" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
        {/* <rect width="582" height="582" rx="291" fill="#374152"/> */}
        <path d="M12.991 25.024 29.351 8.777C29.657 8.474 30.148 8.843 29.942 9.221L23.853 20.381C23.717 20.63 23.898 20.934 24.181 20.934H34.704C35.043 20.934 35.206 21.349 34.959 21.58L16.519 38.79C16.188 39.098 15.696 38.664 15.962 38.297L24.691 26.256C24.87 26.009 24.693 25.663 24.388 25.663H13.255C12.921 25.663 12.755 25.259 12.991 25.024Z" fill="url(#paint0_linear)"/>
        {/* <path d="M157.521 303.421L355.881 106.426C359.587 102.746 365.55 107.225 363.049 111.809L289.22 247.123C287.573 250.141 289.758 253.821 293.196 253.821H420.782C424.892 253.821 426.877 258.857 423.872 261.661L200.293 470.326C196.284 474.067 190.317 468.796 193.536 464.356L299.373 318.351C301.543 315.357 299.404 311.164 295.706 311.164H160.713C156.67 311.164 154.653 306.27 157.521 303.421Z" fill="white"/> */}
        <defs>
        <linearGradient xmlns="http://www.w3.org/2000/svg" id="paint0_linear" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7BCBD4"/>
          <stop offset="1" stopColor="#29C6B7"/>
        </linearGradient>
        </defs>
      </svg>
    )
  // }
};
