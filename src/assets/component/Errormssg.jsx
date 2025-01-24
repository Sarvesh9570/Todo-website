import { useContext } from "react";
import styles from "./Errormssg.module.css";
import { TodoItemsContext } from "../../store/todo-item-store";
const Errormssg = () => {
  const { todolist } = useContext(TodoItemsContext);
  return todolist.length == 0 && <p className={styles.mssg}>Enjoy Your Day</p>;
};
export default Errormssg;
