require("dotenv").config();
require("express-async-errors");

const express = require("express");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: ["https://epidemic-escapes.netlify.app/", "http://localhost:4200"],
  })
);

const db = require("./models");
db.sequelize
  .authenticate()
  .then(() => console.log("Connection DB successfull"))
  .catch((err) => console.log("Connection DB failed : ", err));

if (process.env.NODE_ENV === "development") {
  db.sequelize.sync({ force: true });
  // db.sequelize.sync({ alter: { drop: false } });
}

db.sequelize.sync({ force: true });

app.use(express.json());
app.use(express.static("public"));

const router = require("./routes");
app.use("/", router);

app.listen(process.env.PORT, () => {
  console.log(`Server API started on port:${process.env.PORT}`);
});
