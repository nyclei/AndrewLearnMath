#!/bin/env node

var express = require('express');
var fs      = require('fs');
var singleMath = require('./single-math.js');
var doubleMath = require('./double-math.js');
var path = require("path");
var SampleApp = function() {

    //  Scope.
    var self = this;

    /**
     *  Set up server IP address and port # using env variables/defaults.
     */
    self.ipaddress = "127.0.0.1";
    self.port = 8080;

    /**
     *  Populate the cache.
     */
    self.populateCache = function() {
        if (typeof self.zcache === "undefined") {
            self.zcache = { 'index.html': '' };
        }

        //  Local cache for static content.
        self.zcache['index.html'] = fs.readFileSync('./index.html');
    };


    /**
     *  Retrieve entry (content) from cache.
     *  @param {string} key  Key identifying content to retrieve from cache.
     */
    self.cache_get = function(key) { return self.zcache[key]; };


    /**
     *  terminator === the termination handler
     *  Terminate server on receipt of the specified signal.
     *  @param {string} sig  Signal to terminate on.
     */
    self.terminator = function(sig){
        if (typeof sig === "string") {
           console.log('%s: Received %s - terminating sample app ...',
                       Date(Date.now()), sig);
           process.exit(1);
        }
        console.log('%s: Node server stopped.', Date(Date.now()) );
    };


    /**
     *  Setup termination handlers (for exit and a list of signals).
     */
    self.setupTerminationHandlers = function(){
        //  Process on exit and signals.
        process.on('exit', function() { self.terminator(); });

        // Removed 'SIGPIPE' from the list - bugz 852598.
        ['SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT',
         'SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGTERM'
        ].forEach(function(element, index, array) {
            process.on(element, function() { self.terminator(element); });
        });
    };


    /*  ================================================================  */
    /*  App server functions (main app logic here).                       */
    /*  ================================================================  */

    /**
     *  Create the routing table entries + handlers for the application.
     */
    self.createRoutes = function() {
        self.routes = { };

        self.routes['/asciimo'] = function(req, res) {
            var link = "http://i.imgur.com/kmbjB.png";
            res.send("<html><body><img src='" + link + "'></body></html>");
        };

        self.routes['/'] = function(req, res) {
            res.setHeader('Content-Type', 'text/html');
            res.send(self.cache_get('index.html') );
        };

        self.routes['/single-addition'] =
                self.routes['/single-plus'] =
                self.routes['/single-add'] = function(req, res) {
            var num = req.param('num');
            res.setHeader('Content-Type', 'text/html');
            res.write('<html>')
            res.write(outputHead());
            res.write('<body>');
            res.write('<div class=singleItem >');
            res.write(singleMath.plus(num, null, 'div'));
            res.write("</div>");
            res.write('</body>');
            res.write('</html>');

            res.send();
        }

        self.routes['/single-subtract'] = self.routes['/single-minus'] = function(req, res) {
            var num = req.param('num');
            res.setHeader('Content-Type', 'text/html');

            res.write('<html>')
            res.write(outputHead());
            res.write('<body>');
            res.write('<div class=singleItem >');
            res.write(singleMath.minus(num, null, 'div'));
            res.write("</div>");
            res.write('</body>');
            res.write('</html>');
            res.send();
        }

        self.routes['/single-mix'] = function(req, res) {
            var num = req.param('num');
            res.setHeader('Content-Type', 'text/html');
            res.write('<html>')
            res.write(outputHead());
            res.write('<body>');
            res.write('<div class=singleItem >');

            res.write(singleMath.mix(num, null, 'div'));
            res.write("</div>");
            res.write('</body>');
            res.write('</html>');
            res.send();
        }

        self.routes['/verticalAdd2'] = function(req, res) {
          var num = req.param('num');
          res.setHeader('Content-Type', 'text/html');

          res.write('<html>')
          res.write(outputHead());
          res.write('<body>');
          res.write("<div class='main'>");
          res.write(doubleMath.vertical2(num, '', '+'));
          res.write("</div>");
          res.write('</body>');
          res.write('</html>');

          res.send()
        }

        self.routes['/verticalSub2'] = function(req, res) {
          var num = req.param('num');
          res.setHeader('Content-Type', 'text/html');

          res.write('<html>')
          res.write(outputHead());
          res.write('<body>');
          res.write("<div class='main'>");
          res.write(doubleMath.vertical2(num, '', '-'));
          res.write("</div>");
          res.write('</body>');
          res.write('</html>');

          res.send()
        }

        self.routes['/verticalAdd3'] = function(req, res) {
          var num = req.param('num');
          res.setHeader('Content-Type', 'text/html');

          res.write('<html>')
          res.write(outputHead());
          res.write('<body>');
          res.write("<div class='main'>");
          res.write(doubleMath.vertical3(num, '', '+'));
          res.write("</div>");
          res.write('</body>');
          res.write('</html>');

          res.send()
        }

        self.routes['/verticalSub3'] = function(req, res) {
          var num = req.param('num');
          res.setHeader('Content-Type', 'text/html');

          res.write('<html>')
          res.write(outputHead());
          res.write('<body>');
          res.write("<div class='main'>");
          res.write(doubleMath.vertical3(num, '', '-'));
          res.write("</div>");
          res.write('</body>');
          res.write('</html>');

          res.send()
        }

        self.routes['/single-multi'] = self.routes['/single-production'] = function(req, res) {
              var num = req.param('num');
              res.setHeader('Content-Type', 'text/html');
              res.write('<html>')
              res.write(outputHead());
              res.write('<body>');
              res.write('<div class=singleItem >');
              res.write(singleMath.multi(num, null, 'div'));
              res.write('</div>');
              res.write('</body>');
              res.write('</html>');
              res.send();
          }

          self.routes['/double-multi-horizontal'] = function(req, res) {
            var num = req.param('num');
            res.setHeader('Content-Type', 'text/html');
            res.write('<html>')
            res.write(outputHead());
            res.write('<body>');
            res.write('<div class=singleItem >');
            res.write(doubleMath.horizontal(num, null, 'div'));
            res.write('</div>');
            res.write('</body>');
            res.write('</html>');
            res.send();
          }

          self.routes['/double-multi-vertical'] = function(req, res) {
              var num = req.param('num');
              res.setHeader('Content-Type', 'text/html');
              res.write('<html>')
              res.write(outputHead());
              res.write('<body>');
              res.write("<div class='main'>");
              res.write(doubleMath.vertical2_1(num, '', 'x'));
              res.write('</div>');
              res.write('</body>');
              res.write('</html>');
              res.send();
         }

    };



    /**
     *  Initialize the server (express) and create the routes and register
     *  the handlers.
     */
    self.initializeServer = function() {
        self.createRoutes();

        //self.app = express.createServer();
        self.app = express();

//console.log(path.join(__dirname, 'favicon.ico'));
        //  Add handlers for the app (from the routes).

        self.app.use(express.static(__dirname)); //necessary line, then css/main.css can be loaded
        self.app.use(express.favicon(path.join(__dirname, 'favicon.ico')));

        for (var r in self.routes) {
            self.app.get(r, self.routes[r]);
        }
    };


    /**
     *  Initializes the sample application.
     */
    self.initialize = function() {

        self.populateCache();
        self.setupTerminationHandlers();

        // Create the express server and routes.
        self.initializeServer();
    };


    /**
     *  Start the server (starts up the sample application).
     */
    self.start = function() {
        //  Start the app on the specific interface (and port).
        self.app.listen(self.port, self.ipaddress, function() {
            console.log('%s: Node server started on %s:%d ...',
                        Date(Date.now() ), self.ipaddress, self.port);
        });
    };

};   /*  Sample Application.  */

function outputHead () {
    return '<head>'
            + '<link rel=\'stylesheet\' href=\'/css/main.css\'>'
           +'</head>';
};


/**
 *  main():  Main code.
 */
var app = new SampleApp();
app.initialize();
app.start();
