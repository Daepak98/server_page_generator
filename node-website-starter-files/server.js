const express = require('express');
const firebase = require('firebase');
const app = express();
require("firebase/firestore");

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
	apiKey: "AIzaSyCuiweDbLGFewHZ8U9FFo99X27_8BJvKL8",
    authDomain: "shindig-c3e03.firebaseapp.com",
    projectId: "shindig-c3e03",
};
firebase.initializeApp(config);

var db = firebase.firestore();

app.set('view engine', 'pug');

const server = app.listen(7000, () => {
	console.log(`Express running → PORT ${server.address().port}`);
});

app.get('/', (req, res) => {
	res.render('index', {
		title: 'Making Memories',
		date: '4/09/19',
		loc: 'Ohio Union',
		desc: 'Party for your friends'
	});
});

app.get('/analytics', (req, res) => {
	res.send("duh");
})
