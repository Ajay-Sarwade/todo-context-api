import "./App.css";
import Todo from "./components/Todo";
import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    <div className="App">

      <Todo />

    </div>
  );
}

export default App;
