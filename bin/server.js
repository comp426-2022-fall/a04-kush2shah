#!/usr/bin/env node

// import roll function
import {roll} from "./lib/roll.js";

// require express
const express = require('express');
const app = express();

// require http module
const http = require('http');

// require minimist and process arguments
const args = require('minimist')(process.argv.slice(2));

// set port to 5000 if no argument is given
const port = args.port || 5000;

app.get('/app/', (req, res) => {
    res.status(200).send('200 OK');
})

app.get('/app/roll', (req, res) => {
    let sides = 6;
    let dice = 2;
    let rolls = 1;
    res.status(200).send(roll(sides, dice, rolls));
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});