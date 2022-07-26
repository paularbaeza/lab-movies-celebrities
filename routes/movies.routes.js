// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require ("../models/Celebrity.model.js")
const Movie = require ("../models/Movie.model.js")

// all your routes here


//GET /"movies/create" => show a form to create a movie
router.get("/create", (req, res, next) => {
    Celebrity.find()
    .then((allCelebrities)=>{
        console.log(allCelebrities)
        res.render("movies/new-movie.hbs", {
            allCelebrities
        });
    })
    .catch ((err)=> {
        next(err)
    })
  });



//POST /"movies/create" => send the data from the form to this route to create the movie and save it to the database







module.exports = router;