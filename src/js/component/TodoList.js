import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const TodoList = () => {
	const [todos, setTodos] = useState([
		"Do Homework",
		"Do Laundry",
		"Catch up on my Videos"
	]);
	const [xIsShown, setXIsShown] = useState(false);
	const [isShown, setIsShown] = useState(false);

	// let handleXToggle = () => setState({ showBox: !this.state.showBox });

	let makeList = todos.map((item, i) => {
		console.log(i);
		const toDosShadow = {
			alignItems: "center",
			overflow: "hidden",
			borderRadius: "10px",
			boxShadow: "0 5px 7px -1px rgba(51, 51, 51, 0.23)",
			cursor: "pointer",
			transition:
				"transform .25s cubic-bezier(.7,.98,.86,.98), box-shadow .25s cubic-bezier(.7,.98,.86,.98)",
			backgroundColor: "#fff"
		};
		//  &:hover {
		//     transform: scale(1.2);
		//     box-shadow: 0 9px 47px 11px rgba(51, 51, 51, 0.18);
		//     }

		return (
			<ul
				key={i}
				style={toDosShadow}
				className="row list-inline m-2"
				onMouseEnter={() => setXIsShown(true)}
				onMouseLeave={() => setXIsShown(false)}>
				<li className="col-6 list-inline-item list-group-item-light">
					{item}
				</li>
				{xIsShown && (
					<button
						key={i}
						className="col-1 list-inline-item list-group-item-light float-right">
						X
					</button>
				)}
			</ul>
			// </ul>
		);
	});

	const newTodo = onKeyDownEvent => {
		console.log(onKeyDownEvent);
		if (onKeyDownEvent.keyCode === 13) {
			const userInput = onKeyDownEvent.target.value;
			const newToDoList = [...todos, userInput];
			setTodos(newToDoList);
			onKeyDownEvent.target.value = "";
		}
	};

	const listOfToDosShadow = {
		borderRadius: "10px",
		boxShadow:
			"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
	};

	return (
		<div
			className="p-2"
			style={{
				minWidth: "20%",
				maxWidth: 500
			}}>
			<input
				className="m-2"
				onKeyDown={newTodo}
				placeholder="Enter Todo"
				type="text"
				id="fname"
				name="fname"
				style={{ borderRadius: "10px" }}
			/>
			<ul className="m-2 p-2" style={listOfToDosShadow}>
				{makeList}
			</ul>

			<div className="App center">
				<button
					onMouseEnter={() => setIsShown(true)}
					onMouseLeave={() => setIsShown(false)}>
					Hover over me!
				</button>
				{isShown && (
					<div>I&apos;ll appear when you hover over the button.</div>
				)}
			</div>
		</div>
	);
};

export default TodoList;

TodoList.PropTypes = {};
