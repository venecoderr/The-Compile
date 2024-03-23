import { Link } from 'react-router-dom'
import { fetchRepos } from '../utils/repos.js'
import { GlobeAltIcon } from '@heroicons/react/24/outline'
import dashToSpace from '../utils/dashToSpace.js'
import gitHubIcon from '../assets/img/github.svg'

const repos = await fetchRepos()

export default function PortfolioPage() {
    console.log(repos)
  return (
    <>
      <section className='container flex flex-col md:flex-row columns-7'>
        {repos.map((item, index) => (
          <section className='container flex flex-col border-4 rounded mx-2 h-screen' key={item.id}>
            <img src="https://placehold.co/300" alt="project image" className='h-4/6' />
            <p className='h-1/6'>{dashToSpace(item.name)}</p>
            <section className='container flex flex-row h-1/6'>
              <Link key={`repo${item.id}`} to={item.html_url}><img src={gitHubIcon} alt="githubIcon" className='size-12 m-1'/></Link>
              <Link key={`deplo${item.id}`}><GlobeAltIcon className='size-12 m-1'/></Link>
            </section>
          </section>
        ))}
        {/* <section className='container my-1 mx-auto px-4 flex flex-col justify-center w-100 lg:w-1/2'>
          <h1 className='rounded-full px-4 text-4xl'>Jose Freites</h1>
          <h2 className='rounded-full px-4'>(Venecoderr)</h2>
          <p className='rounded-full px-4 text-justify'>Hi, my name is Jose, I'm a 24yo Venezuelan living in Orlando, Fl, 
          I have a passion for engineering and building useful things, and I'm
          always looking to expand the <i>array</i> of building skills I have. 
          For that I have recently graduated from the UCF Coding bootcamp and I'm looking 
          for opportunities to build more awesome stuff</p>
        </section> */}
      </section>
     </>
  )
}