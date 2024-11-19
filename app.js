const express = require('express');
const app = express();
const port = 3000 || 8000;

app.get("/user/:id",(req,res) => {
    const userId = req.params.id;//dot notation
    res.send('user id is ${userId}');
});


app.listen(port, () => {
    console.log('server started on ${port}');
});