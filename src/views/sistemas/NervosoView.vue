<script setup>
import Footer from '../../geral/Footer.vue'
import Header from '../../geral/Header.vue'
import { ref, onMounted } from 'vue'
import svgFile from '../../img/sistemas/nervoso/nervos.svg'

const orgaos = ref([])
let name = ref('Aqui vai o nome do órgão')
let description = ref(
  'Interaja com a imagem para saber mais sobre o sistema nervoso',
)
const image = ref(svgFile)

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

      // Inserir estilos diretamente no SVG
      const styleElement = document.createElement('style')
      styleElement.innerHTML = `
        #svg-brain.nervoso-svg {
          cursor: pointer
        }
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

      getActions()
    } else {
      console.error('SVG não encontrado')
    }
  } catch (error) {
    console.error('Erro ao carregar imagem: ', error)
  }
}

function getActions() {
  const organElements = document.getElementsByClassName('orgaos')
  for (const organ of organElements) {
    organ.onclick = () => orgaoClicked(organ)
  }
  getOrgaos()
}

async function getOrgaos() {
  try {
    const response = await fetch('/nervos.json')
    const data = await response.json()
    orgaos.value = data
  } catch (error) {
    console.error('Erro ao carregar órgãos:', error)
  }
}

function orgaoClicked(orgao) {
  const code = orgao.getAttribute('code')
  const foundOrgao = orgaos.value.find(o => o.code === code)

  if (foundOrgao) {
    fillContent(foundOrgao)
  } else {
    console.log('Órgão não encontrado')
  }
}

function fillContent({ nome, descricao }) {
  const name = document.getElementById('nomeOrgao')
  const description = document.getElementById('descOrgao')
  name.textContent = nome
  description.textContent = descricao
}

onMounted(fetchSvg)
</script>

<template>
  <Header />
  <main>
    <section class="banner nervoso">
      <img src="../../img/sistemas/nervoso/nervoso.png" alt="banner nervoso" />
      <h1>SISTEMA NERVOSO</h1>
      <div>
        <div class="structure">
          <h2>Estrutura</h2>
          <ul>
            <li><p>Sistema Nervoso Central (SNC):</p></li>
            <li>
              Composto pelo Encéfalo:
              <ol>
                <li>Cérebro;</li>
                <li>Cerebelo;</li>
                <li>Tronco encefálico.</li>
              </ol>
            </li>
            <li>Medula Espinhal.</li>
            <li>
              <br />
              <p>Sistema nervoso periférico (SNP):</p>
              <ol>
                <li>Terminações Nervosas;</li>
                <li>Nervos;</li>
                <li>gânglios.</li>
              </ol>
              <br />
            </li>
          </ul>
        </div>

        <div class="care">
          <h2>Cuidados com o Sistema Nervoso:</h2>
          <ul>
            <li>&bull; Alimentação adequada;</li>
            <li>&bull; Prática regular de exercícios físicos;</li>
            <li>&bull; Ter uma rotina de sono de qualidade;</li>
            <li>&bull; Interações sociais;</li>
            <li>&bull; Evitar o tabagismo e o alcoolismo;</li>
            <li>&bull; Administrar o estresse do cotidiano.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="image">
      <div id="container">
        <img id="mainImage" :src="image" @load="fetchSvg" />
        <div id="text">
          <h1 id="nomeOrgao"></h1>
          <p id="descOrgao"></p>
        </div>
      </div>
    </section>

    <section class="disease">
      <h2>Princípais Doenças</h2>
      <div>
        <div class="cartoes">
          <div class="cartao">
            <div class="cartaoInterno">
              <div class="lado-frente">
                <h3>Mal de Alzheimer</h3>
              </div>
              <div class="lado-atras">
                <p>
                  Doença neurodegenerativa. Esse transtorno causa principalmente
                  a perda de memória ( sobretudo a curto prazo), perda de
                  capacidade cognitiva, perda de habilidades motoras, pode
                  causar também depressão, ansiedade, entre outros aspectos. A
                  causa ainda não se sabe, porém, considera-se que seja algo
                  relacionado a genética (predisposição). Essa doença não tem
                  cura, mas já existe tratamento que pode diminuir os sintomas
                  ou desacelerar o seu avanço.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="cartoes">
          <div class="cartao">
            <div class="cartaoInterno">
              <div class="lado-frente">
                <h3>Esclerose múltipla</h3>
              </div>
              <div class="lado-atras">
                <p>
                  Doença autoimune crônica que prejudica o sistema imunológico.
                  Distúrbio que pode causar exaustão, tremores, espasmos
                  musculares, dificuldade de concentração, problemas para
                  caminhar, perda de visão (pode ser em um ou nos dois olhos),
                  entre outros. Supõe que seja causada por fatores ambientais e
                  genéticos. Não tem cura, mas já se encontra tratamentos para
                  amenizar os sintomas dessa doença.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="cartoes">
          <div class="cartao">
            <div class="cartaoInterno">
              <div class="lado-frente">
                <h3>Mal de Parkinson</h3>
              </div>
              <div class="lado-atras">
                <p>
                  É uma doença neurodegenerativa. Condição qualificada pela
                  diminuição criação de neurotransmissores (dopamina). Essa
                  enfermidade pode causar tremedeiras, lentidão de reflexos
                  musculares, redução de movimentos corporais, confusão mental,
                  dificuldade na fala, rigidez muscular, entre outros. Causada
                  por fatores genéticos, ambientais e etários ( geralmente a
                  doença surge após idades mais avançadas). Não tem cura, mas
                  existem diversos tipos de tratamentos para retardar e diminuir
                  os efeitos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="conclusion">
      <h2>Conclusão</h2>
      <p>
        Esse sistema é essencial para o funcionamento do corpo humano. Cuidar
        dele de forma adequada garante tanto o bem-estar físico como o bem-estar
        mental. Ter uma vida saudável é assegurar que o corpo funcione em
        harmonia.
      </p>
    </section>

    <section class="reference">
      <h2>
        Confira as referências científicas utilizadas para a criação desta
        página:
      </h2>
      <details>
        <summary>REFERÊNCIAS</summary>
        <a href="https://brasilescola.uol.com.br/biologia/sistema-nervoso.htm"
          >Brasil Escola</a
        >
        <a
          href="https://www.gov.br/saude/pt-br/assuntos/saude-brasil/eu-quero-me-exercitar/noticias/2022/cuidados-com-a-alimentacao-ao-praticar-atividade-fisica"
          >Gov.br</a
        >
        <a
          href="https://www.hcor.com.br/especialidades-servicos/especialidades/neurologia/doencas/"
          >hcor</a
        >
        <a
          href="https://brasil.un.org/pt-br/74566-sa%C3%BAde-mental-depende-de-bem-estar-f%C3%ADsico-e-social-diz-oms-em-dia-mundial"
          >Nações Unidas Brasil</a
        >
        <a
          href="https://mundoeducacao.uol.com.br/psicologia/aparelho-psiquico.htm"
          >Mundo Educação</a
        >
        <a href="https://brasilescola.uol.com.br/biologia/cerebro-humano.htm"
          >Brasil Escola</a
        >
      </details>
    </section>

    <section class="system">
      <router-link to="/">VEJA OUTROS SISTEMAS</router-link>
    </section>
  </main>
  <Footer />
</template>

<style scoped>
#container {
  align-items: center;
  display: flex;
  gap: 20px;
  padding: 50px;
  max-width: 90%;
  margin: auto;
  min-height: 70vh;
  max-height: 90vh;
}
#div-image {
  min-width: 4000px;
}
#text {
  text-align: justify;
  color: black;
  text-shadow: 1px 1px 1px white;
  width: 100%;
  font-size: 1.5rem;
  line-height: 1.5;
  margin: auto 0;
  margin: 0 0 5vw 10vw;
  max-width: 50vw;
}

#container div h1 {
  text-align: center;
  font-size: 2.1rem;
  font-weight: 600;
  margin: 0 0 20px 0;
}
</style>
