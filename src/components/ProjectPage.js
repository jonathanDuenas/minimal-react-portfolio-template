import React from 'react';
import Header from './header';
import Contact from './Contact';
import data from './yourdata';

const ProjectPage = ({ path }) =>{
  const images = data.projectsData[path];

  return (
    <div>
      <Header name={data.name} contactEmail={data.contactEmail}></Header>
      <div className="about_container">
        <div className="about_contact">
          {images.map((image) => {
            return (
              <img {...image}/>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default ProjectPage;
