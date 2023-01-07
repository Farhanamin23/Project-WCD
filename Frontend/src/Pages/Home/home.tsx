import React from 'react';
import Founder from './components/founder/founder';
import Gallery from './components/gallery/gallery';
import LatestNews from './components/latestNews/latestNews';
import NearestEvent from './components/nearestEvent/nearestEvent';
import Partner from './components/partner/partner';
import SearchEvent from './components/searchEvent/searchEvent';
import HomeBanner from './components/homeBanner/homeBanner';
import './swiperStyle.css';

const Home: React.FC = () => {
  
  return (
    <main>
      <div>
      <HomeBanner />
      <SearchEvent />
      <LatestNews />
      <Gallery />
      <NearestEvent />
      <Founder />
      <Partner />
      </div>
      

    </main>
  )
}

export default Home