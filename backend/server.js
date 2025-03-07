const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/status', (req, res) => {
    res.send('API Online - DB Connected');
});

// Rota principal para evitar erro 404
app.get('/', (req, res) => {
    res.send('Backend Bancada Digital Rodando!');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
