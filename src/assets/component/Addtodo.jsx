import { useContext, useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { TodoItemsContext } from "../../store/todo-item-store";

function Addtodo() {
  const { onclickset } = useContext(TodoItemsContext);

  const [tdname, settdname] = useState();
  const [tddate, settddate] = useState();

  const todoname = (event) => {
    settdname(event.target.value);
  };
  const tododate = (event) => {
    settddate(event.target.value);
  };
  const onchangeadd = () => {
    onclickset(tdname, tddate);
    settddate("");
    settdname("");
  };
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo here"
            value={tdname}
            onChange={todoname}
          />
        </div>
        <div className="col-4 cl-4">
          <input
            className="datetype"
            type="date"
            value={tddate}
            onChange={tododate}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={onchangeadd}
          >
            <IoIosAddCircle />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Addtodo;
