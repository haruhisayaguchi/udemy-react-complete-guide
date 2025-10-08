import { FC } from "react";
import TodoModel from "../models/todo";
import classes from './Todo.module.css';

const Todo: FC<{ item: TodoModel, onRemove: (id: string) => void }> = ({ item, onRemove }) => {
	return (
		<li className={classes.item} key={item.id} onClick={() => onRemove(item.id)}>
			{item.text}
		</li>
	)
}

export default Todo;