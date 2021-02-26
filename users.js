const express = require("express");

const router = express.Router();

const users = {};

router.get("/", (req, res) => {
    res.send(users);
})

router.post("/", (req,res) => {
    const user = req.body;
    const userId  = user.name.toLowerCase();
    users[userId] = user;
    res.status(201).send({userId : userId});
});

router.get("/:userId",(req,res) => {
    const userId = req.params.userId;
    const user = users[userId];
    if(user) {
        res.send(user);
    }
    else {
        res.status(400).send("User doesn't exist !!");
    }
});

