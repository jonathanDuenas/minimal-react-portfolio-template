import React from 'react';
import ReactPlayer from 'react-player';

const Home = ({name, paragraph, authorImage})=>{

  return(
    <div>
      <div className="home_container">
        <ReactPlayer
          url={[
            {src: 'assets/este.mp4', type: 'video/mp4'},
          ]}
          playing
          loop
          controls={false}
          muted
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}

export default Home;
