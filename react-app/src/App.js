import "./App.css";
import FirstPage from "./component/FirstPage";
import SecondPage from "./component/SecondPage";
import ClearBtn from "./component/ClearBtn";

function App() {
  return (
    <div className="App">
      <FirstPage />
      <SecondPage />
      <ClearBtn />
    </div>
  );
}

export default App;
