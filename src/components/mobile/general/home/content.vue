<template>
  <section class="is-mobile">
    <h2>Sistemas do Corpo </h2>

    <p>O corpo humano é uma máquina extraordinária, composta por sistemas interligados que trabalham juntos para
      manter o equilíbrio e a saúde.
    </p>
    <p>
      Aqui, você poderá explorar de forma clara e simples os principais sistemas do corpo, entendendo suas funções
      e como eles se conectam para garantir o funcionamento da nossa vida. </p>

    <div>
      <ul>
        <li><RouterLink to="/sistema/digestivo"><img src="/home/icons/digestive.png" alt="icone sistema distorio"></RouterLink></li>
        <li><RouterLink to="/sistema/cardiovascular"><img src="/home/icons/circulatory.png" alt="icone sistema cardiovascular"></RouterLink></li>
        <li><RouterLink to="/sistema/osseo"><img src="/home/icons/bone.png" alt="icone sistema osseo"></RouterLink></li>
        <li><RouterLink to="/sistema/nervoso"><img src="/home/icons/nervous.png" alt="icone sistema nervoso"></RouterLink></li>
      </ul>
    </div>
    <div>
      <ul>
        <li><RouterLink to="/sistema/muscular"><img id="muscle" src="/home/icons/muscle.png" alt="icone sistema muscular"></RouterLink></li>
        <li><RouterLink to="/sistema/reprodutor-feminino"><img src="/home/icons/reproductive.png" alt="icone sistema reprodutor"></RouterLink></li>
        <li><RouterLink to="/sistema/respiratorio"><img src="/home/icons/respiratory.png" alt="icone sistema respiratorio"></RouterLink></li>
        <li><RouterLink to="/sistema/urinario"><img src="/home/icons/urinary.png" alt="icone sistema urinario"></RouterLink></li>
      </ul>
    </div>

    <div class="images">

      <img src="/home/bodyhuman.png" alt="imagem svg">

    </div>

    <div class="text">
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At quasi, numquam fuga voluptatem laudantium
        magni maxime rem minus obcaecati aliquam unde natus sint mollitia eaque perspiciatis facilis optio nisi
        tenetur!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo id cum, odio adipisci quasi vero
        laboriosam hic dicta sapiente assumenda, consequatur veritatis cupiditate accusantium minus voluptas
        quae aperiam dolorem consequuntur?</p>
    </div>
  </section>
</template>

<style scoped>
section {
  text-align: center;
  margin: -15vw 0 5vw 0;
  padding: 5vw 0 5vw 0;

  h2 {
    font-family: 'Tilt Warp';
    color: #103F65;
    font-weight: 700;
    font-size: clamp(0.6rem, 5vw, 2rem);
    margin: 3vw 0;
  }

  p {
    font-family: 'Urbanist';
    font-size: clamp(0.3rem, 4vw, 1.3rem);
    line-height: 6vw;
    margin: 3vw 5vw 0 5vw;
  }

  div {
    ul {
      display: flex;
      justify-content: center;

      li {
        background: linear-gradient(to right, #47ABC6, #1F527C);
        border-radius: 50%;
        align-content: center;
        width: 16vw;
        height: 16vw;
        text-align: center;
        margin: 1vw;

        img {
          height: 50%;
          max-width: 70%;
        }
      }
    }
  }

  .images {
    background:
      url(/mobile/home/fundo2.png) no-repeat left bottom,
      url(/mobile/home/fundo3.png) no-repeat right bottom;

    background-size: 17vw;
    display: flex;
    justify-content: center;

    img {
      height: 50%;
      width: 40%;
      margin: 5vw 0;
    }
  }

  .text {
    font-size: clamp(0.3rem, 4vw, 1.3rem);
    border: 0.8px solid #103F65;
    border-radius: 2vw;
    padding: 3vw;
    line-height: 6vw;
    margin: 0 5vw 0 5vw;
  }

}
</style>
