<script setup></script>

<template>
  <section class="is-mobile">
    <h1>Seja Bem-vindo (a) ao Portal do Corpo Humano!</h1>

    <div class="buttons">
      <div class="button">
        <RouterLink to="/SigInView.vue">
          <button>Login</button>
        </RouterLink>
        <p>Que bom que voltou!</p>
      </div>

      <div class="button">
        <RouterLink to="/SigUpView.vue">
          <button>Sign in</button>
        </RouterLink>
        <p>Embarque em uma nova jornada!</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.is-mobile {
  h1 {
    text-align: center;
    font-size: 11vw;
    font-family: 'Tilt Warp';
    color: #103f65;
  }
  .buttons {
    text-align: center;
    margin-top: 25vw;
    .button {
      margin-top: 10vw;
      button {
        margin-bottom: 3vw;
        color: white;
        background: linear-gradient(to right, #47abc6, #266394);
        border: none;
        padding: 4vw 18vw 4vw 18vw;
        font-weight: 800;
        font-size: 7vw;
        border-radius: 26px;
      }

      button:active {
        background: linear-gradient(to right, #278ca8, #1f527c);
      }

      p {
        color: #103f65;
        font-family: 'Tilt Warp';
        font-size: 4vw;
      }
    }
  }
}
</style>
