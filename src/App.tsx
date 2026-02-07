import "./App.css";
import ProgressBar from "./components/ProgressBar";
// import Accordian from "./components/accordian";
// import Debounce from "./components/debounce";

function App() {
  return (
    <>
      <h1>Machine coding questions</h1>
      {/* <Debounce /> */}
      {/* <Accordian /> */}
      <ProgressBar progress={50} />
      <ProgressBar progress={80} />
      <ProgressBar progress={20} />
      <ProgressBar progress={90} />
      <ProgressBar progress={3} />
    </>
  );
}

export default App;
