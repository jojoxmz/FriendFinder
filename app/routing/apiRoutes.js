var path = require("path");

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.send("BITCHES");
  });

  app.post("/api/friends", function(req, res) {
    var newFriends= req.body;

    res.json(newFriends);

    console.log(newFriends)
  });
};