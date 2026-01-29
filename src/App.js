import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="Text Utils" aboutText="About Us" />
      <div className="container my-3">
        <TextForm heading="Enter your text to analyze below" />
      </div>
    </>
  );
}

export default App;
