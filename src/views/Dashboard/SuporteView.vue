<script setup>
import Header from '../../geral/Header.vue'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { DateFormatter } from '/src/assets/utils.js' // Confirme o caminho correto

const router = useRouter()

// Variáveis reativas
const question = ref('')
const subject = ref('')
const responseMessage = ref('')
const emails = ref([])

// Funções de gerenciamento
const getEmails = async () => {
  try {
    // Carregar emails
    const emailData = await UserManeger.getEmails()
    emails.value = emailData
  } catch (error) {
    console.error('Erro ao carregar emails:', error) // Correção de erro de digitação com console.error
  }
}

const sendQuestion = async () => {
  const apiKey =
    'sk-ztoy7WK0Yxu97qC9rXivxIh0vtd_WfuG3HxCZ7eyc9T3BlbkFJ9SY5pgTl7tZTkzih66d2a5YTVGAINSO8UFBNZsD70A'
  const token = localStorage.getItem('token')

  if (!token) {
    responseMessage.value = 'Erro: Token de autenticação não encontrado.'
    return
  }

  try {
    // Requisição para OpenAI
    const aiResponse = await fetch(
      'https://api.openai.com/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: question },
          ],
        }),
      },
    )

    if (aiResponse.ok) {
      const aiData = await aiResponse.json()
      const gptResponse = aiData.choices[0].message.content

      // Envio do email com resposta do GPT
      const emailResponse = await fetch(
        'http://localhost:3000/users/sendHelpEmail',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            question: question.value,
            subject: subject.value,
            response: gptResponse,
          }),
        },
      )

      if (emailResponse.ok) {
        alert('Email enviado com sucesso?')
        getEmails() // Atualiza a lista de e-mails
      } else {
        const errorData = await emailResponse.json()
        responseMessage.value = 'Erro ao enviar o e-mail: ' + errorData.message
      }
    } else {
      const aiError = await aiResponse.json()
      responseMessage.value =
        'Erro ao se comunicar com a OpenAI: ' + aiError.message
    }
  } catch (error) {
    responseMessage.value = 'Erro ao enviar dúvida, tente novamente.'
    console.error(error)
  }
}

// Inicialização ao montar o componente
onMounted(() => {
  getEmails()
  if (!localStorage.getItem('token')) {
    router.push('/login') // Redireciona para login se o token não estiver disponível
  }
})
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
          <h1>Suporte</h1>
          <router-link to="/login">
            <button id="logout" type="button" @click="UserManeger.logoutUser()">
              Logout
            </button>
          </router-link>
        </div>

        <!-- Support Form Section -->
        <div class="support-section">
          <h3>Envie sua dúvida:</h3>
          <p>
            Envie suas dúvidas relacionadas aos temas abordados no Portal do
            Corpo Humano. Nossa equipe lhe responderá o mais rápido possível.
          </p>

          <form @submit.prevent="sendQuestion">
            <label for="subject"><span>Assunto:</span></label>
            <textarea
              id="subject"
              v-model="subject"
              placeholder="Digite o assunto da sua dúvida..."
              required
            ></textarea>

            <label for="question">Descrição da dúvida:</label>
            <textarea
              id="question"
              v-model="question"
              placeholder="Digite sua dúvida..."
              required
            ></textarea>

            <button type="submit">Enviar</button>
          </form>
          <p>{{ responseMessage }}</p>
        </div>

        <!-- Sent Emails Section -->
        <div class="emails-section">
          <h3>Últimas dúvidas enviadas</h3>
          <table id="emailsTable">
            <thead>
              <tr>
                <th>Assunto</th>
                <th>Data de Envio</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="email in emails" :key="email.id">
                <td>{{ email.subject }}</td>
                <td>{{ email.date }}</td>
              </tr>
            </tbody>
          </table>
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

.main-content {
  flex-grow: 1;
  padding: 20px;
}

div.cabecalho {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ecf0f1;
  padding: 15px;
  border-radius: 10px;
}

div.cabecalho h1 {
  font-size: 1.5rem;
}

.support-section {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.support-section h3 {
  margin-bottom: 15px;
  font-size: 18px;
}

.support-section form {
  display: flex;
  flex-direction: column;
}

.support-section label {
  font-size: 16px;
  margin: 20px 0 7px 0;
  font-weight: 600;
}

.support-section textarea#subject {
  width: 100%;
  /* Reduzido de 100% */
  margin: 5px 0 20px 0;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  resize: vertical;
  min-height: 30px;
  font-size: 1.03rem;
}

.support-section textarea#question {
  width: 100%;
  /* Mantém o campo de descrição no tamanho normal */
  margin: 5px 0 20px 0;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  resize: vertical;
  min-height: 120px;
  font-size: 1.03rem;
}

.support-section button {
  margin: 0 auto;
  justify-content: center;
  width: 100%;
  padding: 8px;
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.05rem;
}

.support-section button:hover {
  background-color: #34495e;
}

.emails-section {
  margin-top: 30px;
}

.emails-section h3 {
  font-size: 18px;
  margin-bottom: 15px;
}

.emails-section table {
  width: 100%;
  border-collapse: collapse;
}

.emails-section th,
.emails-section td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ccc;
}

button {
  padding: 0.5vw 1vw 0.5vw 1vw;
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
  margin-top: 4vw;
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
