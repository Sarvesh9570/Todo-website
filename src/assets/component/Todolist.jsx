import { useContext } from "react";
import { TodoItemsContext } from "../../store/todo-item-store";

function Todolist({ todoName, todoDate }) {
  const { ondeleteclick } = useContext(TodoItemsContext);
  return (
    <div class="container">
      <div class="row kg-row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button
            type="button"
            class="btn btn-danger kg-button"
            onClick={() => ondeleteclick(todoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default Todolist;
