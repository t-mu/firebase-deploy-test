const functions = require('firebase-functions');
const express = require("express");
const app = express();

app.get("/", (req, res) => 
{
    const data = {
        ip: req.ip,
        forwardedFor: req.headers["x-forwarded-for"].split(",")[0],
        connectionRemoteAddress: req.connection.remoteAddress,
        socketRemoteAddress: req.socket.remoteAddress
    }

    res.send("Your public IP address is: " + data.forwardedFor);
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.app = functions.https.onRequest(app);