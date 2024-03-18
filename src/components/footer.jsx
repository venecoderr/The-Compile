import gitHubIcon from '../assets/img/github.svg'
import nodeIcon from '../assets/img/nodejs.svg'
import reactIcon from '../assets/img/react.svg'
import tailWindIcon from '../assets/img/tailwind-css.svg'
import '../assets/css/app.css'

export default function Footer(){
    return (
        <>
            <footer className='container flex-column content-center accent-bg'>
                <p className='container main-text text-center my-3'>Powered By</p>
                <section className='my-1 flex flex-row justify-center'>
                    <section className='flex flex-row rounded-full main-bg'>
                        <a href="https://github.com/venecoderr" >
                            <img src={gitHubIcon} alt="github icon" className='size-12 m-1 ml-2'/>
                        </a>  
                        <img src={nodeIcon} alt="github link" className='size-12 m-1'/>
                        <img src={reactIcon} alt="github link" className='size-12 m-1'/>
                        <img src={tailWindIcon} alt="github link" className='size-12 m-1 mr-2'/>
                    </section>
                </section>
            </footer>
        </>
    )
}