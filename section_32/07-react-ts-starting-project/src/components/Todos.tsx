import { FC, useContext } from "react"
import Todo from './Todo';
import classes from './Todos.module.css';
import { TodosContext } from "../store/todos-context";

const Todos: FC = () => {
	const { items, removeTodo } = useContext(TodosContext);

	return (
		<ul className={classes.todos}>
			{items.map(item => <Todo item={item} onRemove={removeTodo} />)}
		</ul>
	)
}

export default Todos;