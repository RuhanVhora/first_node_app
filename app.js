const express = require('express')
const app = express()
const port = 3000 || 8000;
 
app.use((req,res,next)=>{
    console.log(`Request recevied: ${req.method}, ${req.url}`);
    next();
});
app.get("/user/:id",(req,res) => {
    const userId = req.params.id ; // dot notation
    res.send(`User id is ${userId}`);
});

app.get("/search",(req,res) => {
    const query =req.params.q;
    res.send (`Search query is : ${query}`);
});

app.use(express.json());


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => {
    console.log(`Connected to port ${port}`)
})