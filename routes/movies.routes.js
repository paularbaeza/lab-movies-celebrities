// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require ("../models/Celebrity.model.js")
const Movie = require ("../models/Movie.model.js")

// all your routes here


//GET /"movies/create" => show a form to create a movie
router.get("/create", (req, res, next) => {
    Celebrity.find()
    .then((allCelebrities)=>{
        //console.log(allCelebrities)
        res.render("movies/new-movie.hbs", {
            allCelebrities
        });
    })
    .catch ((err)=> {
        next(err)
    })
  });


//POST /"movies/create" => send the data from the form to this route to create the movie and save it to the database
router.post("/create", (req, res, next) => {
    const { title, genre, plot, cast } = req.body;
    Movie.create({
      title,
      genre,
      plot,
      cast
    })
      .then(() => {
        res.redirect("/movies");
      })
      .catch((err) => {
        next(err);
      });
  });


//GET "/movies" => Show all movies

router.get("/", (req, res, next) => {
    Movie.find()
      .then((allMovies) => {
        //console.log(allMovies);
        res.render("movies/movies.hbs",
          {
           allMovies
          })
      })
      .catch((err) => {
        next(err);
      });
  });
  
//GET "/movies/:id" => Show a specific movie

router.get("/:movieId", (req, res, next)=> {
    const {movieId} = req.params
    Movie.findById(movieId)
    .populate("cast")
    .then((movieInfo)=> {
        //console.log(movieInfo)
        res.render ("movies/movie-details.hbs",
        {movieInfo})
    })
    .catch ((err)=> {
        next(err)
    })
})


//POST "/movies/:id/delete" => Delete a specific movie

router.post("/:movieId/delete", (req, res, next)=> {
    const{movieId} = req.params
    Movie.findByIdAndDelete(movieId)
    .then(() => {
        res.redirect("/movies");
    })
    .catch((err)=>{
        next(err)
    })
})



module.exports = router;