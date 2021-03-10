import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import Section from '../components/Section';
import Project from '../components/Project';
// import Tooltip from '../components/Icons/Tooltip';
import IconContainer from '../components/Icons/IconContainer';
import Icon from '../components/Icons/Icon';


import { FaStripe } from "react-icons/fa"
import { IoLogoVimeo } from "react-icons/io";
import { IoLogoSass } from "react-icons/io5";
import { SiBulma, SiNetlify, SiGithub, SiFacebook, SiReddit, SiReact } from "react-icons/si";
import { ImPhone } from "react-icons/im";
import { HiOutlineMailOpen } from "react-icons/hi";



export default class Home extends React.Component {
  render() {
    return (
      <>
        <Head>
          <title>Spencer Speas</title>
        </Head>
        <div className="mx-auto">


          {/* Hero */}
          <div className="h-screen bg-gray-800 flex flex-col items-center justify-around text-center text-white">
            <div className="flex flex-col items-center">
              <img src="/images/profile.jpg" alt="My wedding picture" 
                  className="my-4 rounded-full w-72 shadow-lg transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl" 
              />
              <h1 className="text-5xl font-extrabold">Spencer Speas</h1>
              <h2 className="text-2xl pt-2 font-mono font-bold">SaaS Specialist</h2>
            </div>

            <div className="flex flex-col items-center justify-center overflow-hidden mb-2">
              <div className="relative max-w-6xl">
                <img
                  style={{ width: '400px', height: 'auto' }}
                  src="/images/github-activity.png"
                  className="object-cover rounded-b-xl"
                  alt="My Github activity"
                />
                <div className="absolute p-4 inset-0 flex flex-col justify-end bg-gradient-to-b from-transparent to-gray-800 backdrop backdrop-blur-5 text-white">
                  <p className="font-mono text-lg">Vue / Express / Node / NoSQL</p>
                </div>
                
                {/* <div className="absolute p-4 inset-0 flex flex-col justify-end bg-gradient-to-b from-transparent to-gray-900 backdrop backdrop-blur-5 text-white
                                transition duration-500 ease-in-out transform hover:opacity-20">
                  <h1 className="font-bold text-4xl">{ title.main }</h1>
                  <span className="opacity-70">{ time.start } {' '}-{' '} { time.end }</span>
                </div> */}
              </div>
            </div>
          </div>


          <Section title="3 Years in Startups" classes="pt-14">

            <div className="relative max-w-4xl m-8">
              <div className="border-r-2 border-gray-500 absolute h-full top-0" style={{ left: "11px" }} />
              <ul className="list-none m-0 p-0">
                <li className="mb-2">
                  <div className="flex items-center mb-1">
                    <div className="bg-gray-500 rounded-full h-6 w-6" />
                    <div className="flex-1 ml-4 font-medium">2017 - 2018</div>
                  </div>
                  <div className="ml-12">
                    Sold Macbooks and iPhones like it was crack
                  </div>
                </li>
                <li className="mb-2">
                  <div className="flex items-center mb-1">
                    <div className="bg-gray-500 rounded-full h-6 w-6" />
                    <div className="flex-1 ml-4 font-medium">Nov 2017 - Multiple Releases</div>
                  </div>
                  <div className="ml-12">
                    v0.1.0 - v0.2.2
                  </div>
                </li>
                <li className="mb-2">
                  <div className="flex items-center mb-1">
                    <div className="bg-gray-500 rounded-full h-6 w-6" />
                    <div className="flex-1 ml-4 font-medium">Feb 2018 - Other stuff happened</div>
                  </div>
                  <div className="ml-12">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus perspiciatis facilis deserunt excepturi sunt pariatur consequuntur eveniet molestias ea quia? Magni veniam illo optio tempora modi exercitationem qui adipisci ex.
                  </div>
                </li>
                <li className="mb-2">
                  <div className="flex items-center mb-1">
                    <div className="bg-gray-500 rounded-full h-6 w-6" />
                    <div className="flex-1 ml-4 font-medium">July 2018 - More stuff happened</div>
                  </div>
                  <div className="ml-12">
                    Consequuntur odit explicabo officiis veniam incidunt non velit ex consectetur magnam minima vero hic impedit cumque, blanditiis autem distinctio facere dolor atque facilis, eos, labore sunt iusto. Beatae, quas, dolorem?
                  </div>
                </li>
              </ul>
            </div> 


            {/* <div className="max-w-3xl grid grid-cols-10 grid-rows-2">
              <div>

              </div>
              <p>
                After graduating high school I started fixing and flipping Macbooks and iPhones, 
                until I gained a local reputation that landed me deals with some of the largest device repair shops in my area.
              </p>
              <p>
                From that point on I only had to purchase devices, while they'd repair, sell, and warranty them.
              </p>
            </div> */}
          </Section>



          <Section title="Polished Projects" classes="pt-8">
            <div className="flex flex-col items-center md:grid grid-cols-2 lg:grid-cols-3 gap-4">


              {/* Aceso */}
              <Project
                title="Aceso Recovery"
                image={{
                  src: 'images/projects/Aceso/Landing.jpg',
                }}
                logo={{
                  src: 'images/projects/Aceso/Logo.png'
                }}
                link={{
                  url: "https://www.AcesoRecovery.com",
                  pretty: "AcesoRecovery.com"
                }}
                post={{
                  link: "/projects/aceso"
                }}
                description="Connect physical therapists to their patients, turn home exercise programs into ad streams."
              >

                <IconContainer
                  top={<>
                    { Icon(Image, { href: "https://vuejs.org/", src: "/images/icons/vue.svg", label: "Vue" }) }
                    { Icon(SiBulma, { href: "https://bulma.io/", color: "#00d1b2", label: "Bulma" }) }
                    { Icon(IoLogoSass, { href: "https://sass-lang.com/", color: "#bf4080", label: "Sass" }) }
                    { Icon(SiNetlify, { href: "https://www.netlify.com/", color: "#15847D", label: "Netlify" }) }
                  </>}
                  bottom={<>
                    { Icon(IoLogoVimeo, { href: "https://vimeo.com/", color: "rgb(15, 174, 241)", label: "Vimeo" }) }
                    { Icon(FaStripe, { href: "https://stripe.com/", color: "white", label: "Stripe" }) }
                    { Icon(Image, { href: "https://firebase.google.com/", label: "Firebase", src: "/images/icons/firebase.svg" }) }
                  </>}
                  showBoth={true}
                />
              </Project>
              

              {/* Aceso ML */}
              <Project
                className="md:row-span-2"
                title="Aceso ML"
                image={{
                  src: '/images/projects/Aceso-ML/Landing.jpg'
                }}
                logo={{
                  src: 'images/projects/Aceso-ML/Logo.png'
                }}
                link={{
                  pretty: "Offliine"
                }}
                post={{
                  link: "/projects/aceso-ml"
                }}
                description="Assess range of motion progression using your webcam and computer vision."
              >
                <IconContainer
                  top={<>
                    { Icon(Image, { href: "https://vuejs.org/", src: "/images/icons/vue.svg", label: "Vue" }) }
                    { Icon(Image, { href: "https://vuetifyjs.com/en/", label: "Vuetify", src: "/images/icons/vuetify.svg" }) }
                    { Icon(Image, { href: "https://firebase.google.com/", label: "Firebase", src: "/images/icons/firebase.svg" }) }
                    { Icon(SiNetlify, { href: "https://www.netlify.com/", color: "#15847D", label: "Netlify" }) }
                  </>}
                  bottom={<>
                    { Icon(Image, { href: "https://www.python.org/psf-landing/", src: "/images/icons/python.svg", label: "Python" }) }
                    { Icon(Image, { href: "https://nodejs.org/en/", src: "/images/icons/node.svg", label: "NodeJS" }) }
                    { Icon(Image, { href: "https://redis.io/", src: "/images/icons/redis-cube.svg", label: "Redis" }) }
                    { Icon(Image, { href: "https://cloud.google.com/", src: "/images/icons/google-cloud.png", label: "Google Compute Engine" }) }
                  </>}
                  showBoth={true}
                />
              </Project>


              {/* Repairman Pro */}
              <Project
                title="Repairman Pro"
                image={{
                  src: 'images/projects/Repairman/Landing.jpg',
                }}
                logo={{
                  src: 'images/projects/Repairman/Logo.png'
                }}
                link={{
                  url: "https://repairman-pro.app",
                  pretty: "Repairman-Pro.app"
                }}
                post={{
                  link: "/projects/aceso"
                }}
                description="Automatic device inspection checklists, connected with RepairDesk."
              >
                <IconContainer
                  top={<>
                    { Icon(Image, { href: "https://vuejs.org/", src: "/images/icons/vue.svg", label: "Vue" }) }
                    { Icon(SiBulma, { href: "https://bulma.io/", color: "#00d1b2", label: "Bulma" }) }
                    { Icon(IoLogoSass, { href: "https://sass-lang.com/", color: "#bf4080", label: "Sass" }) }
                    { Icon(SiNetlify, { href: "https://www.netlify.com/", color: "#15847D", label: "Netlify" }) }
                  </>}
                  bottom={<>
                    { Icon(Image, { href: "https://firebase.google.com/", label: "Firebase", src: "/images/icons/firebase.svg" }) }
                    { Icon(Image, { href: "https://nodejs.org/en/", src: "/images/icons/node.svg", label: "NodeJS" }) }
                    { Icon(Image, { href: "https://www.repairdesk.co/", src: "/images/icons/repairdesk.svg", label: "RepairDesk" }) }
                  </>}
                  showBoth={true}
                />
              </Project>

            </div>
          </Section>





          <Section title="In Progress" classes="pt-8">
            <div className="flex flex-col items-center md:grid grid-cols-2 gap-4">

              {/* Repairman Pro v2 */}
              <Project
                title="Repairman Pro v2"
                image={{
                  src: 'images/projects/Repairman/Landing.jpg',
                }}
                logo={{
                  src: 'images/projects/Repairman/Logo.png'
                }}
                link={{
                  pretty: "Anticipated release 3/17/21"
                }}
                post={{
                  link: "/projects/aceso"
                }}
                description="Automatic device inspection checklists, connected with RepairDesk."
              >
                <IconContainer
                  top={<>
                    { Icon(Image, { href: "https://vuejs.org/", src: "/images/icons/vue.svg", label: "Vue" }) }
                    { Icon(Image, { href: "https://vue.chakra-ui.com/", src: "/images/icons/chakra.svg", label: "ChakraUI" }) }
                    { Icon(IoLogoSass, { href: "https://sass-lang.com/", color: "#bf4080", label: "Sass" }) }
                    { Icon(SiNetlify, { href: "https://www.netlify.com/", color: "#15847D", label: "Netlify" }) }
                  </>}
                  bottom={<>
                    { Icon(Image, { href: "https://www.mongodb.com/cloud/atlas", src: "/images/icons/mongo.svg", label: "MongoDB" }) }
                    { Icon(Image, { href: "https://nodejs.org/en/", src: "/images/icons/node.svg", label: "NodeJS" }) }
                    { Icon(Image, { href: "https://www.repairdesk.co/", src: "/images/icons/repairdesk.svg", label: "RepairDesk" }) }
                  </>}
                  showBoth={true}
                />
              </Project>

              {/* StreetRat */}
              <Project
                title="StreetRat"
                image={{
                  src: 'images/projects/Aceso/Landing.jpg',
                }}
                logo={{
                  src: 'images/projects/Aceso/Logo.png'
                }}
                link={{
                  pretty: "Anticipated release 3/30/21"
                }}
                post={{
                  link: "/projects/aceso"
                }}
                description="Automated checkout through a Chrome extension, connected to an inventory scraper."
              >

                <IconContainer
                  top={<>
                    { Icon(SiReact, { href: "https://reactjs.org/", color: "#61dafb", label: "React" }) }
                    {/* { Icon(SiBulma, { href: "https://bulma.io/", color: "#00d1b2", label: "Bulma" }) } */}
                    { Icon(IoLogoSass, { href: "https://sass-lang.com/", color: "#bf4080", label: "Sass" }) }
                    {/* { Icon(SiNetlify, { href: "https://www.netlify.com/", color: "#15847D", label: "Netlify" }) } */}
                    { Icon(FaStripe, { href: "https://stripe.com/", color: "white", label: "Stripe" }) }
                  </>}
                  bottom={<>
                    {/* { Icon(IoLogoVimeo, { href: "https://vimeo.com/", color: "rgb(15, 174, 241)", label: "Vimeo" }) } */}
                    { Icon(Image, { href: "https://firebase.google.com/", label: "Firebase", src: "/images/icons/firebase.svg" }) }
                    { Icon(Image, { href: "https://github.com/jef/streetmerchant", label: "StreetMerchant", src: "images/relatedLinks/streetmerchant.png" }) }
                  </>}
                  showBoth={true}
                />
              </Project>

            </div>
          </Section>


          <Section title="Contact Info" classes="pt-10 pb-20">
            <div className="flex flex-col items-center">
              <div className="grid grid-cols-2 mt-3 gap-2">
                <div className="flex flex-row items-center rounded-lg bg-gray-800 py-2 px-4">
                  { Icon(HiOutlineMailOpen, { href: "mailto:spencer.speas@gmail.com", color: "white" }) }
                  <a href="mailto:spencer.speas@gmail.com" className="cursor-pointer text-blue-400 hover:text-blue-500 ml-2">
                    Spencer.Speas@Gmail.com
                  </a>
                </div>
                <div className="flex flex-row items-center rounded-lg bg-gray-800 py-2 px-4">
                  { Icon(ImPhone, { href: "tel:+19169901341", color: "white" }) }
                  <a href="tel:+19169901341" className="cursor-pointer text-blue-400 hover:text-blue-500 ml-2">
                    (916) 990-1341
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-3 mt-5">
                <div className="flex flex-col items-center">
                  { Icon(SiGithub, { href: "https://github.com/spenco100", color: "white" }) }
                  <a href="https://github.com/spenco100" className="cursor-pointer text-blue-400 hover:text-blue-500">
                    @spenco100
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  { Icon(SiFacebook, { href: "https://facebook.com/spencer.speas.77", color: "white" }) }
                  <a href="https://facebook.com/spencer.speas.77" className="cursor-pointer text-blue-400 hover:text-blue-500">
                    @spencer.speas.77
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  { Icon(SiReddit, { href: "https://reddit.com/u/sragan16", color: "white" }) }
                  <a href="https://reddit.com/u/sragan16" className="cursor-pointer text-blue-400 hover:text-blue-500">
                    @sragan16
                  </a>
                </div>
              </div>
            </div>
          </Section>


        </div>

      </>
    )
  }
}
