<script setup>
import Footer from '../geral/Footer.vue'
import Header from '../geral/Header.vue'
import { ref, onMounted } from 'vue'
import svgFile from '../img/home/svg/index.svg'

const orgaos = ref([]) // Ref para armazenar os dados dos órgãos
const image = ref(svgFile) // Ref para armazenar a URL do SVG

// Função para buscar o SVG e substituir a imagem
async function fetchSvg() {
  try {
    const response = await fetch(image.value)
    const svgText = await response.text()

    const span = document.createElement('span')
    span.innerHTML = svgText
    const inlineSvg = span.querySelector('svg')

    if (inlineSvg) {
      inlineSvg.id = 'svg-brain'
      inlineSvg.classList.add('nervoso-svg')

      const styleElement = document.createElement('style')
      styleElement.innerHTML = `
        #svg-brain.nervoso-svg {
          cursor: pointer;
          height: 30vw;
          width: 40%;
          transform: scale(1.5);
        }
        #svg-brain a:hover polygon,
        #svg-brain a:hover path {
          fill: black !important;
          transition: fill 0.3s;
        }
      `
      inlineSvg.prepend(styleElement)

      const imageToBeHandled = document.getElementById('mainImage')
      if (imageToBeHandled) {
        imageToBeHandled.replaceWith(inlineSvg)
      }

      getActions() // Chama a função para adicionar eventos de clique
    } else {
      console.error('SVG não encontrado')
    }
  } catch (error) {
    console.error('Erro ao carregar imagem: ', error)
  }
}

// Função para adicionar ações de clique nos elementos
function getActions() {
  const systemsElements = document.getElementsByClassName('sistemas') // Seleciona os elementos com a classe 'sistemas'
  for (const system of systemsElements) {
    system.onclick = () => systemClicked(system) // Passa o sistema como argumento
  }
  getSystems() // Carrega os sistemas
}

// Função para carregar os dados dos sistemas a partir de um arquivo JSON
async function getSystems() {
  try {
    const response = await fetch('/index.json')
    const data = await response.json()
    orgaos.value = data // Atualiza os dados de órgãos
  } catch (error) {
    console.error('Erro ao carregar órgãos:', error)
  }
}

// Função chamada quando um sistema é clicado
function systemClicked(system) {
  const code = system.getAttribute('code') // Obtém o código do sistema a partir do atributo 'code'
  const foundSystem = orgaos.value.find(o => o.code === code) // Encontra o sistema pelo código

  if (foundSystem) {
    fillContent(foundSystem) // Preenche o conteúdo com as informações do sistema
  } else {
    console.log('Sistema não encontrado')
  }
}

// Função para preencher o conteúdo com as informações do sistema
function fillContent({ nome, descricao }) {
  const name = document.getElementById('nomeOrgao') // Nome do sistema
  const description = document.getElementById('descOrgao') // Descrição do sistema
  name.innerHTML = nome // Preenche o nome
  description.innerHTML = descricao // Preenche a descrição
}

onMounted(fetchSvg) // Executa a função de carregar o SVG quando o componente for montado
</script>

<template>
  <Header />
  <main>
    <section class="banner">
      <img src="../img/home/banner/banner.png" alt="banner" />
    </section>

    <section class="sistemas">
      <div class="texto-sistema">
        <h1>Sistemas do Corpo</h1>
        <p>
          O corpo humano é uma máquina extraordinária, composta por sistemas
          interligados que trabalham juntos para manter o equilíbrio e a saúde.
        </p>
        <p>
          Aqui, você poderá explorar de forma clara e simples os principais
          sistemas do corpo, entendendo suas funções e como eles se conectam
          para garantir o funcionamento da nossa vida.
        </p>
      </div>

      <div class="botoes-svg-sistemas">
        <aside class="botoes-sistema">
          <ul>
            <li class="sistemas" code="nervoso">
              <RouterLink
                to="/nervoso"
                style="color: #fff; text-decoration: none; font-size: 17px"
                >SISTEMA NERVOSO</RouterLink
              >
            </li>
            <li class="sistemas" code="digestorio">
              <RouterLink
                to="/digestorio"
                style="color: #fff; text-decoration: none; font-size: 17px"
                >SISTEMA DIGESTÓRIO</RouterLink
              >
            </li>
            <li class="sistemas" code="esqueletico">
              <RouterLink
                to="/esqueletico"
                style="color: #fff; text-decoration: none; font-size: 17px"
                >SISTEMA ESQUELÉTICO</RouterLink
              >
            </li>
            <li class="sistemas" code="urinario">
              <RouterLink
                to="/urinario"
                style="color: #fff; text-decoration: none; font-size: 17px"
                >SISTEMA URINÁRIO</RouterLink
              >
            </li>
            <li class="sistemas" code="reprodutor-feminino">
              <RouterLink
                to="/reprodutor-feminino"
                style="color: #fff; text-decoration: none; font-size: 17px"
                >SISTEMA REPRODUTOR</RouterLink
              >
            </li>
            <li class="sistemas" code="respiratorio">
              <RouterLink
                to="/respiratorio"
                style="color: #fff; text-decoration: none; font-size: 17px"
                >SISTEMA RESPIRATÓRIO</RouterLink
              >
            </li>
            <li class="sistemas" code="cardiovascular">
              <RouterLink
                to="/cardiovascular"
                style="color: #fff; text-decoration: none; font-size: 17px"
                >SISTEMA CARDIOVASCULAR</RouterLink
              >
            </li>
          </ul>
        </aside>

        <section class="image">
          <div id="container">
            <img id="mainImage" :src="image" />
            <div id="text">
              <h1 id="nomeOrgao"></h1>
              <p id="descOrgao"></p>
            </div>
          </div>
        </section>
      </div>
    </section>
  </main>
  <Footer />
</template>

<style scoped>
/*==========================
    Estilos Gerais
===========================*/

.banner img {
  width: 100%;
  box-shadow: 0 1px 10px black;
}

.sistemas .texto-sistema {
  text-align: center;
  font-size: 1.3rem;
  margin: 5vw 0 3vw;
}

.texto-sistema h1 {
  font-size: 2rem;
  font-weight: 600;
  background-color: #010a5c;
  color: #fff;
  border-radius: 50px;
  padding: 2vw;
  width: 30%;
  margin: 0 auto;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.4);
  text-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
}

.texto-sistema p {
  margin: 2vw;
  line-height: 1.5;
}

.botoes-svg-sistemas {
  display: flex;
  text-align: center;
}

.botoes-sistema ul {
  margin-top: 3vw;
}

.botoes-sistema ul li {
  padding: 1vw;
  background-color: #010a5c;
  border-radius: 10px;
  cursor: pointer;
  display: inline-block;
  width: 18vw;
  height: 1vw;
}

.botoes-sistema ul li {
  margin: 1vw 3.3vw 1vw 3.3vw;
}

section.image {
  display: flex;
}

#container {
  justify-content: space-between;
  display: flex;
  align-items: center;
  width: 60vw;
  height: 35vw;
}

#text {
  padding: 0 5vw 0 0;
  width: 28vw;
  line-height: 1.3;
  color: black;
  text-shadow: 1px 1px 1px white;
  font-size: 1.2vw;
  text-align: justify;
}

#text h1 {
  text-align: center;
  margin: 20px 0 0 0;
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 0.5vw;
  color: #010a5c;
}

footer {
  margin: 5vw 0 0 0;
}
</style>
