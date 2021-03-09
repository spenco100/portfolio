import Link from 'next/link';
import ProjectPost from '../../components/ProjectPost';
import RelatedLink from '../../components/RelatedLink.js'

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault();
//     document.querySelector(this.getAttribute('href')).scrollIntoView({
//       behavior: 'smooth'
//     });
//   });
// });

export default function Aceso () {
  return (<>
    <ProjectPost
      hero={{
        src: '/images/projects/Aceso-ML/Landing.jpg'
      }}
      title={{
        page: 'Aceso ML',
        main: 'Aceso ML',
        article: 'Let patients watch their own progress, on demand'
      }}
      time={{
        start: 'Jul 2020',
        end: 'Oct 2020'
      }}
      link={{
        pretty: 'Offline',
      }}
    >
      <p className="text-xl font-semibold pb-2">
        This is a long read, <a className="text-blue-400 hover:text-blue-500" href="#tldr">skip ahead</a> if you want
      </p>
      <p className="mb-2">
        As said 
        <Link href="/projects/aceso-ml">
          <a className="text-blue-400 hover:text-blue-500">
            {' '}before,{' '}
          </a>
        </Link>
        there is a major problem with the way home exercise plans are carried out in physical therapy. What feels like an afterthought and is rarely adhered to, home exercise plans are essential to quick and full recovery after having surgery. We wanted to change this.
      </p>
      <p className="mb-2">
        We set out to organize our library of ~300 Peloton style PT workouts you can do from home into progress based phases. We learned there are 2 essential indicators of muscle redevelopment after surgery:
      </p>
      <ol className="list-decimal	list-inside pl-3 mb-2">
        <li>Strength</li>
        <li>Range of motion</li>
      </ol>
      <p className="mb-2">
        While strength would be difficult to create a computer-measurable KPI on, we found range of motion to be more accessible.
        With the help of human pose estimation computer vision models, we found a way to get X and Y keypoints of different joints and body parts, using a single webcam.
      </p>
      <p className="mb-2">
        Human pose estimation requires serious GPU power to be time effective, so I went about learning how to use AWS's EC2 and Google Compute Engine's GPU VM instances.
        After nearly 2 weeks of toiling between different cloud providers and Linux distros, I decided Debian on GCE was the most approachable option for someone with minimal DevOps experience,
        beyond some intense Raspberry Pi projects in high school. 
      </p>
      <p className="mb-2">
        Now to decide on what model to use. I had a hunch that no open source pose estimation model would be trained well enough to perform our tasks in the real world, so I learned how to train 
        Tensorflow YOLOv4 object detection models to look for an object that was impossible to miss: 3 bright green circles cut from card stock, glued to cardboard, with a safety pin
        sticking out from the back so I could attach it to my pants, in an attempt to measure flexion of the knee as a PoC.
      </p>
      <p className="mb-2">
        I converted the TF model to TFJS, so I could run inferences in the browser, even in CodePen from my iPad.
      </p>
      <iframe src="https://player.vimeo.com/video/465995881" width="640" height="360" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
      <p className="my-2">
        As you can see the results were shaky, and the frame by frame data would be unusable.
      </p>
      <p className="mb-2">
        So now I had a new mission. Find a pre trained model to avoid having to snap and label 50,000+ images of green circles in different places, and get some usuable data from the result.
        After many tests with different models, libraries, frameworks, and datasets, I found 
        <a className="text-blue-400 hover:text-blue-500" href="https://github.com/CMU-Perceptual-Computing-Lab/openpose" target="_blank">{' '}CMU's OpenPose</a>. 
      </p>
      <p className="mb-2">
        I was happy with the results from the demo, and decided the data smoothing they'd implemented was worth more than the time it would take me to recreate it myself.
      </p>

      <h4 className="pt-4 text-xl font-bold" id="tldr">TL;DR</h4>
      <p className="mb-2">
        With a decent idea that this might just work, I spent about 2 months drinking Bang energy daily, with an air mattress in my office, sleeping only 30-45 mins a day, in a frantic effort to prepare a demo for a potential investor.
        Essentially I closed everything else out of my life, to focus and learn what it takes to queue jobs with Redis, install SSL and spin up a server from the OS up, configure firewall rules,
        draw on video frames with Python's OpenCV2, manage job statuses in a DB, record from the webcam in a Vue app, and respond to job status changes.
      </p>
      <p className="mb-2">
        The combination of this new system with our video library, therapist dashboard, and patient's video client, allowed patients to complete appropriate physical therapy from home,
        take progression tests to view and track progress objectively, and await their PT or surgeon's approval before moving into more intensive workouts.
      </p>

      <h3 className="text-2xl font-semibold mb-2 mt-4">
        Our goals
      </h3>
      <ol className="list-decimal	list-inside pl-3 mb-2">
        <li>Excite patients to stick with their home exercise plan</li>
        <li>Give patients direct access to data showing their progress</li>
        <li>Clarify the roadmap to full recovery</li>
      </ol>
      <h4 className="text-2xl font-semibold mb-2">What we built</h4>
      <p className="mb-2">
        Like the  
        <Link href="/projects/aceso-ml">
          <a className="text-blue-400 hover:text-blue-500">
            {' '}current Aceso,{' '}
          </a>
        </Link>
        we needed 2 web apps. First a dashboard for therapists to manage their practice and patient's,
        and second a video player for patients to consume the video playlists as prescribed by their linked medical professionals. The major difference between Aceso ML
        and the current Aceso is the phase based system depending on results of progression tests.
      </p>
      <ol className="list-disc list-inside pl-3 mb-2">
        <li>Guide patients and record tests from the browser using the UserMedia API</li>
        <li>Save test recordings in a NoSQL database and queue jobs on a Google Compute Engine Debian VM</li>
        <li>Run machine learning inferences to detect 25 keypoints on the human body</li>
        <li>Use detected keypoints and the Pythagorean theorem to calculate angle of flexion for each frame in the recorded test</li>
        <li>Notify linked therapists and surgeons of test results, to be verified as correct before allowing a patient to progress</li>
      </ol>
      <p>This was our 3rd major iteration of Aceso, and we've made 
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
        <Link href="/project/aceso">
          <a className="text-blue-400 hover:text-blue-500">{' '}We're still working on it.</a>
        </Link>
      </p>
      
      <p className="text-3xl font-semibold mt-6 mb-2">Related</p>
      <div className="grid grid-cols-2">
        <RelatedLink
          link={{
            url: '/projects/aceso',
            pretty: 'Aceso'
          }}
          image={{
            src: '/images/projects/Aceso/Landing.jpg'
          }}
          newTab={false}
        />
        <RelatedLink 
          link={{
            url: 'https://github.com/CMU-Perceptual-Computing-Lab/openpose',
            pretty: 'CMU OpenPose'
          }}
          image={{
            src: '/images/relatedLinks/openpose.png'
          }}
          newTab={true}
        />
      </div>

    </ProjectPost>
  </>)
}