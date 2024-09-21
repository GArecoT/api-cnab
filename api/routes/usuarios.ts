module.exports = async (app) => {
  const usuarios = require("../controllers/usuarios.ts");

  const cors = require("cors");
  const corsOptions = {
    optionsSuccessStatus: 200, // For legacy browser support
  };
  app.use(cors(corsOptions));

  app.post("/api/listarUsuarios", async (req, res) => {
    try {
      res.send(await usuarios.listarUsuarios(req));
    } catch (_error) {
      res.status(500).send({ err: "Erro Interno." });
    }
  });
  app.post("/api/adicionarUsuario", async (req, res) => {
    try {
      res.send(await usuarios.adicionarUsuario(req));
    } catch (_error) {
      res.status(500).send({ err: "Erro Interno. Usuário duplicado?" });
    }
  });
  app.post("/api/deletarUsuario", async (req, res) => {
    try {
      res.send(await usuarios.deletarUsuario(req));
    } catch (_error) {
      res.status(500).send({ err: "Erro Interno." });
    }
  });
  app.post("/api/usuario", async (req, res) => {
    try {
      res.send(await usuarios.usuario(req));
    } catch (_error) {
      res.status(500).send({ err: "Erro Interno." });
    }
  });
};
