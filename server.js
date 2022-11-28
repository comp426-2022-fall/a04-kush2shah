#!/usr/bin/env node

// import roll function
import {roll} from "./roll.js";

// require express
import express from 'express';
const app = express();

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

app.get('/app/roll/:sides/', (req, res) => {
    let sides = req.params.sides;
    let dice = 2;
    let rolls = 1;
    res.status(200).send(roll(sides, dice, rolls));
})

app.get('/app/roll/:sides/:dice/', (req, res) => {
    let sides = req.params.sides;
    let dice = req.params.dice;
    let rolls = 1;
    res.status(200).send(roll(sides, dice, rolls));
})

app.get('/app/roll/:sides/:dice/:rolls/', (req, res) => {
    let sides = req.params.sides;
    let dice = req.params.dice;
    let rolls = req.params.rolls;
    res.status(200).send(roll(sides, dice, rolls));
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});