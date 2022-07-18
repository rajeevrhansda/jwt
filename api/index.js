const express = require("express");
const app = express();
app.use(express.json());

const user = [
    {
        id: 1,
        username: "John",
        password: "John0908",
        isAdmin: true
    },
    {
        id: 1,
        username: "John",
        password: "John0908",
        isAdmin: true
    }
]

app.post("/api/login", (req,res)=>{
    const {username , password} = req.body;
    res.json("hey it works")
});

app.listen(5000, () => console.log("Backend server is running"));