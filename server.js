const app = require("./config/express")();
const express = require("express");

const cors = require("cors");
const port = app.get("port");
// const corsOptions = {
//   origin: "http://localhost:4321",
//   optionsSuccessStatus: 200, // For legacy browser support
// };
app.use("/public", express.static("./public/"));
app.use(cors());
// RODANDO NOSSA APLICAÇÃO NA PORTA SETADA
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
