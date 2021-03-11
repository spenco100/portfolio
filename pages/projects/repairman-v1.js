import Link from 'next/link';
import ProjectPost from '../../components/ProjectPost';
import RelatedLink from '../../components/RelatedLink.js'


export default function Aceso () {
  return (<>
    <ProjectPost
      hero={{
        src: '/images/projects/Repairman/Landing.jpg'
      }}
      title={{
        page: 'Repairman',
        main: 'Repairman Pro',
        article: 'Tracking tickets on printed sheets is a nightmare for repair shop managers'
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
        With hundreds of repairs being performed every month, tracking device and customer data as well as repair notes and liability forms, 
        record keeping for device repair shops can be a nightmare.
      </p>
      <p className="mb-2">
        Unfortunately their CRMs and POS systems have ignored this key feature, or buried it so deep in nested modal hell that nobody uses it. 
        Most shops revert to printing empty excel sheets, having their techs fill in a column for each device repaired that day.
      </p>
      <p className="mb-2">
        As you can imagine, tracking 1 x sheet x 5 techs x 3 shops = 1 massive headache, and no real record keeping. So I came up with a simple solution: a webapp.
      </p>

      <h3 className="text-2xl font-semibold mb-2">My goals</h3>
      <ol className="list-decimal	list-inside pl-3 mb-2">
        <li>Guide techs through repairs</li>
        <li>Reduce time spent recording device details</li>
        <li>Eliminate printed device repair records</li>
        <li>Create uniform repair records</li>
      </ol>
      <h4 className="text-2xl font-semibold mb-2">What I built</h4>
      <ol className="list-disc list-inside pl-3 mb-2">
        <li>RBAC for owners, managers, and techs to manage their shop</li>
        <li>Systemic repair procedure to save records in under 30 seconds:
          <ul className="ml-10" style={{ listStyle: 'square' }}>
            <li>Required customer and device information entry</li>
            <li>Required pre and post device repair inspection records</li>
            <li>Follow step by step guides from the iFixit API</li>
          </ul>
        </li>
        <li>Watch real time progress of every repair in your shop</li>
        <li>Display repair progress to customers</li>
      </ol>

      <p className="mb-2">This was my first version of Repairman Pro, used to validate the idea. I quickly learned I'd need to integrate with popular CRMs before it could be "ramen profitable."</p>
      <p>
         Check out the integrated version
        <Link href="/projects/repairman-v2">
          <a className="text-blue-400 hover:text-blue-500">
            {' '} here.
          </a>
        </Link>
      </p>

      <p className="text-3xl font-semibold mt-6 mb-2">Related</p>
      <div className="grid grid-cols-2">
      <RelatedLink 
          link={{
            url: 'https://www.repairdesk.co/',
            pretty: 'RepairDesk CRM'
          }}
          image={{
            src: '/images/relatedLinks/repairdesk.png'
          }}
          newTab={true}
        />
        <RelatedLink
          link={{
            url: '/projects/repairman-v2',
            pretty: 'Repairman Pro v2'
          }}
          image={{
            src: '/images/projects/Repairman-v2/Landing.jpg'
          }}
          newTab={false}
        />
      </div>

    </ProjectPost>
  </>)
}