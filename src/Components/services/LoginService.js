const express = require('express');
const axios = require('axios');

const app = express();
const port = 3001;

app.use(express.json());

app.get('/api/validateUser/:user', async (req, res) => {
  const { user } = req.params;

  try {
    const response = await axios.get(
      `https://loggin-5d879-default-rtdb.firebaseio.com/${user}.json`
    );
    res.json(response.data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error al obtener datos del servidor.' });
  }
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});