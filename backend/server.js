
const express = require("express");

const app = express();
const PORT = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Servidor RosaCupido funcionando! ❤️");
});
app.post("/cadastro", (req, res) => {
  const { nome, email, senha } = req.body ?? {};

  if (!nome || !email || !senha) {
    return res.status(400).json({
      mensagem: "Preencha todos os campos obrigatórios."
    });
  }

  res.status(201).json({
    mensagem: "Dados de cadastro recebidos com sucesso!"
  });
});  

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
