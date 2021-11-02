<template>
  <section>
    <div class="projects__container">
      <div class="projects_call_to_action">
        see all our projects
      </div>
      <div class="project_section_title">
        <h2 class="section_title" > Recent Projects</h2>
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
export default {
  name : "Home_Project",
  components:{
    Project_Card,
    Home_Project_Card_Container
  },
  computed:{
    ...mapState([
      'projects'
    ])
  },
}


</script>

<style scoped>
section{
  width: 100vw;
  background-color: #fff;
  padding-bottom: 185px;
}
.section_title{
  font-style: normal;
  font-weight: 600;
  font-size: 169px;
  line-height: 98.5%;
  position: absolute;
  top: -15%;
  left: -5%;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;
  text-transform: capitalize;
  color: #000000;
  box-sizing: border-box;
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
