import "./App.css";
import Tasks from "./components/Tasks/Tasks";
import { INITIAL_DATA } from "./InitialData";

function App() {
  return (
    <div className="App">
      <Tasks tasks={INITIAL_DATA} />
    </div>
  );
}

export default App;
