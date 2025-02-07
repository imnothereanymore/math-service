const express = require('express');
const app = express();
const PORT = process.env.PORT || 3005;

app.use(express.json());

app.get('/add', (req, res) => {
    const { a, b } = req.query;
    if (!a || !b) {
        return res.status(400).json({ error: "Параметры 'a' и 'b' обязательны" });
    }
    res.json({ result: Number(a) + Number(b) });
});

app.get('/subtract', (req, res) => {
    const { a, b } = req.query;
    if (!a || !b) {
        return res.status(400).json({ error: "Параметры 'a' и 'b' обязательны" });
    }
    res.json({ result: Number(a) - Number(b) });
});

app.listen(PORT, () => {
    console.log(`Сервер запущен`);
});
