const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('./db/mongoose');
const {ObjectId} = require('mongodb');
const bodyParser = require('body-parser');
const {Server, Website, WpUser} = require('./db/models');

//Load middleware
app.use(bodyParser.json());

//CORS header
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
});

/*SERVER*/
/**
 * GET /servers
 * Get all servers
 */
app.get('/servers', (req, res) => {
    try {
        Server.find({deleteFlag: false}).then((servers) => {res.send(servers)});
    } catch(error){
        res.status(error.response.status);
        return res.send(error.message);
    }
});
//Return a list of all Servers

/**
 * POST /server
 * create a server
 */
app.post('/servers', (req, res) => {
    try {
        let title = req.body.title;
        let ip = req.body.ip;
        let login = req.body.login;
        let software = req.body.software;
        let description = req.body.description;
        let newServer = new Server({title, ip, login, software, description});
        newServer.save().then((serverDoc) => {
            res.send(serverDoc);
        });
    } catch(error){
        res.status(error.response.status);
        return res.send(error.message);
    }
});

/**
 * PATCH /server/:id
 * update a server
 */
app.patch('/servers/:id', (req, res) => {
    try {
        Server.findOneAndUpdate({_id: req.params.id},
            { $set: req.body }).then(() => {
            res.sendStatus(200);
        });
    } catch(error){
        res.status(error.response.status);
        return res.send(error.message);
    }
});
//update a specific server

/**
 * DELETE /server/:id
 * delete a server (soft delete)
 */
app.delete('/servers/:id', (req, res) => {
    try {
        Server.findOneAndUpdate({_id: req.params.id},
            {$set: {"deleteFlag": true} }).then(() => {
            res.sendStatus(200);
        });
    } catch(error){
        res.status(error.response.status);
        return res.send(error.message);
    }
});




/*WEBSITES*/
/**
 * GET /servers/:serverid/websites
 * Get all websites for a server
 */
app.get('/servers/:id/websites', (req, res) => {
    try {
        Website.find({$and: [{_serverID: req.params.id}, {deleteFlag: false}]  }).then((websites) => {res.send(websites)});
    } catch(error){
        res.status(error.response.status);
        return res.send(error.message);
    }
});


/**
 * POST /websites
 * create a website
 */
app.post('/websites', (req, res) => {
    try {
        let title = req.body.title;
        let domains = req.body.domains;
        let description = req.body.description;
        let createDate = req.body.createDate;
        let expirationDate = req.body.expirationDate;
        let hostedIntern = req.body.hostedIntern;
        let WPVersion = req.body.wpVersion;
        let WPAutoUpdate = req.body.wpAutoUpdate;
        let _serverID = req.body._serverID;



        let newWebsite = new Website({title, domains, description, createDate, expirationDate, hostedIntern, WPVersion, WPAutoUpdate, _serverID});

        newWebsite.save().then((websiteDoc) => {
            res.send(websiteDoc);
        });
    } catch(error) {
        res.status(error.response.status);
        return res.send(error.message);
    }
});

/**
 * PATCH /websites/:id
 * update a website
 */
app.patch('/websites/:id', (req, res) => {
    try {
        Website.findOneAndUpdate({_id: req.params.id},
            { $set: req.body }).then(() => {
            res.sendStatus(200);
        });
    } catch(error){
        res.status(error.response.status);
        return res.send(error.message);
    }
});
//update a specific server

/**
 * DELETE /websites/:id
 * delete a website (soft delete)
 */
app.delete('/websites/:id', (req, res) => {
    try {
        Website.findOneAndUpdate({_id: req.params.id},
            {$set: {"deleteFlag": true} }).then(() => {
            res.sendStatus(200);
        });
    } catch(error){
        res.status(error.response.status);
        return res.send(error.message);
    }
});


/*WP USERS*/
/**
 * GET /wp-users
 * Get all wp users
 */
app.get('/wp-users', (req, res) => {
    try {
        WpUser.find({deleteFlag: false}).then((wpUsers) => {res.send(wpUsers)});
    } catch(error){
        res.status(error.response.status);
        return res.send(error.message);
    }
});



/**
 * GET /users/:website-id
 * Get all users for a website
 */
app.get('/users/:id', (req, res) => {
    try {
        WpUser.find({ $and: [{_websiteID: req.params.id}, {deleteFlag: false}] }).then((websites) => {res.send(websites)});
    } catch(error){
        res.status(error.response.status);
        return res.send(error.message);
    }
});

/**
 * POST /wp-users
 * create a wp-user
 */
app.post('/wp-users', (req, res) => {
    try {
        let firstName = req.body.firstName;
        let lastName = req.body.lastName;
        let mail = req.body.mail;
        let _websiteID = req.body. _websiteID;
        let newWpUser = new WpUser({firstName, lastName, mail, _websiteID});
        newWpUser.save().then((serverDoc) => {
            res.send(serverDoc);
        });
    } catch(error){
        res.status(error.response.status);
        return res.send(error.message);
    }
});

/**
 * PATCH /wp-users/:id
 * update a wp-user
 */
app.patch('/wp-users/:id', (req, res) => {
    try {
        WpUser.findOneAndUpdate({_id: req.params.id},
            { $set: req.body }).then(() => {
            res.sendStatus(200);
        });
    } catch(error){
        res.status(error.response.status);
        return res.send(error.message);
    }
});

/**
 * DELETE /wp-users/:id
 * soft delete a wp-user
 */
app.delete('/wp-users/:id', (req, res) => {
    try {
        WpUser.findOneAndUpdate({_id: req.params.id},
            {$set: {"deleteFlag": true} }).then(() => {
            res.sendStatus(200);
        });
    } catch(error){
        res.status(error.response.status);
        return res.send(error.message);
    }
});


app.listen(port, () => console.log(`WAT app listening on port ${port}!`));
