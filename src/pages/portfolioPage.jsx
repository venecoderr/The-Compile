import { useState, useEffect } from 'react';
import Card from '../components/UI/card.jsx'
import { fetchRepos } from '../utils/utils.js'

const repos = await fetchRepos()

export default function PortfolioPage() {
  // console.log(repos)
  // State to hold the current picture size
  const [pictureSize, setPictureSize] = useState({break: '', size: ''});

  // Function to update the current breakpoint  
  const updatePicture = () => {
    const width = window.innerWidth;
    let newPictureSize = {};

    if (width <= 1023) {
      newPictureSize = {
        break: 'sm',
        size: '500'
      };
    } else {
      newPictureSize = {
        break: 'lg',
        size: '360x1100'
      };
    }

    setPictureSize(newPictureSize);
  }

  // Update breakpoint when component mounts and when window size changes
  useEffect(() => {
    updatePicture();
    window.addEventListener('resize', updatePicture);

    return () => {
      window.removeEventListener('resize', updatePicture);
    };
  }, []);

  return (
    <>
      <section className='container sm:columns-1 md:columns-2 lg:columns-7 h-full'>
        {repos.map((item, index) => (
          <Card repo={item} pictureSize={pictureSize} key={item.id}></Card>
        ))}
      </section>
     </>
  )
}