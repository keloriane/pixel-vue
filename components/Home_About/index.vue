<template>
  <section class="about__section">
    <div class="pixel-studio__scroll">
      <h3 class="title__scroll">
        Pxl-studio
      </h3>
    </div>
    <Home_Intro>
      <div class="intro__text__wrapper">
        <p>
          We help our customers from the elaboration of the specifications to the delivery of the <span class="accent">final product.</span>
        </p>
      </div>
    </Home_Intro>
    <About_Us_Wrapper>
      <h4 class="accent">
        About us
      </h4>
      <h3>
        Pxl-Studio is a brussels based team of experienced freelancers specialised in the design of tailor-made web projects.
      </h3>
    </About_Us_Wrapper>
    <About_Us_Work>
      <p>
        The realization of <span class="accent"> websites, e-commerce or web app</span> is part of our daily work. We are passionate about transforming our clients' ideas into stunning, websites that look and feel great. No matter what your needs are, <span class="accent">Pxl-studio</span> will do all it takes to provide you with a pixel perfect solution.
      </p>
    </About_Us_Work>
  </section>
</template>
<script>

  import {Home_Intro} from "./home_about.styles.js";
  import {About_Us_Wrapper} from "./home_about.styles.js";
  import {About_Us_Work} from "./home_about.styles.js";

  export default {
    name: "Home_About",
    data() {
      return{

      }
    },
    components: {
      Home_Intro,
      About_Us_Wrapper,
      About_Us_Work
    }
  }
</script>

<style>
  .about__section {
    width: 100%;
    max-width: 1280px;
    margin: auto;
    position: relative;
  }
  .title__scroll   {
    position: absolute;
    right: -30%;
    top:-13%;
    font-style: normal;
    font-weight: 600;
    font-size: 169px;
    line-height: 98.5%;
    display: flex;
    align-items: center;
    letter-spacing: -0.02em;
    text-transform: capitalize;

    box-sizing: border-box;
    color: transparent;
    -webkit-text-stroke: 1px black ;
  }
</style>
