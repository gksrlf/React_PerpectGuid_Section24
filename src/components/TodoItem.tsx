import React from "react"
import Todo from "../models/todo"
import classes from "./TodoItem.module.css"

const TodoItem = (props: { todo: Todo; onRemoveTodo: () => void }) => {
	return (
		<li className={classes.item} onClick={props.onRemoveTodo}>
			{props.todo.text}
		</li>
	)
}

export default TodoItem
