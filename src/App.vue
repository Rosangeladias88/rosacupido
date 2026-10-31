
<template>
  <div class="pagina">
    <header class="cabecalho">
      <a class="logo" href="#">
         RosaCupido
      </a>

      <nav class="navegacao" aria-label="Menu principal">
        <a href="#inicio">Início</a>
        <a href="#sobre">Sobre</a>
      </nav>

      <div class="acoes">
        <button type="button" class="botao-entrar">
          Entrar
        </button>

        <button type="button" class="botao-cadastro">
          Criar conta
        </button>
      </div>
    </header>

    <main id="inicio" class="inicio">
      <div class="conteudo">
        <h1> RosaCupido</h1>
        <h2>Encontre alguém especial</h2>

        <p>
          Onde conexões se transformam em histórias.
          Conheça pessoas, descubra afinidades
          e viva novas experiências.
        </p>

        <button type="button">
          Encontrar meu par ❤️
        </button>
      </div>
    </main>
  </div>
</template>


<style scoped>
.inicio {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(135deg, #8b1028, #ed4963);
  font-family: Arial, sans-serif;
}

.conteudo {
  max-width: 600px;
  padding: 30px;
  color: white;
}

h1 {
  font-size: 48px;
  margin-bottom: 20px;
}

h2 {
  font-size: 32px;
}

p {
  font-size: 18px;
  line-height: 1.6;
  margin: 25px 0;
}

button {
  background-color: white;
  color: #c91635;
  border: none;
  padding: 16px 32px;
  border-radius: 30px;
  font-size: 17px;
  font-weight: bold;
  cursor: pointer;
}

button:hover {
  background-color: #ffe1e6;
}


/* Estrutura principal */
.pagina {
  min-height: 100vh;
}

/* Cabeçalho */
.cabecalho {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 18px 6%;
  background-color: #fff5f6;
  flex-wrap: wrap;
}

/* Logotipo */
.logo {
  color: #a7102d;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
}

/* Navegação */
.navegacao {
  display: flex;
  align-items: center;
  gap: 28px;
}

.navegacao a {
  color: #7d3442;
  text-decoration: none;
  font-weight: 500;
}

.navegacao a:hover {
  color: #c91635;
}

/* Botões do cabeçalho */
.acoes {
  display: flex;
  align-items: center;
  gap: 12px;
}

.acoes button {
  padding: 11px 22px;
  font-size: 14px;
}

.botao-entrar {
  background-color: transparent;
  color: #a7102d;
  border: 1px solid #c91635;
}

.botao-cadastro {
  background-color: #c91635;
  color: white;
}

/* Ajuste para a altura do cabeçalho */
.inicio {
  min-height: calc(100vh - 90px);
}

/* Telas menores */
@media (max-width: 700px) {
  .cabecalho {
    justify-content: center;
    text-align: center;
  }

  .navegacao {
    justify-content: center;
  }
}

</style>
