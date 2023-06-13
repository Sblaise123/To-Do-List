import React, { useState }from "react";



//create your first component
const Home = () => {
	const [inputPart, setinputPart] = useState("");
	const [todos, setTodos] = useState([]);
	return (
		<div className="Container">
			<h1>My To-Do List</h1>
			<ul>
				<li>
					<input type="text"
					onChange={(e) => setinputPart(e.target.value)}
					value={(inputPart)}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							setTodos(todos.concat(inputPart));
						}
					}}
					 placeholder="what is next to do ?"></input>
				</li>
				{todos.map((item, index) =>
				<li>{item}{""} <i className="fas fa-trash-alt" onClick={() => setTodos(
					todos.filter((t,currentIndex) => index != currentIndex)
				)}></i>
				 </li>
				)}
			</ul>
			<div>{todos.length} tasks</div>
		</div>
		
	);
};

export default Home;


