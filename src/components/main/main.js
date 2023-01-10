import React from 'react';
import About from './about/about';
import Intro from './about/intro/intro';
import Educations from './education/educations';
import Experiences from './experiences/experiences';
import GetInTouch from './getintouch/get-in-touch';
import "./main.css";
import SectionHeader from './section-header/section-header';

const Main = () => {
  return (
    <div className="main-content pull-right">
        <About/>
        <Experiences/>
        <GetInTouch/>
        <Educations/>
    </div>
  )
}

export default Main