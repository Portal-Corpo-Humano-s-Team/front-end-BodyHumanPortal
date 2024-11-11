<script setup>
import router from '@/router'
import Header from '../../geral/Header.vue'
import Footer from '../../geral/Footer.vue'

import 'https://kit.fontawesome.com/043425478c.js'

import { ref, onMounted } from 'vue'

const userLogin = ref({
  email: '',
  password: '',
})

async function login(event) {
  event.preventDefault() // Evita o recarregamento da página

  try {
    const response = await fetch(
      'https://back-end-bodyhumanportal.onrender.com/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: userLogin.value.email,
          password: userLogin.value.password,
        }),
      },
    )

    if (response.ok) {
      const data = await response.json()
      console.log(data)
      const token = data.token
      console.log(token)

      localStorage.setItem('token', token)
      alert('Login efetuado com sucesso!')
      router.push('/dashboard')
    } else {
      alert('Erro ao efetuar login.')
    }
  } catch (error) {
    alert('Erro ao efetuar login.')
    console.error(error)
  }
}
</script>

<template>
  <Header />
  <main>
    <form id="userLogin" @submit="login">
      <div class="principal">
        <h1>Login</h1>
        <!--título-->
        <p>
          <!--email-->
          <input
            type="email"
            v-model="userLogin.email"
            name="email"
            id="email"
            required
            placeholder="e-mail"
          />
          <label for="email"><i class="fa-solid fa-user"></i></label>
        </p>
        <!--end email-->
        <p>
          <!--password-->
          <input
            type="password"
            v-model="userLogin.password"
            name="password"
            id="password"
            required
            placeholder="senha"
          />
          <label for="password"><i class="fa-solid fa-lock"></i></label>
        </p>
        <!--end password-->
        <button type="submit">Login</button>
        <p>
          Não tem uma conta?
          <RouterLink
            to="/cadastro"
            style="text-decoration: none; color: #010a5c"
            >Registre-se</RouterLink
          >
        </p>
      </div>
    </form>
  </main>
  <Footer />
</template>

<style scoped>
main {
  background-color: #010a5c;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

form {
  display: flex;
  justify-content: center;
}

div.principal {
  width: 600px;
  /* Aumentei a largura da caixa de cadastro */
  height: auto;
  /* Permite que a altura se ajuste ao conteúdo */
  border-radius: 20px;
  background-color: white;
  text-align: center;
  padding: 30px;
  /* Adiciona mais espaço interno */
}

button {
  color: white;
  width: 350px;
  /* Aumentei a largura do botão */
  height: 40px;
  /* Mantive a altura */
  background-color: #010a5c;
  border: solid #000e91 1px;
  border-radius: 20px;
  font-size: 15px;
  cursor: pointer;
  margin-top: 10px;
  margin: 1vw;
  /* Espaço acima do botão */
}

button:hover {
  background-color: #020528;
}

input[type='email'],
input[type='password'] {
  width: 80%;
  /* Ajustei a largura dos inputs para caberem na nova caixa */
  padding: 12px;
  margin: 5px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
}

input:focus {
  border-color: #2265a9;
  outline: none;
}

i {
  margin: 0 0 0 5px;
}
</style>
