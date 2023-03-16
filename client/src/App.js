import React, { useState, useEffect } from "react";

function App() {
	const [apiData, setApiData] = useState("");

	useEffect(() => {
		fetch("/gpt/genImg")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setApiData(data);
			});
	}, []);

	return (
		<div className="img-fluid">
			<img src={apiData.image} alt="none found" />
		</div>
	);
}

export default App;
