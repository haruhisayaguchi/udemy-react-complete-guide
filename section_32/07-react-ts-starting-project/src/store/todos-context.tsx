import { createContext, FC, useState } from "react";
import Todo from "../models/todo";

type TodosContextModel = {
	items: Todo[],
	addTodo: (text: string) => void,
	removeTodo: (id: string) => void
}

export const TodosContext = createContext<TodosContextModel>({
	items: [],
	addTodo: (text: string) => { },
	removeTodo: (id: string) => { }
})

const TodosContextProvider: FC = ({ children }) => {
	const [todos, setTodos] = useState<Todo[]>([])

	function addTodoHandler(text: string) {
		setTodos(prev => [...prev, new Todo(text)])
	}

	function removeTodoHandler(id: string) {
		setTodos(prev => prev.filter(item => item.id !== id))
	}

	const contextValue: TodosContextModel = {
		items: todos,
		addTodo: addTodoHandler,
		removeTodo: removeTodoHandler
	}

	return (
		<TodosContext.Provider value={contextValue}>
			{children}
		</TodosContext.Provider>
	)
}

export default TodosContextProvider;