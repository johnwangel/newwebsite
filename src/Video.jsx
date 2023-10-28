import Descr from './Descr'

import { useState } from "react";

function Video(props) {

   const [start, setStart] = useState(0);

  const file = `${props.video.file}#t=${start}`

  return (
      <div className="expand-sect">
        <div className="sect-desc">
          <h2>Overview</h2>
          <p>{props.video.overview}</p>
          <h2>Features</h2>
          <ul>{props.video.description.map((d,i)=><Descr key={i} setStart={setStart} desc={d}/>)}</ul>
        </div>
        <div className="sect-vid"> <video src={file} controls="controls" autoPlay={true} /> </div>
      </div>
  );
}

export default Video;