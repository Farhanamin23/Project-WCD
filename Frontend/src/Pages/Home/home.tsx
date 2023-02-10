import React from 'react';
import Founder from './components/founder/founder';
import Gallery from './components/gallery/gallery';
import LatestNews from './components/latestNews/latestNews';
import NearestEvent from './components/nearestEvent/nearestEvent';
import Partner from './components/partner/partner';
import SearchEvent from './components/searchEvent/searchEvent';
import HomeBanner from './components/homeBanner/homeBanner';
import './swiperStyle.css';
import Sponsor from './components/sponsor/sponsor';

const Home: React.FC = () => {

   return (
      <main className='flex-grow pt-14 lg:pt-[75px]'>
         <div>
            <HomeBanner />
            
            <div className='bg-[url("/public/img/bg-page-gradient.webp")] md:bg-[url("/public/img/bg-page-gradient-desktop.webp")] bg-cover bg-no-repeat'>
               {/* <SearchEvent /> */}
               <NearestEvent />
               <Gallery />
               <Sponsor />
               <Partner />
            </div>

            <div className='bg-[url("/public/img/bg-page-gradient.webp")] md:bg-[url("/public/img/bg-page-gradient-desktop.webp")] bg-cover bg-no-repeat bg-center'>
               <LatestNews />
            </div>
            
            {/* <Founder /> */}
            
         </div>


      </main>
   )
}

export default Home