import Video from './Video'

import { useState } from "react";

function Section(props) {
  const [toggle, setToggle] = useState(false);
  const viz = (toggle) ? 'open' : 'closed';
  const icon = (toggle) ? "\u25B6" : "\u25BC";

  return (
    <div className={`vid-sec ${viz}`} >
    	<h1>
        <div onClick={() => setToggle(!toggle)} className="toggle-sect" >{icon}</div>
        {props.video.title}
      </h1>
      <Video video={props.video} />
    </div>
  );
}
export default Section;



