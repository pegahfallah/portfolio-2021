import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
function App() {
  return (
    <div className="App">
      {/* <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={About} />
      </Switch> */}
      <NavBar></NavBar>
      <HomePage id="home"></HomePage>
      <About id="about"></About>
      <Projects id="projects"></Projects>
      <Contact id="contact"></Contact>
    </div>
  );
}

export default App;
