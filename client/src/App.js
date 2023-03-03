import React, { useState, useEffect } from "react";

function App() {
	const [apiData, setApiData] = useState("");

	useEffect(() => {
		fetch("/gpt")
			.then((response) => response.json())
			.then((data) => {
				setApiData(data);
			});
	}, []);

	return <div className="App">{apiData.data}</div>;
}

export default App;
