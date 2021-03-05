import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import Section from '../components/Section';
import Project from '../components/Project';

import { FaStripe } from "react-icons/fa"
import { IoLogoVimeo } from "react-icons/io";
import { IoLogoVue, IoLogoSass } from "react-icons/io5";
import { DiNodejs } from "react-icons/di";

import { SiBulma, SiFirebase, SiNetlify, SiMongodb, SiGooglecloud } from "react-icons/si";

import ChakraLogo from '../components/svg/chakra';
import MDLogo from '../components/svg/material-design';
import FirebaseLogo from '../components/svg/firebase';



// holds icons in 2 rows
const Icons = ({ top, bottom, showBoth }) => {
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

// holds a specific, given icon 
function buildIcon(componentName, { href, color, path }) {
  const icon = React.createElement( // create element based on a string, like (IoLogoVue)
    eval(componentName),
    { color, size: '3rem', }
  );
  const circle = React.createElement( // circle around the icon
    'div',
    { className: "h-14 w-14 rounded-full flex items-center justify-center bg-gray-700 shadow-sm hover:shadow-lg hover:bg-gray-600 cursor-pointer" },
    icon
  );
  const link = React.createElement( // wrap everything in a link
    'a',
    { href },
    circle
  );
  return link;
}

export default class Home extends React.Component {

  render() {
    return (
      <>
        <Head>
          <title>Spencer Speas</title>
        </Head>
        <div className="mx-auto">

          <div className="h-screen bg-gray-800 flex flex-col items-center justify-center text-white">
            <h1 className="text-5xl font-extrabold">Spencer Speas</h1>
            <h2 className="text-2xl pt-2 font-mono font-bold">SaaS Specialist</h2>
          </div>

          <Section title="Polished Projects">
            <div className="flex flex-col items-center md:grid grid-cols-2 lg:grid-cols-3 container gap-4">

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
                <Icons
                  top={<>
                    { buildIcon(IoLogoVue, { href: "https://google.com", color: "#42b983" }) }
                    { buildIcon(SiBulma, { href: "https://google.com", color: "#00d1b2" }) }
                    { buildIcon(SiFirebase, { href: "https://firebase.google.com/", color: "gold" }) }
                    { buildIcon(SiNetlify, { href: "https://www.netlify.com/", color: "#15847D" }) }
                  </>}
                  bottom={<>
                    { buildIcon(IoLogoVimeo, { href: "https://vimeo.com/", color: "rgb(15, 174, 241)" }) }
                    { buildIcon(FaStripe, { href: "https://stripe.com/", color: "white" }) }
                    { buildIcon(IoLogoSass, { href: "https://sass-lang.com/", color: "#bf4080" }) }
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
                  url: "https://www.AcesoRecovery.com",
                  pretty: "AcesoRecovery.com"
                }}
                description="Automatic device inspection checklists, connected with RepairDesk."
              >
                <Icons
                  top={<>
                    { buildIcon(IoLogoVue, { href: "https://google.com", color: "#42b983" }) }
                    { buildIcon(ChakraLogo, { href: "https://vue.chakra-ui.com/" }) }
                    { buildIcon(SiMongodb, { href: "https://google.com", color: "gold" }) }
                    { buildIcon(DiNodejs, { href: "https://google.com", color: "white" }) }
                  </>}
                  // bottom={<>
                  //   { buildIcon(FaStripe, { href: "https://google.com", color: "blue" }) }
                  // </>}
                  showBoth={false}
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
                <Icons
                  top={<>
                    { buildIcon(IoLogoVue, { href: "https://google.com", color: "#42b983" }) }
                    { buildIcon(MDLogo, { href: "https://vuetifyjs.com/en/" }) }
                    { buildIcon(FirebaseLogo, { href: "https://firebase.google.com/" }) }
                    { buildIcon(SiNetlify, { href: "https://www.netlify.com/", color: "#15847D" }) }
                  </>}
                  bottom={<>
                    { buildIcon(IoLogoVimeo, { href: "https://vimeo.com/", color: "blue" }) }
                    { buildIcon(SiGooglecloud, { href: "https://google.com", color: "white" }) }
                  </>}
                  showBoth={true}
                />
              </Project>

            </div>
          </Section>

          <Section title="In Progress">
            <p>Testing</p>
          </Section>


        </div>


      </>
    )
  }
}
