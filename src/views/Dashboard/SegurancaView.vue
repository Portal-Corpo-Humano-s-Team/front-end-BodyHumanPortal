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

import { RedirectManager, UserManeger } from "../utils.js";
RedirectManager.redirectToLogin();
// Função para atualizar o e-mail do usuário
document.getElementById("emailForm").addEventListener("submit", async (event) => {
  event.preventDefault();

  const newEmail = document.getElementById("email").value;
  const token = localStorage.getItem("token"); // Pega o token de autenticação

  try {
    const response = await fetch("http://localhost:3000/update", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ email: newEmail }),
    });

    if (response.ok) {
      alert("E-mail atualizado com sucesso!");
      localStorage.removeItem("token");
      RedirectManager.redirectToLogin();
    } else {
      const errorData = await response.json();
      alert("Erro ao atualizar o e-mail: " + errorData.message);
    }
  } catch (error) {
    console.error("Erro na requisição:", error);
    alert("Erro ao tentar atualizar o e-mail.");
  }
});

// Função para atualizar a senha do usuário
document.getElementById("passwordForm").addEventListener("submit", async (event) => {
  event.preventDefault();

  const currentPassword = document.getElementById("current-password").value;
  const newPassword = document.getElementById("new-password").value;
  const token = localStorage.getItem("token"); // Pega o token de autenticação

  try {
    const response = await fetch("http://localhost:3000/update", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ currentPassword, newPassword }),
    });

    if (response.ok) {
      alert("Senha atualizada com sucesso!");
      localStorage.removeItem("token");
      RedirectManager.redirectToLogin();
    } else {
      const errorData = await response.json();
      alert("Erro ao atualizar a senha: " + errorData.message);
    }
  } catch (error) {
    console.error("Erro na requisição:", error);
    alert("Erro ao tentar atualizar a senha.");
  }
});

document.getElementById("delete-account").addEventListener("click", async (event) => {
  event.preventDefault();

  const confirmation = confirm("Você tem certeza que deseja excluir sua conta? Esta ação é irreversível.");

  if (confirmation) {
    // Se o usuário confirmar, execute a lógica de exclusão
    // Aqui você pode fazer uma requisição ao servidor para deletar a conta
    console.log("Conta excluída"); // Apenas um log para o exemplo

    // Exemplo de requisição usando fetch
    fetch("http://localhost:3000/users", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Sua conta foi excluída com sucesso.");
          localStorage.removeItem("token");
          RedirectManager.redirectToLogin();
        } else {
          alert("Houve um problema ao tentar excluir sua conta.");
        }
      })
      .catch((error) => {
        console.error("Erro ao excluir conta:", error);
        alert("Erro ao excluir conta. Tente novamente.");
      });
  } else {
    // Se o usuário cancelar, apenas saia da função
    console.log("Exclusão de conta cancelada");
  }
});
</script>

<template>
  <Header />
  <main>
    <div class="container">
      <!-- Sidebar -->
      <div class="sidebar">
        <h2>Portal do Corpo Humano</h2>
        <ul>
          <li><RouterLink to="/dashboard">Dashboard</RouterLink></li>
          <li><RouterLink to="/suporte">Suporte</RouterLink></li>
          <li><RouterLink to="/seguranca">Segurança</RouterLink></li>
        </ul>
      </div>

      <!-- Main Content -->
      <div class="main-content">
        <!-- Header -->
        <div class="cabecalho">
          <h1>Minha Conta</h1>
          <button id="logout" type="button" @click="logoutUser">Logout</button>
        </div>

        <!-- Update Email Section -->
        <div class="account-section">
          <h3>Atualizar E-mail</h3>
          <form id="emailForm">
            <label for="email">Novo E-mail:</label>
            <input type="email" id="email" placeholder="Digite o novo e-mail..." required />
            <button type="submit" @click="">Atualizar E-mail</button>
          </form>
        </div>

        <!-- Update Password Section -->
        <div class="account-section">
          <h3>Atualizar Senha</h3>
          <form id="passwordForm">
            <label for="current-password">Senha Atual:</label>
            <input type="password" id="current-password" placeholder="Digite sua senha atual..." required />
            <label for="new-password">Nova Senha:</label>
            <input type="password" id="new-password" placeholder="Digite sua nova senha..." required />
            <button type="submit" @click="">Atualizar Senha</button>
          </form>
        </div>

        <div class="account-section delete-account-section">
          <h3>Excluir Conta</h3>
          <p>Esta ação é irreversível. Você realmente deseja excluir sua conta?</p>
          <button id="delete-account" type="button" @click="">Excluir sua
            Conta</button>
        </div>
        <footer>
          <hr />
          <p>
            &copy; 2024 Todos os direitos reservados - Portal do Corpo Humano
          </p>
          <a href="https://www.instagram.com/portal_corpohumano/"><span class="fa-brands fa-instagram"></span></a>
          <a href="mailto:portalcorpohumano@gmail.com"><span class="fa-regular fa-envelope"></span></a>
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

/* Sidebar */
.sidebar {
  width: 250px;
  background-color: #2c3e50;
  height: 48.3vw;
  padding: 20px;
  color: #fff;
}

.sidebar h2 {
  text-align: center;
  margin-bottom: 30px;
  margin-top: 3vw;
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

/* Main Content */
.main-content {
  flex-grow: 1;
  padding: 20px;
}

/* div.cabecalho */
div.cabecalho {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ecf0f1;
  padding: 15px;
  border-radius: 10px;
}

div.cabecalho h1 {
  font-size: 24px;
}

/* Account Section */
.account-section {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.account-section h3 {
  margin-bottom: 15px;
  font-size: 18px;
}

.account-section form {
  display: flex;
  flex-direction: column;
}

.account-section label {
  margin-bottom: 5px;
  font-size: 16px;
}

.account-section input[type='email'],
.account-section input[type='password'] {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  font-size: 1rem;
}

.account-section button {
  background-color: #2c3e50;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.account-section button:hover {
  background-color: #1abc9c;
}

button {
  padding: 0.5vw 1vw 0.5vw 1vw;
  border-radius: 20px;
  background-color: #2c3e50;
  color: white;
}

button:hover {
  background-color: #34495e;
}

/* Responsividade */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    height: auto;
  }

  .main-content {
    padding: 10px;
  }

  div.cabecalho {
    flex-direction: column;
    align-items: flex-start;
  }
}

.delete-account-section {
  margin-top: 20px;
}

.delete-account-section p {
  margin-bottom: 15px;
  font-size: 16px;
  color: #e74c3c;
  /* Vermelho para indicar alerta */
}

.delete-account-section button {
  background-color: #e74c3c;
  /* Cor vermelha para indicar exclusão */
}

.delete-account-section button:hover {
  background-color: #c0392b;
  /* Vermelho mais escuro ao passar o mouse */
}

@media (max-width: 480px) {
  div.cabecalho h1 {
    font-size: 20px;
  }

  .account-section input[type='email'],
  .account-section input[type='password'] {
    font-size: 0.9rem;
  }

  .account-section button {
    font-size: 0.9rem;
  }
}

footer {
  text-align: center;
  margin-top: 2vw;
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
