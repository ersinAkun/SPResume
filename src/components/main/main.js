import React from 'react';
import About from './about/about';

import Educations from './education/educations';
import Experiences from './experiences/experiences';
import GetInTouch from './getintouch/get-in-touch';
import "./main.css";

import Testimonals from './testimonals/testimonals';

const Main = () => {
  return (
    <div className="main-content pull-right">
        <About/>
        <Experiences/>
        <Educations/>
        <Testimonals/>
        <GetInTouch/>
    </div>
  )
}

export default Main