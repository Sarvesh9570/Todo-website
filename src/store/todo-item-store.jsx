import { createContext } from "react";

export const TodoItemsContext = createContext({
  Todolist: [],
  onclickset: () => {},
  ondeleteclick: () => {},
});
