import * as Tone from "tone";

import './App.css';



const synth = new Tone.Synth().toDestination();
      
function playSynth() {
  synth.triggerAttackRelease("D4", "8n")
}

function App() {
  return (
    <div className="App">
      <div id="wrapper">
        <button id="button" onClick={playSynth}>click me</button>
      </div>
    </div>
  );
}

export default App;
