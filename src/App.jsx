/*function App(){
  return(
    <div>
      <h1>Hello Friends!</h1>
      <p>chai peelo</p>
    </div>
  );
}
export default App;*/
/*import "./App.css"
function App(){
  const trainerName="Nirmal";
  const trainingDay=3;
  return(
    <main className="app">
      <section className="welcome-card">
        <p className="day-label">React Day {trainingDay}</p>
        <h1 className="title">College Course Explorer</h1>
        <p>Trainer:{trainerName}</p>
        <p>React Learning Project</p>
        <p>Used React,JSX,components,CSS</p>
      </section>

    </main>
    
  );
}
export default App;*/

import "./App.css";
import Navbar from "./compenents/Navbar";
import Hero from "./compenents/Hero";
function App(){
  return(
    <div>
      <Navbar />
      <main id="home">
        <Hero />
      </main>
      
    </div>
  );
}
export default App;