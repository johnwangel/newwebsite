function Descr(props){
  return (
      <li className="sect-desc-item">
      	{props.desc.item} (<span class='change-time' onClick={()=>props.setStart(props.desc.time)}>{props.desc.time}s</span>)
      </li>
  );
}

export default Descr;