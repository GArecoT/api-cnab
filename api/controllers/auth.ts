const express = require("express");
const mariadb = require("mariadb");
const server = require("../server.json");
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

async function auth(req) {
  const conn = await setConn();
  await conn.query("use cnab");
  const post = await conn.query(
    `select * from usuarios
     where email = "` + req.body.email + `"`,
  );
  if (post.length < 1) {
    return { error: "Usuário não cadastrado" };
  }
  if (req.body.senha == post[0].senha) {
    return true;
  }
  return false;
}

module.exports = { auth };
