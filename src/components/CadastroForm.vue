<script setup>
import { ref } from 'vue'

const senha = ref('')
const confirmarSenha = ref('')
function validarCadastro() {
  if (senha.value !== confirmarSenha.value) {
    alert('As senhas não coincidem. Tente novamente.')
    return
  }

  alert('Formulário validado com sucesso!')
}
</script>
<template>
  <section class="cadastro">
    <div class="formulario">
      <h2>Crie sua conta ❤️</h2>

      <p>
        Sua próxima história começa aqui.
      </p>

      <form @submit.prevent="validarCadastro">
        <label for="nome">Nome completo</label>
        <input
          id="nome"
          type="text"
          placeholder="Digite seu nome"
          autocomplete="name"
          required
        />

        <label for="email">E-mail</label>
        <input
          id="email"
          type="email"
          placeholder="Digite seu e-mail"
          autocomplete="email"
          required
        />

        <label for="senha">Senha</label>
        <input
          id="senha"
          type="password"
          placeholder="Crie uma senha"
          autocomplete="new-password"
          minlength="8"
          required
          v-model="senha"
        />

        <label for="confirmarSenha">
          Confirmar senha
        </label>
        <input
          id="confirmarSenha"
          type="password"
          placeholder="Confirme sua senha"
          autocomplete="new-password"
          minlength="8"
          required
          v-model="confirmarSenha"
        />

        <button type="submit">
          Criar minha conta ❤️
        </button>
      </form>
    </div>
  </section>
</template>

<style scoped>
.cadastro {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  background-color: #fff0f2;
}

.formulario {
  width: 100%;
  max-width: 440px;
  background-color: white;
  padding: 35px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(139, 16, 40, 0.12);
}

h2 {
  color: #a7102d;
  text-align: center;
  margin-bottom: 10px;
}

p {
  color: #83515a;
  text-align: center;
  margin-bottom: 30px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

label {
  color: #71323e;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 13px;
  border: 1px solid #edcdd2;
  border-radius: 8px;
  font-size: 15px;
  background-color: white;
  color: #333;
}

input:focus {
  outline: 2px solid #c91635;
  outline-offset: 1px;
}

button {
  margin-top: 15px;
  padding: 14px;
  border: none;
  border-radius: 30px;
  background-color: #c91635;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}

button:hover {
  background-color: #a7102d;
}
</style>
