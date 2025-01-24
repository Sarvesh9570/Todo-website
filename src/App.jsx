import Appname from "./assets/component/Appname";
import Addtodo from "./assets/component/Addtodo";
import Todolists from "./assets/component/Todolists";
import Errormssg from "./assets/component/Errormssg";
import "./App.css";
import { useState } from "react";
import { TodoItemsContext } from "./store/todo-item-store";
function App() {
  const [todolist, settodolist] = useState([]);

  const onclickset = (tdname, tddate) => {
    const newarry = [...todolist, { name: tdname, duedate: tddate }];
    settodolist(newarry);
  };

  const ondeleteclick = (todoName) => {
    const nyaarry = todolist.filter((it) => it.name != todoName);
    settodolist(nyaarry);
  };

  return (
    <TodoItemsContext.Provider value={{ todolist, onclickset, ondeleteclick }}>
      <center className="todo-container ">
        <div className="whole-container">
          <Appname />
          <Addtodo />
          <Errormssg></Errormssg>
          <Todolists></Todolists>
        </div>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
