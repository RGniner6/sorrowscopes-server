const fs = require("fs");
const express = require('express');
const morgan = require('morgan');
const sorrowscopeRouter = require('./routes/sorrowscopeRoutes');

const staticRoot = __dirname + '/angular-dist'
const app = express();

if (process.env.NODE_ENV === 'development')
    app.use(morgan('dev'));

/*BACKEND ROUTES*/
app.use('/api/sorrowscope', sorrowscopeRouter);



/*FONTEND ROUTES*/
// Serve only the static files form the dist directory
app.use(express.static( staticRoot));

//Any route that doesn't match backend routes need to be handled by Angular
app.use('/*', function(req, res) {
    res.sendFile(staticRoot + '/index.html');
});



/* EXPORT THE APP */
module.exports = app;
