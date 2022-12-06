import React, { ReactNode, useState } from "react"
import Todo from "../models/todo"

type InitialTodo = {
	items: Todo[]
	addTodo: (text: string) => void
	removeTodo: (id: string) => void
}

export const TodosContext = React.createContext<InitialTodo>({
	items: [],
	addTodo: () => {},
	removeTodo: (id: string) => {},
})

const TodosContextProvider = (props: { children: ReactNode }) => {
	const [todos, setTodos] = useState<Todo[]>([])

	const addTodoHandler = (todoText: string) => {
		const newTodo = new Todo(todoText)

		setTodos((prevTodos) => {
			return prevTodos.concat(newTodo)
		})
	}

	const removeTodoHandler = (todoId: string) => {
		setTodos((prevTodos) => {
			return prevTodos.filter((todo) => todo.id !== todoId)
		})
	}

	const contextValue: InitialTodo = {
		items: todos,
		addTodo: addTodoHandler,
		removeTodo: removeTodoHandler,
	}

	return (
		<TodosContext.Provider value={contextValue}>
			{props.children}
		</TodosContext.Provider>
	)
}

export default TodosContextProvider
