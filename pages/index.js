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
import { DiNodejs } from "react-icons/di";
import { SiBulma, SiNetlify, SiMongodb, SiGithub, SiFacebook, SiReddit } from "react-icons/si";

import ChakraLogo from '../components/svg/chakra';
// import MDLogo from '../components/svg/material-design';



export default class Home extends React.Component {
  render() {
    return (
      <>
        <Head>
          <title>Spencer Speas</title>
        </Head>
        <div className="mx-auto">


          <div className="h-screen bg-gray-800 flex flex-col items-center justify-around text-center text-white">

            <div className="flex flex-col items-center">
              <img src="/images/profile.jpg" alt="My wedding day" 
                  className="my-4 rounded-full w-72 shadow-lg transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl" 
              />
              <h1 className="text-5xl font-extrabold">Spencer Speas</h1>
              <h2 className="text-2xl pt-2 font-mono font-bold">SaaS Specialist</h2>
            </div>
            <div className="text-lg ">
              <p>3 Years startup experience</p>
              <p className="">Vue / Node / Express / NoSQL</p>
            </div>
          </div>


          {/* <div className="relative h-screen">
              <div className="absolute top-0 z-5 w-full flex flex-col items-center mt-14">
                <img src="/images/profile.jpg" alt="My wedding day" 
                    className="left-1/2 rounded-full w-72 shadow-lg transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl" 
                />
              </div>
            <div className="bg-gray-800 h-full w-full flex flex-col items-center justify-center text-white">

              <div className="">
                <p>3 Years startup experience</p>
                <p>Vue / Node / Express / NoSQL</p>
              </div>
            </div>
          </div> */}


          <Section title="Polished Projects">
            <div className="flex flex-col items-center md:grid grid-cols-2 lg:grid-cols-3 gap-4">


              {/* Aceso */}
              <Project
                title="Aceso Recovery"
                image={{
                  src: 'images/Aceso/Landing.jpg',
                }}
                logo={{
                  src: 'images/Aceso/Logo.png'
                }}
                link={{
                  url: "https://www.AcesoRecovery.com",
                  pretty: "AcesoRecovery.com"
                }}
                description="Aceso bridges the gap between physical therapists and their patients."
              >

                <IconContainer
                  top={<>
                    { Icon(Image, { href: "https://vuejs.org/", src: "/images/icons/vue.svg", label: "Vue" }) }
                    { Icon(SiBulma, { href: "https://bulma.io/", color: "#00d1b2", label: "Bulma" }) }
                    { Icon(Image, { href: "https://firebase.google.com/", label: "Firebase", src: "/images/icons/firebase.svg" }) }
                    { Icon(SiNetlify, { href: "https://www.netlify.com/", color: "#15847D", label: "Netlify" }) }
                  </>}
                  bottom={<>
                    { Icon(IoLogoVimeo, { href: "https://vimeo.com/", color: "rgb(15, 174, 241)", label: "Vimeo" }) }
                    { Icon(FaStripe, { href: "https://stripe.com/", color: "white", label: "Stripe" }) }
                    { Icon(IoLogoSass, { href: "https://sass-lang.com/", color: "#bf4080", label: "Sass" }) }
                  </>}
                  showBoth={true}
                />
              </Project>
              


              {/* Repairman Pro */}
              <Project
                title="Repairman Pro"
                image={{
                  src: 'images/Repairman/Landing.jpg',
                }}
                logo={{
                  src: 'images/Repairman/Logo.png'
                }}
                link={{
                  url: "https://repairman-pro.app",
                  pretty: "Repairman-Pro.app"
                }}
                description="Automatic device inspection checklists, connected with RepairDesk."
              >
                <IconContainer
                  top={<>
                    { Icon(Image, { href: "https://vuejs.org/", src: "/images/icons/vue.svg", label: "Vue" }) }
                    { Icon(ChakraLogo, { href: "https://vue.chakra-ui.com/", label: "ChakraUI" }) }
                    { Icon(Image, { href: "https://www.repairdesk.co/", src: "/images/icons/repairdesk.svg", label: "RepairDesk" }) }
                  </>}
                  bottom={<>
                    { Icon(Image, { href: "https://www.mongodb.com/cloud/atlas", src: "/images/icons/mongo.svg", label: "MongoDB" }) }
                    { Icon(Image, { href: "https://nodejs.org/en/", src: "/images/icons/node.svg", label: "NodeJS" }) }
                    {/* { Icon(DiNodejs, { href: "https://nodejs.org/en/", color: "white", label: "NodeJS" }) } */}
                  </>}
                  showBoth={true}
                />
              </Project>



              {/* Aceso ML */}
              <Project
                className="md:row-span-2"
                title="Aceso ML"
                image={{
                  src: 'images/Aceso/Landing.jpg',
                }}
                logo={{
                  src: 'images/Aceso/Logo.png'
                }}
                link={{
                  url: "https://www.AcesoRecovery.com",
                  pretty: "AcesoRecovery.com"
                }}
                description="Aceso bridges the gap between physical therapists and their patients."
              >
                <IconContainer
                  top={<>
                    { Icon(Image, { href: "https://vuejs.org/", src: "/images/icons/vue.svg", label: "Vue" }) }
                    
                    { Icon(Image, { href: "https://firebase.google.com/", label: "Firebase", src: "/images/icons/firebase.svg" }) }
                    { Icon(SiNetlify, { href: "https://www.netlify.com/", color: "#15847D", label: "Netlify" }) }
                  </>}
                  bottom={<>
                    { Icon(Image, { href: "https://vuetifyjs.com/en/", label: "Vuetify", src: "/images/icons/vuetify.svg" }) }
                    { Icon(Image, { href: "https://cloud.google.com/", src: "/images/icons/google-cloud.png", label: "Google Compute Engine" }) }
                  </>}
                  showBoth={true}
                />
              </Project>


            </div>
          </Section>

          {/* <Section title="In Progress">
            <p>Testing</p>
          </Section> */}


          <Section title="Contact Info">

              <div className="flex flex-col items-center">
                <p className="text-center">
                  <a href="mailto:spencer.speas@gmail.com" className="cursor-pointer text-blue-400 hover:text-blue-500">
                    Spencer.Speas@Gmail.com
                  </a>
                  <br />
                  <a href="tel:+19169901341" className="cursor-pointer text-blue-400 hover:text-blue-500">
                    (916) 990-1341
                  </a>
                </p>

                <div className="grid grid-cols-3">
                  <div className="flex flex-col items-center">
                    { Icon(SiGithub, { href: "https://github.com/spenco100", color: "white", label: "Spenco100" }) }
                    <a href="https://github.com/spenco100" className="cursor-pointer text-blue-400 hover:text-blue-500">
                      @spenco100
                    </a>
                  </div>
                  <div className="flex flex-col items-center">
                    { Icon(SiReddit, { href: "https://reddit.com/u/sragan16", color: "white", label: "Sragan16" }) }
                    <a href="https://reddit.com/u/sragan16" className="cursor-pointer text-blue-400 hover:text-blue-500">
                      @sragan16
                    </a>
                  </div>
                  <div className="flex flex-col items-center group">
                    { Icon(SiFacebook, { href: "https://facebook.com/spencer.speas.77", color: "white" }) }
                    <a href="https://facebook.com/spencer.speas.77" className="cursor-pointer text-blue-400 hover:text-blue-500">
                      Spencer Speas
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
