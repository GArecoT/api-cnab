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

async function adicionarEmpresa(req) {
  const conn = await setConn();
  await conn.query("use cnab");
  if (!req.body.email || !req.body.senha) {
    return "Usuário não reconhecido";
  }
  const res = await auth.auth(req);
  if (res == true) {
    if (
      !req.body.data || !req.body.data.cdg_banco ||
      !req.body.data.num_agencia ||
      !req.body.data.num_conta || !req.body.data.num_convenio ||
      !req.body.data.cdg_documento ||
      !req.body.data.num_doc || !req.body.data.nome_empresa ||
      !req.body.data.cdg_operacao ||
      !req.body.data.cdg_servico || !req.body.data.cdg_lancamento ||
      !req.body.data.cep ||
      !req.body.data.logradouro || !req.body.data.endereco_num ||
      !req.body.data.complemento ||
      !req.body.data.estado || !req.body.data.cidade ||
      !req.body.data.num_doc_empresa ||
      !req.body.data.id
    ) {
      return { err: "Faltando dados" };
    } else {
      const post = await conn.query(
        `insert into cnab.empresas values("${req.body.data.cdg_banco}","${req.body.data.num_agencia}","${req.body.data.num_conta}","${req.body.data.num_convenio}","${req.body.data.cdg_documento}","${req.body.data.num_doc}","${req.body.data.nome_empresa}","${req.body.data.cep}","${req.body.data.logradouro}","${req.body.data.endereco_num}","${req.body.data.complemento}","${req.body.data.estado}","${req.body.data.cidade}","${req.body.data.num_doc_empresa}","${req.body.data.id}","${req.body.data.cdg_lancamento}","${req.body.data.cdg_servico}","${req.body.data.cdg_operacao}")`,
      );
      return { msg: "Empresa cadastrada com Sucesso" };
    }
  } else {
    return { err: "Usuário não autorizado" };
  }
}

async function deletarEmpresa(req) {
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
        `delete FROM cnab.empresas WHERE id = "${req.body.data.id}";`,
      );
      return { msg: "Empresa excluida com Sucesso" };
    }
  } else {
    return { err: "Usuário não autorizado" };
  }
}

async function listarEmpresas(req) {
  const conn = await setConn();
  await conn.query("use cnab");
  if (!req.body.email || !req.body.senha) {
    return { err: "Usuário não reconhecido" };
  }
  const res = await auth.auth(req);
  if (res == true) {
    const post = await conn.query(
      `SELECT * FROM cnab.empresas`,
    );
    return post;
  } else {
    return { err: "Usuário não autorizado" };
  }
}

async function empresa(req) {
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
      `SELECT * FROM cnab.empresas WHERE id = "${req.body.data.id}";`,
    );
    return post;
  } else {
    return { err: "Usuário não autorizado" };
  }
}

module.exports = { adicionarEmpresa, deletarEmpresa, listarEmpresas, empresa };
