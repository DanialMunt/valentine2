const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, 'simp')));

app.listen(3000, () => {
    console.log("App working BLYa");
});