
<template>
  <main class="inicio">
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
</style>
