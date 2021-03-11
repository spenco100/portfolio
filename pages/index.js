import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Router from 'next/router';

import Section from '../components/Section';
import Project from '../components/Project';
import Tooltip from '../components/Icons/Tooltip';
import IconContainer from '../components/Icons/IconContainer';
import Icon from '../components/Icons/Icon';
import MiniIcon from '../components/Icons/MiniIcon';


import { FaStripe } from "react-icons/fa";
import { IoLogoVimeo } from "react-icons/io";
import { IoLogoSass, IoPieChart, IoCodeSlash } from "react-icons/io5";
import { SiBulma, SiNetlify, SiGithub, SiFacebook, SiReddit, SiReact, SiApple, SiTailwindcss } from "react-icons/si";
import { ImPhone } from "react-icons/im";
import { HiOutlineMailOpen } from "react-icons/hi";
import { GrWordpress } from "react-icons/gr";
import { FiChevronDown } from "react-icons/fi";



const ExperienceItem = ({ title, company, time, description, icon, isLast }) => {
  return (<>
    {/* {!isLast && <div className="border-r-2 border-gray-500 absolute top-0" style={{ left: "11px" }} />}   */}
    {/* <li className="mb-2"> */}
      {/* <div className="border h-full" /> */}
    <li className={ isLast ? 'pb-3' : 'border-l-2 border-gray-700 pb-3' }>
      <div className="flex items-flex-start">
        <div className="-ml-3">
          { MiniIcon(icon) }
        </div>
        <div className="flex-1 ml-4 max-w-3xl">
          <p className="text-lg font-semibold">{ title }</p>
          <p className="text-md opacity-80">{ company }</p>
          <p className="text-sm opacity-50">{ time }</p>
          <p>{ description }</p>
        </div>
      </div>
    </li>
  </>)
}


export default class Home extends React.Component {

  linkClicked (e, id) {
    e.preventDefault();
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth'
    });
  }

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
              <img src="/images/home/profile.jpg" alt="My wedding picture" 
                  className="my-4 rounded-full w-72 shadow-lg transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl" 
              />
              <h1 className="text-5xl font-extrabold">Spencer Speas</h1>
              <h2 className="text-2xl pt-2 font-mono font-bold">SaaS Specialist</h2>
            </div>

            <Tooltip label="My Github activity, the last 4 months">
              <div className="flex flex-col items-center justify-center overflow-hidden -mb-8">  
                <div className="relative max-w-6xl">
                  <img
                    style={{ width: '400px', height: 'auto' }}
                    src="/images/home/github-activity.png"
                    className="object-cover rounded-b-xl"
                    alt="My Github activity the last 4 months"
                  />
                  <div className="absolute p-4 inset-0 flex flex-col justify-end bg-gradient-to-b from-transparent to-gray-800 backdrop backdrop-blur-5 text-white
                                  transition duration-500 ease-in-out transform hover:opacity-20"
                  >
                    <p className="font-mono text-lg">Vue / Express / Node / NoSQL</p>
                  </div>  
                </div>
              </div>
            </Tooltip>

            <div className="animate-bounce cursor-pointer">
              <a onClick={ (e) => { this.linkClicked(e, '#experience') }}>
                <FiChevronDown size="3em" color="whitesmoke" />
              </a>
            </div>

          </div>


          {/* Experience */}
          <div id="#experience" />
          <Section title="Nearly 4 Years in Startups" classes="pt-14" passId="experience">

            <div className="relative max-w-4xl m-8">
              <ul className="list-none m-0 p-0">
                <ExperienceItem
                  title="Macbook Flipper"
                  company="256 QuickFix"
                  time="2017 - 2019"
                  description="After high school I started a company fixing and flipping Macbooks and iPhones, 
                               until I gained a local reputation that landed me deals with some of the largest device repair shops in my area."
                  icon={ SiApple }
                  isLast={ false }
                />
                <ExperienceItem
                  title="Wordpress & Facebook Ads"
                  company="Kaboom Crash Media"
                  time="2018 - 2020"
                  description="Changing from B2C to B2B in device sales gave me the time to network and branch into Wordpress, HTML/CSS, and Facebook Ad strategies with a local agency."
                  icon={ GrWordpress }
                  isLast={ false }
                />
                <ExperienceItem
                  title="Marketing Lead"
                  company="Aceso Design"
                  time="2019 - 2019"
                  description="Met the co-founder of a medical tech startup, joined the company and quickly became the lead of marketing and advertising."
                  icon={ IoPieChart }
                  isLast={ false }
                />
                <ExperienceItem
                  title="CTO"
                  company="Aceso Design"
                  time="2019 - 2021"
                  description="Technical co-founder left the company, so I learned Javascript, Python, some Go, and took over as CTO.
                               Fell in love with web development and learned the fullstack, and some ML."
                  icon={ IoCodeSlash }
                  isLast={ true }
                />
              </ul>
            </div>

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
                    { Icon(SiBulma, { href: "https://bulma.io/", color: "#00D1B2", label: "Bulma" }) }
                    { Icon(IoLogoSass, { href: "https://sass-lang.com/", color: "#BF4080", label: "Sass" }) }
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
                  link: "/projects/repairman-v1"
                }}
                description="Automatic device inspection checklists, connected with RepairDesk."
              >
                <IconContainer
                  top={<>
                    { Icon(Image, { href: "https://vuejs.org/", src: "/images/icons/vue.svg", label: "Vue" }) }
                    { Icon(SiBulma, { href: "https://bulma.io/", color: "#00D1B2", label: "Bulma" }) }
                    { Icon(IoLogoSass, { href: "https://sass-lang.com/", color: "#BF4080", label: "Sass" }) }
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





          <Section title="In Progress" classes="pt-12">
            <div className="flex flex-col items-center md:grid grid-cols-2 gap-4">

              {/* Repairman Pro v2 */}
              <Project
                title="Repairman Pro v2"
                image={{
                  src: 'images/projects/Repairman-v2/Landing.jpg'
                }}
                logo={{
                  src: 'images/projects/Repairman/Logo.png'
                }}
                link={{
                  pretty: "Anticipated release 3/17/21"
                }}
                // post={{
                //   link: "/projects/aceso"
                // }}
                description="Automatic device inspection checklists, connected with RepairDesk."
              >
                <IconContainer
                  top={<>
                    { Icon(Image, { href: "https://vuejs.org/", src: "/images/icons/vue.svg", label: "Vue" }) }
                    { Icon(Image, { href: "https://vue.chakra-ui.com/", src: "/images/icons/chakra.svg", label: "ChakraUI" }) }
                    { Icon(IoLogoSass, { href: "https://sass-lang.com/", color: "#BF4080", label: "Sass" }) }
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
                  src: 'images/projects/Streetrat/Landing.jpg',
                }}
                logo={{
                  src: 'images/projects/Aceso/Logo.png'
                }}
                link={{
                  pretty: "Anticipated release 3/30/21"
                }}
                // post={{
                //   link: "/projects/aceso"
                // }}
                description="Automated checkout Chrome extension via notifications from proxied inventory scrapers."
              >

                <IconContainer
                  top={<>
                    { Icon(SiReact, { href: "https://reactjs.org/", color: "#61DAFB", label: "React" }) }
                    {/* { Icon(SiBulma, { href: "https://bulma.io/", color: "#00d1b2", label: "Bulma" }) } */}
                    { Icon(IoLogoSass, { href: "https://sass-lang.com/", color: "#BF4080", label: "Sass" }) }
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

              <div className="grid grid-cols-2 gap-3 mt-5">
                <a href="tel:+19169901341" className="group cursor-pointer text-blue-400 hover:text-blue-500
                        bg-gray-800 p-2 rounded-lg hover:scale-105
                        transition duration-500 ease-in-out transform group-hover:-translate-y-1">
                  <div className="flex flex-col items-center justify-around h-full text-center">
                    <ImPhone size="3rem" color="white" />
                    {/* { Icon(HiOutlineMailOpen, { href: "mailto:spencer.speas@gmail.com", color: "white" }) } */}
                    <p>(916) 990-1341</p>
                  </div>
                </a>
                <a href="mailto:spencer.speas@gmail.com" className="group cursor-pointer text-blue-400 hover:text-blue-500
                        bg-gray-800 p-2 rounded-lg hover:scale-105
                        transition duration-500 ease-in-out transform group-hover:-translate-y-1">
                  <div className="flex flex-col items-center justify-around h-full text-center">
                    <HiOutlineMailOpen size="3rem" color="white" />
                    Spencer.Speas<br/>@gmail.com
                  </div>
               </a>
              </div>

            </div>
          </Section>

          <div className="grid grid-cols-4 grid-rows-1 pt-10 pb-5" style={{ backgroundColor: "#090C13" }}>
            <div className="col-start-1 col-end-5 flex flex-col items-center text-center text-white">
              <p className="text-2xl font-semibold">This Site</p>
              <p className="text-sm">Powered by</p>
              <div className="flex flex-row p-2">
                <div className="p-1">
                  { Icon(SiReact, { href: "https://reactjs.org/", color: "#61DAFB", label: "React" }) }
                </div>
                <div className="p-1">
                  { Icon(Image, { href: "https://nextjs.org/",  label: "NextJS", src: "images/icons/next.svg" }) }
                </div>
                <div className="p-1">
                  { Icon(SiTailwindcss, { href: "https://tailwindcss.com/", color: "#06B6D4", label: "TailwindCSS" }) }
                </div>
                <div className="p-1">
                  { Icon(SiNetlify, { href: "https://www.netlify.com/", color: "#15847D", label: "Netlify" }) }
                </div>
              </div>
            </div>
            <div className="text-left col-start-4 text-gray-400">
              <p className="opacity-50">© Spencer Speas 2020</p>
            </div>
          </div>

        </div>
      </>
    )
  }
}
