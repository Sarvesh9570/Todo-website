import { useContext } from "react";
import Todolist from "./Todolist";
import { TodoItemsContext } from "../../store/todo-item-store";
function Todolists() {
  const { todolist } = useContext(TodoItemsContext);
  return (
    <div className="item-container">
      {todolist.map((item) => (
        <Todolist todoName={item.name} todoDate={item.duedate}></Todolist>
      ))}
    </div>
  );
}
export default Todolists;
