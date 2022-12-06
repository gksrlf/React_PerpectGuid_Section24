import React, { useContext, useRef } from "react"
import { TodosContext } from "../store/todos-context"
import classes from "./NewTodo.module.css"
const NewTodo = () => {
	const todosCtx = useContext(TodosContext)
	const todoTextInputRef = useRef<HTMLInputElement>(null)

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault()

		const enteredText = todoTextInputRef.current!.value
		if (enteredText.trim().length === 0) {
			return
		}

		todosCtx.addTodo(enteredText)
	}

	return (
		<form onSubmit={submitHandler} className={classes.form}>
			<label htmlFor="text">Todo Text</label>
			<input ref={todoTextInputRef} type="text" id="text" />
			<button>Add Todo</button>
		</form>
	)
}

export default NewTodo
