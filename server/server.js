const path = require("path");
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

// use routers
const openAiRouter = require("./routes/openAi");
app.use("/gpt", openAiRouter);

// listen to port
app.listen(PORT, () => {
	console.log(`server listening on ${PORT}`);
});
// Have Node serve the files for our built React app
// app.use(express.static(path.resolve(__dirname, '../client/build')));

// All other GET requests not handled before will return our React app

// app.get('*', (req, res) => {
// 	res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
// });

app.get("/text", (req, res) => {
	res.json({ data: "this is data" });
});
