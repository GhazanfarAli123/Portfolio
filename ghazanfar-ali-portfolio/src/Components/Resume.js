import { useContext } from "react";
import { ActiveMenuContext } from "../App.js";
import React from "react";

export const Resume = () => {
  
  const { registerSection } = useContext(ActiveMenuContext);
  return (
    <div className="resume" id="resume" ref={registerSection("section-4")}>
      <div className="resume-back-text">SUMMARY</div>
      <div className="resume-front">
        Resume
      </div>
      <div className="ex-ed">
        <div className="education">
          <span>My Education</span>
          <div className="first-education">
            <div className="date">2021-Present</div>
            <div className="degree">Computer Sciemce</div>
            <div className="institution">Virtual University</div>
            <p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.

            </p>
          </div>
          <div className="first-education">
            <div className="date-2">2018-2021</div>
            <div className="degree">ACCP Prime Diploma</div>
            <div className="institution">Aptech Computer Education</div>
            <p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.

            </p>
          </div>
          <div className="first-education">
            <div className="date">2021-Present</div>
            <div className="degree">Computer Sciemce</div>
            <div className="institution">Virtual University</div>
            <p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.

            </p>
          </div>
        </div>
        <div className="experience">
          <span>My Experience</span>
          <div className="first-education">
            <div className="date">2022-Present</div>
            <div className="degree">Frontend Developer</div>
            <div className="institution">Bramerz</div>
            <p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.

            </p>
          </div>
          <div className="first-education">
            <div className="date">2022-Present</div>
            <div className="degree">Frontend Developer</div>
            <div className="institution">Bramerz</div>
            <p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.

            </p>
          </div>
          <div className="first-education">
            <div className="date">2022-Present</div>
            <div className="degree">Frontend Developer</div>
            <div className="institution">Bramerz</div>
            <p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.
            </p>
          </div>
        </div>
      </div>
      <div className="skills">
        <div className="myskills">
          My Skills
          <div className="skill-name-perc">
            HTML
            <span>80%</span>
            <div className="skill-perc">
              <div className="skill-perc-2"></div>
            </div>
          </div>
          <div className="skill-name-perc">
            HTML
            <span>80%</span>
            <div className="skill-perc">
              <div className="skill-perc-2"></div>
            </div>
          </div>
          <div className="skill-name-perc">
            HTML
            <span>80%</span>
            <div className="skill-perc">
              <div className="skill-perc-2"></div>
            </div>
          </div>
        </div>
        <div className="skils-2">
          <div className="skill-name-perc">
            HTML
            <span>80%</span>
            <div className="skill-perc">
              <div className="skill-perc-2"></div>
            </div>
          </div> <div className="skill-name-perc">
            HTML
            <span>80%</span>
            <div className="skill-perc">
              <div className="skill-perc-2"></div>
            </div>
          </div> <div className="skill-name-perc">
            HTML
            <span>80%</span>
            <div className="skill-perc">
              <div className="skill-perc-2"></div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}