import { Link } from "react-router-dom";
import { dashToSpace } from "../../utils/utils";
import { GlobeAltIcon } from '@heroicons/react/24/outline'
import gitHubIcon from '../../assets/img/github.svg'

export default function Card({repo, pictureSize}){
    return (
        <>
            <section className='container grid-cols-1 border-4 rounded mx-2 lg:h-full'>
                <div className="overflow-auto h-full p-0 m-0 ">
                    <img src={`https://placehold.co/${pictureSize.size}`} alt="project image" className='' />
                    <p className='min-h-0 truncate'>{dashToSpace(repo.name)}</p>
                    <section className='container flex flex-row min-h-0'>
                        <Link key={`repo${repo.id}`} to={repo.html_url}><img src={gitHubIcon} alt="githubIcon" className='w-12 m-1'/></Link>
                        <Link key={`deplo${repo.id}`}><GlobeAltIcon className='w-12 m-1'/></Link>
                    </section>
                </div>
            </section>
        </>
    )
}