import '../styles/globals.css';
import Icon from '../components/Icons/Icon';
import React from 'react';

import { SiNetlify, SiReact, SiTailwindcss } from "react-icons/si";

export default class MyApp extends React.Component {

  state = {
    color: 'transparent'
  }
  listenScrollEvent = e => {
    if (window.scrollY > window.innerHeight) {
      this.setState({color: '#090C13'})
    } else {
      this.setState({color: 'transparent'})
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  smoothScrollToLink = (e, id) => { // smooth scrolling method
    e.preventDefault();
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth'
    });
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <div className="relative">

        {/* Header w/ Contact */}
        {/* <div style={{ backgroundColor: this.state.color }} className="transition duration-200 ease-in-out fixed z-50 top-0 w-full text-blue-400 flex flex-direction-row px-20 py-3 justify-between">
          <a className="text-blue-400 hover:text-blue-500" onClick={ (e) => { this.smoothScrollToLink(e, '#contact') }}>
            Contact Me
          </a>
          <p className="hover:text-blue-500 cursor-pointer">
            <a href="mailto:spencer.speas@gmail.com">Spencer.Speas@gmail.com</a>
          </p>
        </div> */}

        {/* Page content */}
        <Component {...pageProps} />

        {/* Footer */}
        <div className="flex flex-col pt-10 pb-8" style={{ backgroundColor: "#090C13" }}>
          <div className="flex flex-col items-center text-center text-white">
            <p className="text-2xl font-semibold">This Site</p>
            <p className="text-sm">Built with</p>
            <div className="flex flex-row p-2">
              <div className="p-1">
                { Icon(SiReact, { href: "https://reactjs.org/", color: "#61DAFB", label: "React" }) }
              </div>
              <div className="p-1">
                { Icon(null, { href: "https://nextjs.org/",  label: "NextJS", src: "images/icons/next.svg" }) }
              </div>
              <div className="p-1">
                { Icon(SiTailwindcss, { href: "https://tailwindcss.com/", color: "#06B6D4", label: "TailwindCSS" }) }
              </div>
              <div className="p-1">
                { Icon(SiNetlify, { href: "https://www.netlify.com/", color: "#15847D", label: "Netlify" }) }
              </div>
            </div>
          </div>
          <div className="mt-2 flex flex-col text-center w-full">
            <p className="opacity-50 text-gray-400">© Spencer Speas 2020</p>
          </div>
        </div>
      </div>
    )
  }
}
