const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});


const celebrityRoutes = require ("./celebrities.routes.js")
router.use("/celebrities", celebrityRoutes)

module.exports = router;
