import "./App.css";
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
      </main>
    </div>
  );
}

export default App;
