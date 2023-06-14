import "./index.css";
import Todolist from "../todolist/";

const Card = ({ data }) => {
  return (
    <>
      <h1 className="title">Todolist:</h1>
      {data.map((todo) => (
        <Todolist props={todo} key={todo.id} />
      ))}
    </>
  );
};
export default Card;
