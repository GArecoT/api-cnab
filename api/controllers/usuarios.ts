const auth = require("../controllers/auth.ts");

const express = require("express");
const mariadb = require("mariadb");
const setConn = async () => {
  let conn;

  try {
    conn = await mariadb.createConnection({
      host: "localhost",
      user: "areco",
      password: "senha1234",
      database: "teste",
      connectionLimit: 5,
    });
  } finally {
    return conn;
  }
};

async function adicionarUsuario(req) {
  const conn = await setConn();
  await conn.query("use cnab");
  if (!req.body.email || !req.body.senha) {
    return "Usuário não reconhecido";
  }
  const res = await auth.auth(req);
  if (res == true) {
    if (!req.body.data || !req.body.data.email || !req.body.data.senha) {
      return { err: "Faltando dados" };
    } else {
      const post = await conn.query(
        `insert into cnab.usuarios values("` + req.body.data.email + `", "` +
          req.body.data.senha + `")`,
      );
      return { msg: "Usuário Cadastrado com Sucesso" };
    }
  } else {
    return { err: "Usuário não autorizado" };
  }
}

async function deletarUsuario(req) {
  const conn = await setConn();
  await conn.query("use cnab");
  if (!req.body.email || !req.body.senha) {
    return "Usuário não reconhecido";
  }
  const res = await auth.auth(req);
  if (res == true) {
    if (req.body.email == req.body.data.email) {
      return { err: "Não é possível deletar a própria conta" };
    }
    if (!req.body.data || !req.body.data.email) {
      return { err: "Faltando dados" };
    } else {
      const post = await conn.query(
        `delete FROM cnab.usuarios WHERE email = "${req.body.data.email}";`,
      );
      return { msg: "Usuário excluido com Sucesso" };
    }
  } else {
    return { err: "Usuário não autorizado" };
  }
}

async function listarUsuarios(req) {
  const conn = await setConn();
  await conn.query("use cnab");
  if (!req.body.email || !req.body.senha) {
    return { err: "Usuário não reconhecido" };
  }
  const res = await auth.auth(req);
  if (res == true) {
    const post = await conn.query(
      `SELECT * FROM cnab.usuarios`,
    );
    return post;
  } else {
    return { err: "Usuário não autorizado" };
  }
}

async function usuario(req) {
  const conn = await setConn();
  await conn.query("use cnab");
  if (!req.body.email || !req.body.senha) {
    return { err: "Usuário não reconhecido" };
  }
  if (!req.body.data || !req.body.data.email) {
    return { err: "Faltando dados." };
  }
  const res = await auth.auth(req);
  if (res == true) {
    const post = await conn.query(
      `SELECT * FROM cnab.usuarios WHERE email = "${req.body.data.email}";`,
    );
    return post;
  } else {
    return { err: "Usuário não autorizado" };
  }
}

module.exports = { adicionarUsuario, deletarUsuario, listarUsuarios, usuario };
