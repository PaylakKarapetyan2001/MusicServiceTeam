import React from 'react';
import Wrapper from '../../components/Wrapper';
import '../../assets/css/main.scss';
import HomeCaruselSection from '../../components/HomeCaruselSection';
import HomeProductBook from '../../components/HomePodcastsBook';
import HomeNewReleases from '../../components/HomeNewReleases';

function Home() {
  return (
    <Wrapper>
        <main>
            <div className='container'>
                <HomeCaruselSection />
                <HomeProductBook />
                <HomeNewReleases />
            </div>
        </main>
    </Wrapper>
  )
}

export default Home;