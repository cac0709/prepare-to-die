var express = require("express"),
app = express.createServer(express.logger());

app.get("/", function(req, res) {
    res.sendfile(__dirname + '/login.html', function(err) {
        if (err) res.send(404);
    });
});

app.get(/(.*)\.(jpg|gif|png|ico|css|js|txt)/i, function(req, res) {
    res.sendfile(__dirname + "/" + req.params[0] + "." + req.params[1], function(err) {
        if (err) res.send(404);
    });
});

port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
