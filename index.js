const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());


app.get('/commands', (req, res) => {
    fs.readFile('./WSLCommands.json', 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return res.status(500).json({ message: 'Error reading data' });
        }
        res.json(JSON.parse(data));
    });
});


app.get('/', (req,res)=>{
    res.send("Server is running successfully");
})

app.listen(PORT, ()=>{
    console.log(`Server on PORT ${PORT}`);
    
})