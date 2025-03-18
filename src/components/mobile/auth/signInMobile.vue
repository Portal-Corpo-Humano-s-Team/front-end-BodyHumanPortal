<script setup>
import { ref } from 'vue'
import { useAuth } from '@/stores/authStore'
import GoogleLoginBtn from '@/components/desktop/auth/GoogleLoginBtn.vue'

const auth = useAuth()

const user = ref({
  email: '',
  password: '',
})

const focusedEmail = ref(false)
const focusedPassword = ref(false)

const checkInputEmail = () => {
  if (!user.value.email) {
    focusedEmail.value = false
  }
}

const checkInputPassword = () => {
  if (!user.value.password) {
    focusedPassword.value = false
  }
}

const showPassword = ref({
  current: false,
  new: false,
  confirm: false,
  delete: false,
})

const togglePassword = (label) => {
  showPassword.value[label] = !showPassword.value[label]
}

const handleLocalLogin = async () => {
  await auth.loginLocal(user.value.email, user.value.password)
}
</script>
<template>
  <section class="is-mobile">
    <div id="register">
      <img src="/logo.png" alt="Logo" />
      <h1>Login</h1>

      <div class="inputs">
        <label :class="{ active: focusedEmail || user.email }" for="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          v-model="user.email"
          @focus="focusedEmail = true"
          @blur="checkInputEmail"
          required
        />
        <span class="fa-solid fa-envelope"></span>
      </div>

      <div class="inputs">
        <label :class="{ active: focusedPassword || user.password }" for="password">Senha</label>
        <input
          :type="showPassword.new ? 'text' : 'password'"
          name="password"
          id="password"
          v-model="user.password"
          @focus="focusedPassword = true"
          @blur="checkInputPassword"
          required
        />
        <span
          :class="showPassword.new ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'"
          @click="togglePassword('new')"
        ></span>
      </div>

      <p>
        <RouterLink id="forget" to="/auth/recovery/email">Esqueceu a senha?</RouterLink>
      </p>

      <button @click="handleLocalLogin" :disabled="auth.loading.activated">ENTRAR</button>

      <p><span>ou</span></p>
      <GoogleLoginBtn />

      <p>Não tem uma conta? <RouterLink to="/auth/cadastre-se">Cadastre-se</RouterLink></p>
    </div>
  </section>
</template>

<style scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20vw;
  padding-bottom: 35vw;

  #register {
    width: 55vw;
    padding: 3vw 4vw 2vw 4vw;
    border-radius: 5vw;
    border: 0.1vw solid #00000040;
    text-align: center;
    background-color: #fff;

    img {
      width: 35vw;
    }

    h1 {
      font-family: 'Tilt Warp';
      font-weight: 400;
      font-size: 7vw;
      color: #1663a3;
      margin: 7vw 0 2vw 0;
    }

    .inputs {
      position: relative;
      margin: 5vw 0 2vw 5vw;

      label {
        font-family: 'Tilt Neon';
        font-weight: 400;
        font-size: 3vw;
        margin: 1.5vw 0 0.104vw 1vw;
        position: absolute;
        transform: translateY(-1vw);
        color: #10293d50;
        transition: all 0.3s ease-in-out;
        pointer-events: none;
        z-index: 1;
        border: none;
        left: 0;

        &.active {
          top: -3vw;
          font-size: 2vw;
          color: #10293d;
          padding: 0 0.5vw;
        }
      }

      input {
        width: 90%;
        padding: 0.417vw 1.875vw 0.417vw 0.417vw;
        font-size: 3vw;
        border: 0.1vw solid transparent;
        border-bottom: 0.1vw solid #10293d;
        outline: none;
        position: absolute;
        left: 0;
      }

      span {
        color: #1663a3;
        font-size: 2vw;
        cursor: pointer;
        position: relative;
        right: -20vw;
      }
    }

    button {
      width: 70%;
      margin-top: 3vw;
      padding: 1.5vw 2vw;
      border-radius: 100px;
      background: linear-gradient(45deg, #a7e6eb, #007faa);
      color: #ffffff;
      font-family: 'Tilt Warp';
      font-weight: 400;
      font-size: 3vw;
      border: none;
      cursor: pointer;
    }

    button:hover {
      background: linear-gradient(45deg, #278ca8, #1f527c);
    }

    #forget {
      font-family: 'Tilt Neon';
      font-weight: 400;
      font-size: 2vw;
      color: #10293d;
      margin: 8vw 0 0 -27vw;
      text-align: left;
      text-decoration: none;
    }

    p {
      font-family: 'Tilt Neon';
      font-weight: 400;
      font-size: 2vw;
      color: #10293d;
      margin: 2vw 0 1.5vw 0;

      span {
        font-size: 2vw;
        color: #227cc3;
      }

      a {
        font-family: 'Tilt Warp';
        color: #227cc3;
      }
    }
  }
}
</style>
