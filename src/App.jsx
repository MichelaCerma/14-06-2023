import "./App.css";
import { todos } from "./mock/todo";
import Card from "./components/card";

function App() {
  return (
    <>
      <Card data={todos}></Card>
    </>
  );
}

export default App;
