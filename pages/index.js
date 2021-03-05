import Head from 'next/head';


import Section from '../components/Section';
import Project from '../components/Project';

// import { IoLogoVimeo } from "react-icons/io";
import { IoLogoVue } from "react-icons/io5";
import { SiBulma, SiFirebase, SiNetlify } from "react-icons/si";


// holds icons in 2 rows
const Icons = ({ top, bottom }) => {
  const topIcons = top.props.children;
  let bottomIcons = [];
  if (bottom && bottom.props && bottom.props.children) { // we have to check all the way down that these propertoes exist
    bottomIcons = bottom.props.children;
  }
  return (
    <div className="rounded-b-lg space-y-2 p-2">
      <div className="Icons-top flex flex-row justify-center space-x-2">
          { // make an array from props.top, render the child inside <Icon /> circle
            Object.keys(topIcons).map((icon, idx) => (
              <Icon key={idx}>{ topIcons[icon] }</Icon>
            ))
          }
      </div>
      <div className="Icons-bottom flex flex-row justify-center space-x-2">
        {
          Object.keys(bottomIcons).map((icon, idx) => (
            <Icon key={idx}>{ bottomIcons[icon] }</Icon>
          ))
        }
      </div>
    </div>
  )
}
// holds a specific, given icon 
const Icon = ({ children }) => {
  return (
    <div className="rounded-full h-14 w-14 flex items-center justify-center bg-gray-700 shadow-sm hover:shadow-lg hover:bg-gray-600 cursor-pointer"
    >
      { children }
    </div>
  )
}


export default function Home() {
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
        <div className="flex flex-col md:grid grid-cols-3 container gap-4">
          <Project
            title="Aceso Recovery"
            image={ {
              src: 'images/Aceso-Landing.png',
            } }
            logo={ {
              src: 'images/Aceso-Logo.png'
            } }
            link={{
              url: "https://www.AcesoRecovery.com",
              pretty: "AcesoRecovery.com"
            }}
            description="Aceso bridges the gap between physical therapists and their patients."
          >
            <Icons
              top={<>
                <IoLogoVue size="2em" color="#42b983" />
                <SiBulma size="2em" color="#00d1b2" />  
                <SiFirebase size="2em" color="gold" />
                <SiNetlify size="2em" color="black" />
              </>} 
              // bottom={<>
              //   <IoLogoVimeo size="2em" color="blue" />
              // </>}
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
