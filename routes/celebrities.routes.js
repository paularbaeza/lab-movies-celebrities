// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model.js");

// all your routes here

//GET "/celebrities/create" => show a form to create a celebrity
router.get("/create", (req, res, next) => {
  res.render("celebrities/new-celebrity.hbs");
});

//POST "/celebrities/create" => send the data from the form to this route to create the celebrity and save it to the database
router.post("/create", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({
    name,
    occupation,
    catchPhrase,
  })
    .then(() => {
      res.redirect ("/celebrities");
    })
    .catch((err) => {
      next(err);
    });
});






module.exports = router;
