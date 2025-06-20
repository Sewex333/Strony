const cors = require("cors")
const express = require("express")

const app = express();
app.use(cors());
app.use(express.json());

app.get("/pawel", (req, res) => {
    return res.json({"message": "pawel lubi czarne fiuty"});
})

app.listen(8000, () => {
    console.log("backend dziala na porcie 8000");
})