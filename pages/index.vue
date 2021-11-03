<template>

  <main>
      <Loader/>
    <div  id="o-main" class="main_site">

      <M_Cursor/>
      <Menu/>
      <Header/>
      <Home_About/>
      <Home_Project/>
      <Home_Skills/>
      <Footer/>
    </div>


  </main>


</template>

<script>
import Header from "~/components/Header/Header";
import "./../assets/main.css"
import About_Technologies from "~/components/About_Technologies";
import Home_About from "~/components/Home_About";
import Home_Project from "~/components/Home_Projects";
import Home_Skills from "~/components/Home_Skills";
import Menu from "~/components/Menu"
import M_Cursor from "~/components/M_Cursor"
import Loader from '~/components/Loader'
import gsap from "gsap";

export default {
  components: {Home_Skills, Home_Project, Home_About, About_Technologies, Header, Menu, M_Cursor, Loader},
  data() {
    return {

    }
  },





  mounted() {




    if (process.browser) {
      let container = document.querySelector("#scroll-container");
      let height;

      function setHeight() {
        height = container.clientHeight
        document.body.style.height = `${height}px`;

      }

      ScrollTrigger.addEventListener("refreshInit", setHeight)

    }






  },
}
</script>

<style lang="scss">
@function rem($pixel) {
  @return $pixel / 16 + rem
}


.cursor {
  aspect-ratio: 0.5/0.5;
  position: fixed;

  &::before {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    content: '';
  }
}

.main_site {
/*
  background-color: #fff;*/
}

.projects__container {
}


</style>
