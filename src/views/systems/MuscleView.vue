<script setup>
import systems from '../../components/desktop/systems/systems.vue'
import systemsMobile from '@/components/mobile/systems/systemsMobile.vue'
</script>

<template>
  <main class="is-desktop">
    <systems
      system="Muscular"
      system-gif="muscular.gif"
      content1p="A estrutura do sistema muscular é composta por três classes principais, cada uma com características e funções específicas: os músculos estriados esqueléticos, os músculos estriados cardíacos e os músculos lisos (músculo não estriado)."
      content1Reference=""
      content2p="<ul>
      <li>Produzir e manter a temperatura corporal;</li>
      <li>Praticar exercícios regularmente;</li>
      <li>Descansar de forma adequada;</li>
      <li>Reservar energia (glicogênio muscular);</li>
      <li>Fazer exames frequentemente;</li>
      <li>Se alimentar de forma saudável.</li>
    </ul>"
      content2Reference="https://www.neoquimica.com.br/blog/vitaminas/como-funciona-o-sistema-muscular-o-que-e-bom-para-ele"
      organImage="muscular.svg"
      organ-data="muscular.json"
      illness1h3="Miopatias congênitas"
      illness1p="As miopatias congênitas são um grupo de doenças musculares hereditárias que afetam o funcionamento e a estrutura dos músculos desde o nascimento ou a primeira infância. Há diferentes formas de miopatias congênitas; as mais comuns são: miopatia central, miopatia multiminicore (miopatias centrais), miopatia centronuclear e miopatia nemalínica. Os principais sintomas são a fraqueza muscular, dificuldade para respirar e, em crianças, quedas e tropeços devido à fraqueza. As miopatias congênitas não têm cura atualmente, pois são condições genéticas que afetam a função muscular de forma permanente. O tratamento é focado em supervisionar os sintomas e melhorar a qualidade de vida dos pacientes."
      illness1Reference="https://www.msdmanuals.com/pt/casa/problemas-de-sa%C3%BAde-infantil/distrofias-musculares-e-dist%C3%BArbios-relacionados/miopatias-cong%C3%AAnitas"
      illness2h3="Distrofia Muscular"
      illness2p="A distrofia muscular é um grupo de doenças genéticas caracterizadas pela degeneração progressiva dos tecidos musculares, levando a fraqueza muscular e atrofia. Ela é causada, na maioria das vezes, por mutação genética nos genes responsáveis pela produção de proteínas essenciais para o funcionamento adequado das fibras musculares. Os tipos de distrofias musculares são: Distrofia Muscular de Duchenne (DMD), Distrofia Muscular de Becker (BMD), Distrofia Muscular Facioescapuloumeral (FSHD), Distrofia Muscular Congênita e outras classes mais raras. A doença não tem cura, mas existem tratamentos que ajudam a melhorar a qualidade de vida do portador da doença."
      illness2Reference="https://www.rededorsaoluiz.com.br/doencas/distrofia-muscular"
      illness3h3="Atrofia Muscular Espinhal (AME)"
      illness3p="A atrofia muscular espinhal, também conhecida pela sigla AME, é uma doença rara, degenerativa e hereditária, sendo passada de pais para filhos. É uma doença causada pela mutação do gene SMN1 que resulta na deficiência de uma proteína fundamental para a sobrevivência dos neurônios motores, que é responsável pelos movimentos voluntários e involuntários do corpo. Isso afeta, principalmente, os músculos responsáveis pela locomoção, dificuldade de segurar objetos nas mãos, escoliose, e em casos mais graves, dificuldades para respirar e engolir. A AME não possui cura, mas tem tratamentos em que podem auxiliar no manejo da doença, dependendo do tipo e gravidade da doença."
      illness3Reference=""
      content3p="Cuidar do sistema muscular é crucial para uma vida saudável. Um descanso adequado, atividade física regular e a adoção de hábitos saudáveis contribuem para manter os músculos internos e externos em boas condições, prevenindo doenças degenerativas e inflamatórias que podem enfraquecer e causar dor nos músculos, além de promover o bem-estar geral."
    />
  </main>
  <main class="is-mobile">
    <systemsMobile
      system="Muscular"
      system-gif="muscular.gif"
      top-gif="-4vw"
      sizeGif="50vw"
      rigth-gif="-4vw"
      content1p="A estrutura do sistema muscular é composta
    por três classes principais, cada uma com características e funções específicas: os
    músculos estriados esqueléticos, os músculos estriados cardíacos e os músculos lisos
    (músculo não estriado)."
      content1Reference=""
      content2p="
    <ul>
      <li>Produzir e manter a temperatura corporal;</li>
      <li>Praticar exercícios regularmente;</li>
      <li>Descansar de forma adequada;</li>
      <li>Reservar energia (glicogênio muscular);</li>
      <li>Fazer exames frequentemente;</li>
      <li>Se alimentar de forma saudável.</li>
    </ul>
    "
      content2Reference="https://www.neoquimica.com.br/blog/vitaminas/como-funciona-o-sistema-muscular-o-que-e-bom-para-ele"
      organ-image="muscular.svg"
      organ-data="muscular.json"
      illness1h3="Miopatias congênitas"
      illness1p="As miopatias congênitas são um grupo de doenças musculares
    hereditárias que afetam o funcionamento e a estrutura dos músculos desde o nascimento
    ou a primeira infância. Há diferentes formas de miopatias congênitas; as mais comuns
    são: miopatia central, miopatia multiminicore (miopatias centrais), miopatia
    centronuclear e miopatia nemalínica. Os principais sintomas são a fraqueza muscular,
    dificuldade para respirar e, em crianças, quedas e tropeços devido à fraqueza. As
    miopatias congênitas não têm cura atualmente, pois são condições genéticas que afetam
    a função muscular de forma permanente. O tratamento é focado em supervisionar os
    sintomas e melhorar a qualidade de vida dos pacientes."
      illness1Reference="https://www.msdmanuals.com/pt/casa/problemas-de-sa%C3%BAde-infantil/distrofias-musculares-e-dist%C3%BArbios-relacionados/miopatias-cong%C3%AAnitas"
      illness2h3="Distrofia Muscular"
      illness2p="A distrofia muscular é um grupo de doenças
    genéticas caracterizadas pela degeneração progressiva dos tecidos musculares, levando
    a fraqueza muscular e atrofia. Ela é causada, na maioria das vezes, por mutação
    genética nos genes responsáveis pela produção de proteínas essenciais para o
    funcionamento adequado das fibras musculares. Os tipos de distrofias musculares são:
    Distrofia Muscular de Duchenne (DMD), Distrofia Muscular de Becker (BMD), Distrofia
    Muscular Facioescapuloumeral (FSHD), Distrofia Muscular Congênita e outras classes
    mais raras. A doença não tem cura, mas existem tratamentos que ajudam a melhorar a
    qualidade de vida do portador da doença."
      illness2Reference="https://www.rededorsaoluiz.com.br/doencas/distrofia-muscular"
      illness3h3="Atrofia Muscular Espinhal (AME)"
      illness3p="A atrofia muscular espinhal,
    também conhecida pela sigla AME, é uma doença rara, degenerativa e hereditária, sendo
    passada de pais para filhos. É uma doença causada pela mutação do gene SMN1 que
    resulta na deficiência de uma proteína fundamental para a sobrevivência dos neurônios
    motores, que é responsável pelos movimentos voluntários e involuntários do corpo. Isso
    afeta, principalmente, os músculos responsáveis pela locomoção, dificuldade de segurar
    objetos nas mãos, escoliose, e em casos mais graves, dificuldades para respirar e
    engolir. A AME não possui cura, mas tem tratamentos em que podem auxiliar no manejo da
    doença, dependendo do tipo e gravidade da doença."
      illness3Reference="ref"
      content3p="Cuidar do sistema muscular é crucial para uma vida
    saudável. Um descanso adequado, atividade física regular e a adoção de hábitos
    saudáveis contribuem para manter os músculos internos e externos em boas condições,
    prevenindo doenças degenerativas e inflamatórias que podem enfraquecer e causar dor
    nos músculos, além de promover o bem-estar geral."
      content3Reference="ref"
    />
  </main>
</template>
