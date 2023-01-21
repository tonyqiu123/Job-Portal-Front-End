import React from 'react';
import '../css/home.css';
import '../css/all.css'
import AnimatedPage from '../components/AnimatedPage'
import HomeProject from '../components/HomeProject';

export default function Home() {

  return (
    <AnimatedPage>
        <div className='homeContainer'>
          <HomeProject href="https://brightbearsinfo.com/" image="https://cdn.discordapp.com/attachments/715319623637270638/1064087964411498616/image_34.png" />
          <HomeProject href="https://tonyswebdesigns.ca/" image="https://cdn.discordapp.com/attachments/715319623637270638/1064087964084359188/image_27.png" />
          <HomeProject href="https://sipapp.io/" image="https://cdn.discordapp.com/attachments/715319623637270638/1064087963815907399/image_26.png" />
          <HomeProject href="https://friendaccounting.com/en/index" image="https://cdn.discordapp.com/attachments/715319623637270638/1064087963534905414/image_24.png" />
        </div>
    </AnimatedPage>

  )
};
