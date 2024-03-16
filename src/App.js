import './App.css';
import TopsList from './domain/component/TopsList/TopsList';

function App() {
  return (
    <div className="App">
      <h2>Hello world</h2>
      <TopsList entries={[{
        idx: 1,
        name: "Steph Curry",
        desc: "baller",
        isDiscovered: false
      }, {
        idx: 2,
        name: "Jared Wexler",
        desc: "loser",
        isDiscovered: true
      }, {
        idx: 3,
        name: "Ethan Fox",
        desc: "winner",
        isDiscovered: true
      }, {
        idx: 4,
        name: "Amanda Rachlin",
        desc: "ultra-baller",
        isDiscovered: false
      }]}/>
    </div>
  );
}

export default App;
