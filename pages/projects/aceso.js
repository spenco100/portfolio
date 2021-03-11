import Link from 'next/link';
import ProjectPost from '../../components/ProjectPost';
import RelatedLink from '../../components/RelatedLink.js'


export default function Aceso () {
  return (<>
    <ProjectPost
      hero={{
        src: '/images/projects/Aceso/Landing.jpg'
      }}
      title={{
        page: 'Aceso',
        main: 'Aceso Recovery',
        article: 'Patients hate home exercises plans, therapists hate making them.'
      }}
      time={{
        start: '2018',
        end: 'Ongoing'
      }}
      link={{
        pretty: 'AcesoRecovery.com',
        url: 'https://www.acesorecovery.com'
      }}
    >
      <p className="mb-2">
        Patient compliance to home exercise programs is a joke to PT's just about anywhere. 
        Probably because these so-called exercise plans are printed comic strips of WikiHow esque pictures, handed to you on your way out the door.
      </p>
      <p className="mb-2">
        Knowing that HEP compliant patients recover much faster and more effectively than their counterparts,
        we took inspiration from Peloton (and a sprinkle of Jillian Michaels) and created the slickest home exercise plan ever seen. <b>The 3 Click HEP.</b>
      </p>
      <p className="mb-2">
        Over the summer of 2020 with the help of a panel of surgeons, physical therapists, and personal trainers, 
        we recorded ~300 exercises commonly prescribed in HEPs, following a trio of fitness trainers.
      </p>
      <h3 className="text-2xl font-semibold mb-2">
        Our goals
      </h3>
      <ol className="list-decimal	list-inside pl-3 mb-2">
        <li>Help patients follow their HEP</li>
        <li>Allow PTs to spend less time making plans</li>
        <li>Turn every patient into a success story (and tell people about it too)</li>
      </ol>
      <h4 className="text-2xl font-semibold mb-2">What we built</h4>
      <ol className="list-disc list-inside pl-3 mb-2">
        <li>Passwordless sign in for patients</li>
        <li>Video playlist builder, with:
          <ul className="ml-10" style={{ listStyle: 'square' }}>
            <li>Easy templating</li>
            <li>Copy/paste</li>
            <li>Custom video uploading per practice</li>
          </ul>
        </li>
        <li>Onboard patients in under 60 seconds</li>
        <li>Track patient's viewing behavior and completion rates</li>
        <li>Let patients share progress to social media, with whitelabelled images</li>
      </ol>
      <p>This is our 4th major iteration of Aceso, and we've made 
        <Link href="https://issuu.com/insidemedicine/docs/inside_medicine_magazine_fall_2019/14">
          <a className="text-blue-400 hover:text-blue-500" target="_blank">
            {' '} big machines
          </a>
        </Link>,
        {' '}
        <Link href="/projects/aceso-ml">
          <a className="text-blue-400 hover:text-blue-500">
            machine learning
          </a>
        </Link>,
        {' '} and several native and web apps we've deprecated as we've learned along the way.
      </p>

      <p className="text-3xl font-semibold mt-6 mb-2">Related</p>
      <div className="grid grid-cols-2">
        <RelatedLink
          link={{
            url: '/projects/aceso-ml',
            pretty: 'Aceso ML'
          }}
          image={{
            src: '/images/projects/Aceso-ML/Landing.jpg'
          }}
          newTab={false}
        />
        <RelatedLink 
          link={{
            url: 'https://www.acesorecovery.com',
            pretty: 'Aceso Recovery'
          }}
          image={{
            src: '/images/projects/Aceso/Landing.jpg'
          }}
          newTab={true}
        />
      </div>

    </ProjectPost>
  </>)
}