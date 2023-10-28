import './App.scss';
import data from './data.js';
import Section from './Section'

import { photo,logo } from './images'

function App() {
  return (
    <div className="App">
      <div class="container_first">
        <div class="logo_container"><img class="logo" src={logo} /></div>
        <div class="page_name">John Atkins</div>
        <div class="img_container"><img class="img-circle" src={photo} /></div>
        <div class="description">Web Application Developer
        </div>
      </div>
      <div class="container">
      { data.map((m,i) => <Section key={i} video={m} /> )}
      </div>
    </div>
  );
}

export default App;
