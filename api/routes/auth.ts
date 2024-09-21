module.exports = async (app) => {
  const auth = require("../controllers/auth.ts");

  const cors = require("cors");
  var corsOptions = {
    origin: "http://localhost:4321",
    optionsSuccessStatus: 200, // For legacy browser support
  };
  app.use(cors(corsOptions));

  app.post("/api/auth", async (req, res) => {
    res.send(await auth.auth(req));
  });
};
