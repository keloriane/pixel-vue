<template>
  <section>
    <div class="projects__container">
      <Home_Project_Card_Container class="projects__card__container">


        <Project_Card v-for="project in projects" :image="project.image" :title="project.name" :key="project.name"
                      :url="`/${project.slug}`"/>


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
.projects__container {
  margin: 200px auto;
  max-width: 1280px;
  width: 100%;

  padding-bottom: 480px;
  background-color: #fff;

}
</style>
