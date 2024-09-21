const auth = require("../controllers/auth.ts");

const server = require("../server.json");
const express = require("express");
const mariadb = require("mariadb");
const setConn = async () => {
  let conn;

  try {
    conn = await mariadb.createConnection({
      host: server.host,
      user: server.user,
      password: server.password,
      database: server.database,
      connectionLimit: 5,
    });
  } finally {
    return conn;
  }
};

async function adicionarFavorecido(req) {
  const conn = await setConn();
  await conn.query("use cnab");
  if (!req.body.email || !req.body.senha) {
    return "Usuário não reconhecido";
  }
  const res = await auth.auth(req);
  if (res == true) {
    if (
      !req.body.data ||
      !req.body.data.num_doc_favorecido ||
      !req.body.data.nome_favorecido ||
      !req.body.data.cdg_banco_favorecido ||
      !req.body.data.num_conta_favorecido ||
      !req.body.data.num_agencia_favorecido ||
      !req.body.data.id
    ) {
      return { err: "Faltando dados" };
    } else {
      const response = await conn.query(
        `SELECT * FROM cnab.favorecidos WHERE id = "${req.body.data.id}";`,
      );
      if (response.length > 0) {
        await conn.query(
          `delete FROM cnab.favorecidos WHERE id = "${req.body.data.id}";`,
        );
      }
      const post = await conn.query(
        `insert into cnab.favorecidos values("${req.body.data.id}","${req.body.data.num_doc_favorecido}","${req.body.data.nome_favorecido}","${req.body.data.cdg_banco_favorecido}","${req.body.data.num_conta_favorecido}","${req.body.data.num_agencia_favorecido}")`,
      );
      return { msg: "Favorecido cadastrado com Sucesso" };
    }
  } else {
    return { err: "Usuário não autorizado" };
  }
}

async function deletarFavorecido(req) {
  const conn = await setConn();
  await conn.query("use cnab");
  if (!req.body.email || !req.body.senha) {
    return "Usuário não reconhecido";
  }
  const res = await auth.auth(req);
  if (res == true) {
    if (!req.body.data || !req.body.data.id) {
      return { err: "Faltando dados" };
    } else {
      const post = await conn.query(
        `delete FROM cnab.favorecidos WHERE id = "${req.body.data.id}";`,
      );
      return { msg: "Favorecido excluido com Sucesso" };
    }
  } else {
    return { err: "Usuário não autorizado" };
  }
}

async function listarFavorecidos(req) {
  const conn = await setConn();
  await conn.query("use cnab");
  if (!req.body.email || !req.body.senha) {
    return { err: "Usuário não reconhecido" };
  }
  const res = await auth.auth(req);
  if (res == true) {
    const post = await conn.query(
      `SELECT * FROM cnab.favorecidos`,
    );
    return post;
  } else {
    return { err: "Usuário não autorizado" };
  }
}

async function favorecido(req) {
  const conn = await setConn();
  await conn.query("use cnab");
  if (!req.body.email || !req.body.senha) {
    return { err: "Usuário não reconhecido" };
  }
  if (!req.body.data || !req.body.data.id) {
    return { err: "Faltando dados." };
  }
  const res = await auth.auth(req);
  if (res == true) {
    const post = await conn.query(
      `SELECT * FROM cnab.favorecidos WHERE id = "${req.body.data.id}";`,
    );
    return post;
  } else {
    return { err: "Usuário não autorizado" };
  }
}

module.exports = {
  adicionarFavorecido,
  deletarFavorecido,
  listarFavorecidos,
  favorecido,
};
