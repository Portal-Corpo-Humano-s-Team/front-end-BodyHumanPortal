<script setup>
import { ref } from 'vue'

const token = ref(!true)
</script>

<template>
  <header class="is-desktop">
    <nav>
      <ul>
        <li>
          <RouterLink to="/"><img src="/logo.png" alt="Logo Icon" id="logo" /></RouterLink>
        </li>

        <li>
          <RouterLink to="/contato">CONTATO</RouterLink>
        </li>
        <li>
          <details>
            <summary>SISTEMAS <i class="fa-solid fa-arrow-down"></i></summary>
            <div id="menu">
              <h3>SISTEMA</h3>
              <div>
                <ul class="line-one">
                  <li>
                    <RouterLink to="/sistema/digestivo">
                      <img src="/header/digestive.png" alt="Digestive Icon" class="icon" /> <br />
                      DIGESTÓRIO
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/sistema/cardiovascular">
                      <img src="/header/circulatory.png" alt="Circulatory Icon" class="icon" />
                      <br />
                      CARDIOVASCULAR
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/sistema/osseo">
                      <img src="/header/bone.png" alt="Bone Icon" class="icon" /> <br />
                      ÓSSEO
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/sistema/nervoso">
                      <img src="/header/nervous.png" alt="Nervous Icon" class="icon" /> <br />
                      NERVOSO
                    </RouterLink>
                  </li>
                </ul>
                <ul class="line-two">
                  <li>
                    <RouterLink to="/sistema/muscular">
                      <img src="/header/muscle.png" alt="Muscle Icon" class="icon" /> <br />
                      MUSCULAR
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/sistema/reprodutor-feminino">
                      <img src="/header/reproductive.png" alt="Reproductive Icon" class="icon" />
                      <br />
                      REPRODUTOR
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/sistema/respiratorio">
                      <img src="/header/respiratory.png" alt="Respiratory Icon" class="icon" />
                      <br />
                      RESPIRATÓRIO
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/sistema/urinario">
                      <img src="/header/urinary.png" alt="Urinary Icon" class="icon" /> <br />
                      URINÁRIO
                    </RouterLink>
                  </li>
                </ul>
              </div>
            </div>
          </details>
        </li>
      </ul>

      <p v-if="token"><i class="fa-solid fa-user"></i></p>
      <ul v-else>
        <li>
          <RouterLink to="/auth/login">SIG IN</RouterLink>
        </li>
        <li>
          <RouterLink to="/auth/cadastre-se">CADASTRE-SE</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  font-family: 'Urbanist';
  font-weight: 600;
  font-size: 1.042vw;
  line-height: 1.25vw;
  color: #010a5c;
  padding: 1vw;

  nav {
    display: flex;
    justify-content: space-between;

    ul {
      display: flex;

      li {
        margin: 0 1vw 0 1vw;
        height: 5vw;

        #logo {
          width: 4.167vw;
        }

        details {
          width: 7vw;
          summary {
            list-style: none;

            i {
              transition: transform 0.5s ease;
              margin-left: 0.5vw;
            }
          }

          #menu {
            display: flex;
            overflow: hidden;
            width: 91.823vw;
            height: 20vw;
            padding: 1vw 2.15vw 0 7vw;
            margin: 1vw 0 0 -22vw;
            background-color: rgb(250, 249, 249);
            position: sticky;
            box-shadow: 0.521vw 0.26vw 0.26vw rgb(106, 106, 106);

            h3 {
              font-family: 'Poller One';
              font-weight: 400;
              font-size: 3vw;
              line-height: 2.708vw;
              color: #1f527c;
              margin: 6.25vw 10vw 0 7vw;
            }

            .line-one {
              margin: 1vw;

              li {
                text-align: center;
                width: 10.104vw;
                margin: 0 1vw 0 1vw;
                height: auto;

                .icon {
                  width: 7.292vw;
                  height: 6.25vw;
                }
              }
            }

            .line-two {
              margin: 1vw;

              li {
                text-align: center;
                width: 10.104vw;
                margin: 0 1vw 0 1vw;
                height: auto;

                .icon {
                  width: 7.292vw;
                  height: 6.25vw;
                }
              }
            }
          }
        }

        details[open] {
          i {
            transform: rotate(180deg);
          }
        }

        a {
          color: #010a5c;
          text-decoration: none;
        }
      }
    }

    i.fa-user {
      font-size: 1.146vw;
    }
  }
}
</style>
