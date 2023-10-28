import './App.scss';
import data from './data.js';
import Section from './Section'

function App() {
  return (
    <div className="App">
      { data.map((m,i) => <Section key={i} video={m} /> )}
    </div>
  );
}

export default App;
