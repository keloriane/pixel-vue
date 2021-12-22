<template>

  <main >
    <div>
   <Loader/>
    </div>
    <div id="o-main" class="main_site" >

      <M_Cursor/>
      <Menu/>
      <Header />
      <Home_About />
      <Home_Project />
      <Home_Skills />
      <Footer />
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
import Loader from '~/components/Loader';
import 'locomotive-scroll/dist/locomotive-scroll.css'
import gsap from "gsap";



export default {
  components: {Home_Skills, Home_Project, Home_About, About_Technologies, Header, Menu, M_Cursor, Loader},
  data() {
    return {
      show: true
    }
  },

  methods:{
    showToggle() {
      setTimeout(()=> {
        this.show = false;
      },1000)
    }
  },


  mounted() {
    this.showToggle()
    gsap.registerPlugin(ScrollTrigger)
    const locoscroll = new LocomotiveScroll({
      el: document.getElementById("o-main"),
    })

    locoscroll.init();
    locoscroll.on('scroll' , ScrollTrigger.update);
    locoscroll.off("scroll", ScrollTrigger.update);
    locoscroll.scrollTo('#o-main', 0, 700);
    locoscroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#o-main" , {
      scrollTop(value) {
        return arguments.length ? locoscroll.scrollTop(value,0,0) : locoscroll.scroll.instance.scroll.y;

      },

      getBoundingClientRect() {
        return {top:0, left: 0, width: window.innerWidth , height: window.innerHeight};
      }, pinType: document.getElementById("o-main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh" , () => locoscroll.update());
    ScrollTrigger.refresh();


    const projectTl = gsap.timeline()
    ScrollTrigger.create({
      trigger: "#home__projects",
      id: "scrub",
      start: "40% 20%",
      scroller: "#o-main",
      animation: projectTl,

    })
    projectTl
      .fromTo('.layer_blue',{
        width:0,
        duration:2,
      },{
        width:300,
        stagger:.2,
      })
      .fromTo('.project_home_image' , {
        duration:1.8,
        opacity:0,
        scale:1.5
      }, {
        scale:1,
        opacity:1,
        stagger:.2,
        delay:-1,
        ease: "slow(.215,.61,.355,1)",
      })

    const elements = gsap.utils.toArray('.intro__text, .intro__title')
    gsap.from(elements,{
      opacity:0,
      y:100,
      duration:.5,
      stagger:0.2,
      scrollTrigger:{
        scroller: "#o-main",
        trigger: ".pixel-studio__scroll",
        start: "60% 60%",
        id: "scrub"

      }
    })







  },
}
</script>

<style lang="scss">
@function rem($pixel) {
  @return $pixel / 16 + rem
}

#o-main {
  overflow: auto;
}

body {
  overflow-x: hidden !important;
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
