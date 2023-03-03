const express = require("express");
const router = express.Router();

const { Configuration, OpenAIApi } = require("openai");
const config = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

router.get("/", (req, res) => {
	res.json({ data: "gpt route" });
});

router.get("/genImg", async (req, res) => {
	let image_url;
	try {
		const response = await openai.createImage({
			prompt: "a white siamese cat",
			n: 1,
			size: "1024x1024",
		});

		image_url = response.data.data[0].url;
		res.json({ image: image_url });
	} catch (error) {
		if (error.response) {
			console.error(error.response.status);
			console.error(error.response.data);
		} else {
			console.error(error.message);
		}
	}
});
module.exports = router;
