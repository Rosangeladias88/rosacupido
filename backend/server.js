require("dotenv").config();
const session = require("express-session");   
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const conexao = require("./conexao");

const app = express();
const PORT = 3000;

app.use(cors({origin: "http://localhost:5173"}));
app.use(express.json());

app.use(session({
  name: "rosacupido.sid",
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    maxAge: 1000 * 60 * 60
  }
}));

app.get("/", (req, res) => {
  res.send("Servidor RosaCupido funcionando! ❤️");
});

app.post("/cadastro", async (req, res) => {
  try {
    const { nome, email, senha } = req.body ?? {};

    if (
      typeof nome !== "string" ||
      typeof email !== "string" ||
      typeof senha !== "string" ||
      !nome.trim() ||
      !email.trim() ||
      !senha
    ) {
      return res.status(400).json({
        mensagem: "Preencha todos os campos corretamente."
      });
    }

    if (senha.length < 8 || Buffer.byteLength(senha, "utf8") > 72) {
      return res.status(400).json({
        mensagem: "A senha deve ter pelo menos 8 caracteres e no máximo 72 bytes."
      });
    }

    const senhaHash = await bcrypt.hash(senha, 12);

    await conexao.execute(
      "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)",
      [nome.trim(), email.trim().toLowerCase(), senhaHash]
    );

    return res.status(201).json({
      mensagem: "Cadastro realizado com sucesso!"
    });

  } catch (erro) {
    if (erro.code === "ER_DUP_ENTRY") {
      return res.status(409).json({
        mensagem: "Este e-mail já está cadastrado."
      });
    }

    console.error("Erro ao cadastrar usuário:", erro.message);

    return res.status(500).json({
      mensagem: "Erro interno ao realizar cadastro."
    });
  }
});


app.post("/login", async (req, res) => {
  try {
    const { email, senha } = req.body ?? {};

    if (
      typeof email !== "string" ||
      typeof senha !== "string" ||
      !email.trim() ||
      !senha
    ) {
      return res.status(400).json({
        mensagem: "Informe o e-mail e a senha."
      });
    }

    const [usuarios] = await conexao.execute(
      "SELECT id, nome, email, senha FROM usuarios WHERE email = ?",
      [email.trim().toLowerCase()]
    );

    if (usuarios.length === 0) {
      return res.status(401).json({
        mensagem: "E-mail ou senha inválidos."
      });
    }

    const usuario = usuarios[0];

    const senhaCorreta = await bcrypt.compare(
      senha,
      usuario.senha
    );

    if (!senhaCorreta) {
      return res.status(401).json({
        mensagem: "E-mail ou senha inválidos."
      });
    }

    
req.session.regenerate((erroSessao) => {
  if (erroSessao) {
    console.error("Erro ao criar sessão:", erroSessao);

    return res.status(500).json({
      mensagem: "Não foi possível iniciar a sessão."
    });
  }

  req.session.usuarioId = usuario.id;

  req.session.save((erroSalvar) => {
    if (erroSalvar) {
      console.error("Erro ao salvar sessão:", erroSalvar);

      return res.status(500).json({
        mensagem: "Não foi possível salvar a sessão."
      });
    }

    return res.status(200).json({
      mensagem: "Login realizado com sucesso!",
      usuario: {
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email
      }
    });
  });
});


  } catch (erro) {
    console.error("Erro ao verificar login:", erro.message);

    return res.status(500).json({
      mensagem: "Erro interno ao verificar login."
    });
  }
});


app.get("/sessao", (req, res) => {
  if (!req.session.usuarioId) {
    return res.status(401).json({
      mensagem: "Usuário não autenticado."
    });
  }

  return res.status(200).json({
    mensagem: "Sessão ativa!",
    usuarioId: req.session.usuarioId
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

