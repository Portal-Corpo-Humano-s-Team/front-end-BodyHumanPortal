<script setup>
import Footer from '../../geral/Footer.vue'
import Header from '../../geral/Header.vue'
import { ref, onMounted } from 'vue'
import svgFile from '../../img/sistemas/digestorio/digestorio.svg'

const orgaos = ref([])
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
          border: black solid 1px;
          cursor: pointer;
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
    const response = await fetch('/digestorio.json')
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
    <section class="banner digestorio">
      <!--banner-->
      <img
        src="../../img/sistemas/digestorio/digestorio.png"
        alt="banner digestorio"
      />
      <h1>SISTEMA DIGESTÓRIO</h1>

      <div>
        <div class="structure">
          <h2>Estrutura</h2>
          <ul>
            <li>O sistema digestivo é composto por:</li>
            <li>&bull; Boca;</li>
            <li>&bull; Faringe;</li>
            <li>&bull; esôfago;</li>
            <li>&bull; Estômago;</li>
            <li>&bull; Intestino delgado</li>
            <li>&bull; Intestino grosso;</li>
            <li>&bull; Ânus;</li>
            <li><br />Fazem parte também as glândulas acessórias, que são:</li>
            <li>&bull; Glândulas salivares;</li>
            <li>&bull; Pâncreas;</li>
            <li>&bull; Fígado.</li>
          </ul>
        </div>

        <div class="care">
          <h2>Cuidados</h2>
          <ul>
            <li>&bull; Higiene adequada dos alimentos que ingere;</li>
            <li>&bull; Não comer e já ir se deitar;</li>
            <li>&bull; Tomar cuidados com medicamentos que toma;</li>
            <li>&bull; Beba muita água;</li>
            <li>&bull; Evite o consumo de álcool e cigarro;</li>
            <li>&bull; Realize exames regulares.</li>
          </ul>
        </div>
      </div>
    </section>
    <!--end banner-->

    <section class="image">
      <div id="container">
        <div>
          <img id="mainImage" :src="image" @load="fetchSvg" />
        </div>
        <div id="text">
          <h1 id="nomeOrgao"></h1>
          <p id="descOrgao"></p>
        </div>
      </div>
    </section>
    <!--end svg-->

    <section class="disease">
      <!--doenças-->
      <h2>Princípais Doenças</h2>
      <div>
        <div class="cartoes">
          <div class="cartao">
            <div class="cartaoInterno">
              <div class="lado-frente">
                <h3>Doença do Refluxo Gastroesofágico (DRGE)</h3>
              </div>
              <div class="lado-atras">
                <p>
                  Também conhecida como refluxo, essa condição afeta a saúde
                  digestiva. Ela ocorre quando o ácido do estômago flui de volta
                  para o esôfago, provocando sintomas e possíveis complicações.
                  Um dos principais sinais é a azia, que se manifesta como uma
                  sensação de queimação. Além disso, o conteúdo estomacal pode
                  alcançar a boca, resultando em dor de garganta, tosse,
                  rouquidão e uma sensação de aperto na garganta. A DRGE pode
                  ser controlada e gerenciada, mas não há uma cura definitiva.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="cartoes">
          <div class="cartao">
            <div class="cartaoInterno">
              <div class="lado-frente">
                <h3>Gastrite</h3>
              </div>
              <div class="lado-atras">
                <p>
                  É uma doença inflamatória que afeta a mucosa do estômago. Essa
                  inflamação pode ser aguda (de início súbito) ou crônica (de
                  longa duração, que pode persistir por toda a vida). A gastrite
                  aguda pode ser causada pelo consumo excessivo de bebidas
                  alcoólicas, uso de certos medicamentos, estresse, entre outros
                  fatores. Por outro lado, a gastrite crônica é frequentemente
                  causada pela infecção pela bactéria Helicobacter pylori. A
                  gastrite pode ser tratada e, em muitos casos, curada.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="cartoes">
          <div class="cartao">
            <div class="cartaoInterno">
              <div class="lado-frente">
                <h3>Câncer gastrointestinal</h3>
              </div>
              <div class="lado-atras">
                <p>
                  O câncer gastrointestinal alto refere-se a tumores que se
                  formam no esôfago, estômago e duodeno, que são partes
                  essenciais do trato digestivo. Esses órgãos desempenham papeis
                  cruciais na digestão, sendo responsáveis por transportar os
                  alimentos e iniciar o processo de digestão antes que os
                  nutrientes sejam absorvidos no intestino delgado. O câncer
                  gastrointestinal pode ser tratado, e em certas situações, há
                  chance de cura.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--end doenças-->

    <section class="conclusion">
      <!--conclusão-->
      <h2>Conclusão</h2>
      <p>
        O sistema digestivo é fundamental para a saúde, pois realiza a digestão
        e absorção de nutrientes essenciais ao corpo. Composto por órgãos como
        estômago, intestinos, fígado e pâncreas, ele transforma alimentos em
        energia e elimina resíduos. Manter a saúde digestiva é essencial, já que
        doenças como gastrite, refluxo gastroesofágico e câncer gastrointestinal
        podem afetar a qualidade de vida. Assim, hábitos saudáveis e cuidados
        regulares são importantes para garantir seu bom funcionamento.
      </p>
    </section>
    <!--end conclusão-->

    <section class="reference">
      <!--referencias-->
      <h2>
        Confira as referências científicas utilizadas para a criação desta
        pagina:
      </h2>
      <details>
        <summary>REFERÊNCIAS</summary>
        <a
          href="https://brasilescola.uol.com.br/biologia/sistema-digestivo.htm#:~:text=O%20sistema%20digest%C3%B3rio%20%C3%A9%20formado,gl%C3%A2ndulas%20salivares%2C%20p%C3%A2ncreas%20e%20f%C3%ADgado"
          >Brasil Escola</a
        >
        <a
          href="https://www.leforte.com.br/blog/quais-problemas-podem-afetar-a-saude-digestiva/"
          >Leforte</a
        >
        <a
          href="https://www.hospitaloswaldocruz.org.br/centro-especializado/oncologia/cancer-gastrointertinal-alto/"
          >Hospital Oswaldo Cruz</a
        >
      </details>
    </section>
    <!--end referencias-->

    <section class="system">
      <!--sistemas-->
      <router-link to="/">VEJA OUTROS SISTEMAS</router-link>
    </section>
    <!--end sitemas-->
  </main>
  <Footer />
</template>

<style scoped>
#container {
  align-items: center;
  display: flex;
  padding: 50px;
  max-width: 90%;
  margin: auto;
  min-height: 100vh;
  max-height: 120vh;
}

#text {
  text-align: justify;
  color: black;
  text-shadow: 1px 1px 1px white;
  font-size: 1.5rem;
  line-height: 1.5;
  margin: auto 0;
  margin: 0 0 5vw 12vw;
  max-width: 45vw;
}

#container div h1 {
  text-align: center;
  font-size: 2.1rem;
  font-weight: 600;
  margin: 0 0 20px 0;
}
</style>
