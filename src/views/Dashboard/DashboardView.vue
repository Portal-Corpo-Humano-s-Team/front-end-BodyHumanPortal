<script setup>
import Header from '../../geral/Header.vue'
import Footer from '@/geral/Footer.vue'
import imc from '../Calculadora/IMCView.vue'
import { get } from '@/utils/fetch.js'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Definindo as referências reativas para os dados do usuário
const userData = ref(null)
const userName = ref('')
const userBirthday = ref('')
const userEmail = ref('')
const errorMessage = ref('')

onMounted(async () => {
  try {
    // Chamando a função `get` com await para aguardar a resposta
    const data = await get('logged-user', { isAuthenticated: true })

    // Populando os dados do usuário
    userData.value = data
    userName.value = data.name
    userBirthday.value = new Date(data.birthday).toLocaleDateString('pt-BR')
    userEmail.value = data.email
  } catch (error) {
    // Exibindo mensagem de erro
    errorMessage.value = error.message
  }
})

function logoutUser() {
  localStorage.removeItem('token')
  router.push('/login')
}
</script>

<template>
  <Header />
  <main>
    <div class="container">
      <!-- Sidebar -->
      <div class="sidebar">
        <h2>Portal do Corpo Humano</h2>
        <ul>
          <li><router-link to="/dashboard">Dashboard</router-link></li>
          <li><router-link to="/suporte">Suporte</router-link></li>
          <li><router-link to="/seguranca">Segurança</router-link></li>
        </ul>
      </div>

      <!-- Main Content -->
      <div class="main-content">
        <div class="cabecalho">
          <h1 id="welcome">Bem-vindo, {{ userName }}</h1>
          <button id="logout" type="button" @click="logoutUser">Logout</button>
        </div>

        <!-- Account Details Section -->
        <div class="dashboard">
          <h1>Detalhes da Conta</h1>
          <div class="user-info" v-if="userData">
            <p>Nome: {{ userName }}</p>
            <p>Data de Nascimento: {{ userBirthday }}</p>
            <p>Email: {{ userEmail }}</p>
          </div>
          <div v-else id="error-message" class="error">
            {{ errorMessage }}
          </div>
        </div>

        <!-- Links Section -->
        <div class="links">
          <h2>Calcule seu IMC</h2>
          <div>
            <imc />
          </div>
        </div>
        <footer>
          <hr />
          <p>
            &copy; 2024 Todos os direitos reservados - Portal do Corpo Humano
          </p>
          <a href="https://www.instagram.com/portal_corpohumano/">
            <span class="fa-brands fa-instagram"></span>
          </a>
          <a href="mailto:portalcorpohumano@gmail.com">
            <span class="fa-regular fa-envelope"></span>
          </a>
        </footer>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  padding: 2vw 0 0 0;
}

.container {
  display: flex;
  padding: 2vw 0 0 0;
}

/* Sidebar Styles */
.sidebar {
  width: 250px;
  background-color: #2c3e50;
  height: 46vw;
  padding: 20px;
  color: #fff;
}

.sidebar h2 {
  text-align: center;
  margin: 3vw 0 30px;
}

.sidebar ul {
  list-style: none;
}

.sidebar ul li {
  margin-bottom: 20px;
}

.sidebar ul li a {
  color: #fff;
  text-decoration: none;
  display: block;
  padding: 10px;
  background-color: #34495e;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.sidebar ul li a:hover {
  background-color: #1abc9c;
}

/* Main Content Styles */
.main-content {
  flex-grow: 1;
  padding: 20px;
}

.cabecalho {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ecf0f1;
  padding: 15px;
  border-radius: 10px;
}

.cabecalho h1 {
  font-size: 24px;
}

.dashboard {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.dashboard h1 {
  margin-bottom: 20px;
  font-size: 20px;
  color: #2c3e50;
}

.user-info p {
  margin-bottom: 10px;
  font-size: 16px;
}

.feedback-link {
  background-color: #010a5c;
  color: #fff;
  cursor: pointer;
  padding: 3px 32px;
  border-radius: 5px;
  text-decoration: none;
}

.feedback-link:hover {
  background-color: #020528;
}

.links h2 {
  background-color: #2c3e50;
  border-radius: 20px;
  padding: 1vw;
  margin-top: 2vw;
  color: #fff;
  font-size: 18px;
  text-align: center;
}

.links div {
  text-align: center;
}

button {
  padding: 0.5vw 1vw;
  border-radius: 20px;
  background-color: #2c3e50;
  color: white;
}

button:hover {
  background-color: #34495e;
  cursor: pointer;
}

footer {
  text-align: center;
  margin-top: 9vw;
}

footer hr {
  border-top: 1px#010A5C solid;
  margin: 0 12vw 0 12vw;
}

footer p {
  margin: 2vw 0 1vw 0;
}

footer a {
  color: #010a5c;
  padding: 3vw 1vw 2vw 0;
  font-size: 1.25rem;
}
</style>
