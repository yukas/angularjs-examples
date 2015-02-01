var connect = require("connect"),
    serveStatic = require("serve-static");

var app = connect();
app.use(serveStatic("../todo"));
app.listen(5000)