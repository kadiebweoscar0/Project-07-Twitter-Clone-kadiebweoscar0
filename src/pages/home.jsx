import React from 'react';
import Timeline from '../components/timeline/timeline';
import SideBar from '../components/sidebars/sidebar';
import Trends from '../components/trends';

function Home() {
  return (
    <>
      <SideBar />
      <main>
        <Timeline />
      </main>
      <Trends />
    </>
  );
}

export default Home;