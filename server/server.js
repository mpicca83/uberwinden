const express = require("express");
const app = express();
const cors = require("cors");
const mercadopago = require("mercadopago");
const path = require('path');
const serverURL = "https://mpicca83.github.io/uberwinden/";

// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
mercadopago.configure({
	access_token: "TEST-2742985229574103-081518-c7be2c264f915d89c0903851c601772b-18044873",
});


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "../")));

app.use(cors());


app.get("/", function (req, res) {
	res.status(200).sendFile("index.html");
});

app.post("/create_preference", (req, res) => {

	let preference = {
		items: [
			{
				title: req.body.description,
				unit_price: Number(req.body.price),
				quantity: Number(req.body.quantity),
			}
		],
		back_urls: {
			//"success": "http://localhost:5500",
			//"failure": "http://localhost:5500",
			"success": `${serverURL}/`,
			"failure": `${serverURL}/`,
			"pending": ""
		},
		auto_return: "approved",
	};

	mercadopago.preferences.create(preference)
		.then(function (response) {
			res.json({
				id: response.body.id
			});
		}).catch(function (error) {
			console.log(error);
		});
});

app.get('/feedback', function (req, res) {
	res.json({
		Payment: req.query.payment_id,
		Status: req.query.status,
		MerchantOrder: req.query.merchant_order_id
	});
});

app.listen(5500, () => {
	console.log("The server is now running on Port 5500");
});