// Dependencies =======================

var db = require("../models")

// Routes =============================
module.exports = function (app) {

  // GET route for getting all of the posts - READ
  app.get("/api/posts", function (req, res) {
    db.Post.findAll({}).then(function (r) {
      res.json(r)
    })
  })

  // POST route for saving a new post - CREATE
  app.post("/api/posts", function (req, res) {
    db.Post.create({
      body: req.body.body,
    }).then(function (r) {
      res.json(r)
    })
  })

  // DELETE route for deleting posts - DELETE
  app.delete("/api/posts/:id", function (req, res) {
    db.Post.destroy({
        where: {
          id: req.params.id
        }
      })
      .then(function (r) {
        res.json(r)
      })
  })

  // PUT route for updating posts UPDATE
  app.put("/api/posts", function (req, res) {
    db.Post.update({
        body: req.body.body,
      }, {
        where: {
          id: req.body.id
        }
      })
      .then(function (r) {
        res.json(r)
      })
  })
}