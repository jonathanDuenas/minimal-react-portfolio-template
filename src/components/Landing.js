import React from 'react';
import Header from './header';
import Home from './home';
import Work from './Work';

import data from './yourdata';

const Landing = ()=>{
  return(
    <div className="App">
      <Header
        name={data.name}
        contactEmail={data.contactEmail} />
      <Home name={data.landingPageName} paragraph = {data.landingPagePara} authorImage={data.landingPageImage}></Home>
      <Work projects={data.projects}></Work>
    </div>
  );
}

export default Landing
