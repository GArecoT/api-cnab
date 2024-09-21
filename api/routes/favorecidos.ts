module.exports = async (app) => {
  const favorecidos = require("../controllers/favorecidos.ts");

  const cors = require("cors");
  const corsOptions = {
    optionsSuccessStatus: 200, // For legacy browser support
  };
  app.use(cors(corsOptions));

  app.post("/api/listarFavorecidos", async (req, res) => {
    try {
      res.send(await favorecidos.listarFavorecidos(req));
    } catch (_error) {
      res.status(500).send({ err: "Erro Interno." });
    }
  });
  app.post("/api/adicionarFavorecido", async (req, res) => {
    try {
      res.send(await favorecidos.adicionarFavorecido(req));
    } catch (_error) {
      res.status(500).send({ err: "Erro Interno. Usuário duplicado?" });
    }
  });
  app.post("/api/deletarFavorecido", async (req, res) => {
    try {
      res.send(await favorecidos.deletarFavorecido(req));
    } catch (_error) {
      res.status(500).send({ err: "Erro Interno." });
    }
  });
  app.post("/api/favorecido", async (req, res) => {
    try {
      res.send(await favorecidos.favorecido(req));
    } catch (_error) {
      res.status(500).send({ err: "Erro Interno." });
    }
  });
};
