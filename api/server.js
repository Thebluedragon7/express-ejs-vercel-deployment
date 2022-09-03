require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;
const apiRoutes = require("../routes/apiRoutes");
const homeRoutes = require("../routes/homeRoutes");

// setup view engine to ejs and Bootstrap
app.set("views", path.join(__dirname, "./views/"));
app.set("view engine", "ejs");
app.use(
  "/css",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/js"))
);
app.use(express.static(__dirname + "/public/"));

//routes
app.use("/", homeRoutes);
app.use("/api", apiRoutes);

//listen to port
app.listen(PORT, () => {
  console.log(`server is listening on ${PORT},
    http://localhost:${PORT}`);
});
