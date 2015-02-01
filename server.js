var connect = require("connect"),
    serveStatic = require("serve-static");

var app = connect();
app.use(serveStatic("../angularjs-examples"));
app.listen(5000)