const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.post('/api/data', (req, res) => {
    console.log("odebrano dane z frontendu", req.body);

    

    res.json({message: "skibidi?"});
});

app.listen(PORT, () => {
    console.log("backend na port 6969");
})