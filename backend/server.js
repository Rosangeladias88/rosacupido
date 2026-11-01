
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const conexao = require("./conexao");

const app = express();
const PORT = 3000;

app.use(cors({origin: "http://localhost:5173"}));
app.use(express.json());

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


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
