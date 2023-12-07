import React from "react";
import TodoList from "./TodoList.jsx";
//include images into your bundle


//create your first component
const Home = () => {
	return (
		<>
			<h1>TODO</h1>
			<TodoList />
		</>
	);
};

export default Home;
