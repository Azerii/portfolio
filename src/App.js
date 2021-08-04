import "./App.css";
import About from "./components/About";
import MainCaption from "./components/MainCaption";
import MyWork from "./components/MyWork";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <MainCaption />
        <MyWork />
        <About />
      </main>
    </div>
  );
}

export default App;
