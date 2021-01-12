import "./App.css";
import ListCounter from "./components/ListCounter";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <ListCounter />
      </header>
    </div>
  );
}

export default App;
