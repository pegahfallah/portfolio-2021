import "./App.css";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <HomePage id="home"></HomePage>
    </div>
  );
}

export default App;
