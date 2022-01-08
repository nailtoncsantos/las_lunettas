import express from 'express';
import http from 'http';
import { All } from './collections';
const app = express();
app.use(express.json());
const server = http.createServer(app);

app.get('/list', async (req, res) => {
	const data = All.map((i) => ({
		id: i.id,
		name: i.name,
		bar: i.bar,
		lens: i.lens,
	}));

	res.send(data);
});
app.get('/detail/:id', async (req, res) => {
	const { id } = req.params;
	const [data] = All.filter((i) => i.id === id).map((i) => {
		const { avaliations, ...rest } = i;
		return rest;
	});
	res.send(data);
});
app.get('/avaliations/:id', async (req, res) => {
	const { id } = req.params;

	const [data] = All.filter((i) => i.id === id);

	res.send(data.avaliations);
});
export { server };
