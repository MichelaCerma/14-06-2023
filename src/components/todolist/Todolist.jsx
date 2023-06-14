import "./index.css";

const Todolist = ({ props }) => {
  return (
    <>
      <div className={`todo ${props.completed && "completed"}`}>
        <h3>{props.todo}</h3>
        <input type="checkbox" checked={props.completed} />
      </div>
    </>
  );
};
export default Todolist;
