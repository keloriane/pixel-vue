<template>
  <section id="home_projects">
    <div class="projects__container">
      <div class="section_title-action">
        <div class="title-action__wrapper">
          <div class="projects_call_to_action">

            <h3 class="accent">see all our projects</h3>
          </div>
          <div class="project_section_title">

            <h2 class="section_title"> Recent Projects</h2>
          </div>
        </div>

      </div>
      <Home_Project_Card_Container class="projects__card__container">


        <Project_Card v-for="project in projects" :image="project.image" :title="project.name" :key="project.name"
                      :url="`/${project.slug}`" class="hover-state-true" />


      </Home_Project_Card_Container>
    </div>

  </section>
</template>

<script>
import {Home_Project_Card_Container} from "./home-projects.style";
import {mapState} from 'vuex';

import Project_Card from "~/components/Home_Projects/Project_Card";
import gsap from 'gsap'
export default {
  name : "Home_Project",
  components:{
    Project_Card,
    Home_Project_Card_Container
  },
  mounted() {
    gsap.from('.section_title' , {
      x:300,
      scrollTrigger:{
        trigger:"#home_projects",
        start: "top top"
      }
    })
  },
  computed:{
    ...mapState([
      'projects'
    ])
  },
}


</script>

<style scoped lang="scss">
section{
  width: 100vw;
  background-color: #fff;
  padding-bottom: 318px;
  padding-top: 168px;
  overflow: hidden;
}

.project_section_title {
  position: relative;
}
.section_title-action{
  position: absolute;
  top: -15%;
  h3 {

  }
  h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 11vw;
    line-height: 98.5%;
    display: flex;
    align-items: center;
    letter-spacing: -0.02em;
    text-transform: capitalize;
    color: #000000;
    box-sizing: border-box;
    left:-25%;
    position: absolute;
    width: 100vw;


  }
}
.projects__container {
  margin: 200px auto;
  max-width: 1280px;
  width: 100%;
  position: relative;
  padding-bottom: 480px;
  background-color: #fff;

}
</style>
