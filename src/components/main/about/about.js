import React from 'react'
import SectionHeader from '../section-header/section-header';
import "./about.css";
import Intro from './intro/intro';
import Skill from './skills/skill';



const About = () => {
  return (
    <section id="about" className="about">
        <SectionHeader/>
        <Intro/>
        <Skill/>
    </section>
  )
}
export default About