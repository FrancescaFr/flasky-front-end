//import logo from './logo.svg';
import './App.css';
// import Cat from './components/Cat';
import CatList from './components/CatList';

const CATLIST = [
  {
    name: "Bob",
    personality: "Angry",
    color: "Orange",
    caretaker: "Tom",
  },
  {
    name: "Bill",
    personality: "Blue",
    color: "Grey",
    caretaker: "Tabitha",
  },
];

function App() {
  return (
    <div className="App">
      <div>{<CatList catlist={CATLIST} />}</div>
    </div>
  );
}

export default App;
