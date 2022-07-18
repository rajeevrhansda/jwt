const express = require("express");
const jwt = require("jsonwebtoken")
const app = express();
app.use(express.json());

const users = [
    {
        id: 1,
        username: "John",
        password: "john0908",
        isAdmin: true
    },
    {
        id: 1,
        username: "Jane",
        password: "jane0908",
        isAdmin: true
    }
]

app.post("/api/login", (req,res)=>{
    const {username , password} = req.body;
    const user = users.find((u)=>{
        return u.username === username && u.password === password;
    });
    if(user){
        //GENERATE ACCESS TOKEN
        const accessToken = jwt.sign(
            {id: user.id,isAdmin: user.isAdmin},
            "mySecretKey"
        );
        res.json({
            username: user.username,
            isAdmin: user.isAdmin,
            accessToken
        });
    }
    else{
        res.status(400).json("Username or password is incorrect")
    }
});

app.listen(5000, () => console.log("Backend server is running"));