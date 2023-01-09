import React from "react";
import "./intro.css";

const Intro = () => {
  return (
    <div className="intro">
      <p>
        Hello, My name is Ersin Akun. Lorem ipsum dolor sit amet, usu sumo dicant
        vulputate in. Quando fabellas adipiscing nam an. An vis congue oporteat,
        no eros facer suavitate eos. An debet affert aliquid ius. Veritus
        placerat est ea, est ne nominavi suscipit maluisset.
      </p>

      <ul className="info">
        <li>
          <strong>Birthday:</strong> August 14, 1991
        </li>
        <li>
          <strong>Location:</strong> ErtugrulGazi Cd. Karesi, Turkey
        </li>
        <li>
          <strong>Email:</strong> ersinakun34@gmail.com
        </li>
        <li>
          <strong>Phone:</strong> +90 552-271-5210
        </li>
      </ul>
    </div>
  );
};

export default Intro;
