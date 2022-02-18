const express = require("express");

const app = express();

const PORT = 3000;

const friends = [
  {
    id: 0,
    name: "Fat guy Newton",
  },
  {
    id: 1,
    name: "James Blonde",
  },
];

app.get("/friends", (req, res) => {
  res.json(friends);
});

app.get("/friends/:friendId", (req, res) => {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(400).json({
      error: "Friend does not exist buddy o",
    });
  }
});

app.get("/messages", (req, res) => {
  res.send("<ul><li>Hello Albert! </li></ul>");
});

app.post("/messagesu", (req, res) => {
  console.log("Updating messages...");
});

app.listen(PORT, () => {
  console.log(`Listening onn ${PORT}...`);
});

import React, { Component } from "react";

rf;
