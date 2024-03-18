import { fetchRepos } from '../utils/repos.js'

const repos = await fetchRepos()

export default function PortfolioPage() {
  console.log(repos)
  return (
    <>
      <section className='container flex flex-col md:flex-row'>
        <h1>Previous builds: </h1>
        {/* {repos.map((item) => (
          <section className='rounder flex flex-column border-2' key={item.id}>
            {item.name}
          </section>
        ))} */}
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