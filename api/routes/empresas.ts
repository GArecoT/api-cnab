module.exports = async (app) => {
  const empresas = require("../controllers/empresas.ts");

  const cors = require("cors");
  const corsOptions = {
    optionsSuccessStatus: 200, // For legacy browser support
  };
  app.use(cors(corsOptions));

  app.post("/api/listarEmpresas", async (req, res) => {
    try {
      res.send(await empresas.listarEmpresas(req));
    } catch (_error) {
      res.status(500).send({ err: "Erro Interno." });
    }
  });
  app.post("/api/adicionarEmpresa", async (req, res) => {
    try {
      res.send(await empresas.adicionarEmpresa(req));
    } catch (_error) {
      res.status(500).send({ err: "Erro Interno. Usuário duplicado?" });
    }
  });
  app.post("/api/deletarEmpresa", async (req, res) => {
    try {
      res.send(await empresas.deletarEmpresa(req));
    } catch (_error) {
      res.status(500).send({ err: "Erro Interno." });
    }
  });
  app.post("/api/empresa", async (req, res) => {
    try {
      res.send(await empresas.empresa(req));
    } catch (_error) {
      res.status(500).send({ err: "Erro Interno." });
    }
  });
};
