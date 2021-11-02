<template>

  <main>
    <div v-if="loaded" id="o-main" class="main_site">

      <M_Cursor/>
      <Menu/>
      <Header/>
      <Home_About/>
      <Home_Project/>
      <Home_Skills/>
      <Footer/>
    </div>

    <div v-else class="main_site">
      <Loader/>
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
      loaded: false,
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


    const letters = [...document.querySelectorAll('.loader_letter')]
    const loaderAnimation = gsap.timeline()

    loaderAnimation
      .from("#loader", {
        duration: 1,
        x: "100%",
        ease: "slow(.215,.61,.355,1)"
      })
      .from(letters, {
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.02,
        ease: "slow(.215,.61,.355,1)"

      }) .to(letters, {
      duration: 1,
      y: -50,
      opacity: 0,
      stagger: 0.02,
      ease: "slow(.215,.61,.355,1)"

    })
      .to("#loader", {
        duration: 1,
        x: "100%",
        opacity:0,
        ease: "slow(.215,.61,.355,1)"
      })

    setTimeout(()=> {
      loaderAnimation.reverse()
      this.loaded = true
    },loaderAnimation.duration()*1000)

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

  background-color: #fff;
}

.projects__container {
}


</style>
