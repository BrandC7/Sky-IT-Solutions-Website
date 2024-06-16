const express = require('express');
const path = require('path');

const PORT = 8080;

const app = express();

app.use(express.static(path.join(__dirname, '../Client/dist')));

app.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname, '../Client/dist/index.html'));
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));