import React from "react";
import SectionHeader from "../section-header/section-header";
import "./experiences.css"
import "./experience"


const Experiences = () => {
  return (
    <section id="experience" className="resume">
      <SectionHeader/>
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="top-item resume-item">
            <h2>Orchid Inc</h2>
            <span>CREATIVE DIRECTOR | JANUARY, 2013 - PRESENT</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
              maxime laborum sequi, magni earum quo soluta sint velit numquam,
              ipsum illum! Nostrum possimus illo architecto praesentium ut
              aliquam dolorem.
            </p>
          </div>
        </div>
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="resume-item">
            <h2>VISUAL / UI DESIGNER</h2>
            <span>CREATIVE DIRECTOR | MARCH'11 - DECEMBER'12</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
              maxime laborum sequi, magni earum quo soluta sint velit numquam.
            </p>
          </div>
        </div>
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="resume-item">
            <h2>Click Media</h2>
            <span>SENIOR UX DESIGNER | JULY'09 - APRIL'11</span>
            <p>
              Odit maxime laborum sequi, magni earum quo soluta sint velit
              numquam, ipsum illum! Nostrum possimus illo architecto praesentium
              ut aliquam dolorem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experiences;
