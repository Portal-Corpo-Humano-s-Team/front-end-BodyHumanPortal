<script setup>
import Header from '../../geral/Header.vue'
import imc from '../Calculadora/IMCView.vue'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const nameElement = ref('')
const birthdayElement = ref('')
const emailElement = ref('')
const errorMessage = ref('')
const router = useRouter()

onMounted(async () => {
  const token = localStorage.getItem('token')

  try {
    const response = await fetch(
      'https://back-end-bodyhumanportal.onrender.com/logged-user',
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    )

    if (!response.ok)
      throw new Error('Erro na requisição. Status: ' + response.status)

    const data = await response.json()
    nameElement.value = data.name
    birthdayElement.value = new Date(data.birthday).toLocaleDateString('pt-BR')
    emailElement.value = data.email
  } catch (error) {
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
          <h1 id="welcome">Bem-vindo, {{ nameElement.split(' ')[0] }}</h1>
          <button id="logout" type="button" @click="logoutUser">Logout</button>
        </div>

        <!-- Account Details Section -->
        <div class="dashboard">
          <h1>Detalhes da Conta</h1>
          <div class="user-info">
            <p>Nome: {{ nameElement }}</p>
            <p>Data de Nascimento: {{ birthdayElement }}</p>
            <p>Email: {{ emailElement }}</p>
          </div>
          <div id="error-message" class="error">{{ errorMessage }}</div>
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
          <a href="https://www.instagram.com/portal_corpohumano/"
            ><span class="fa-brands fa-instagram"></span
          ></a>
          <a href="mailto:portalcorpohumano@gmail.com"
            ><span class="fa-regular fa-envelope"></span
          ></a>
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
