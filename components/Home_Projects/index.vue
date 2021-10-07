<template>
  <section class="projects__container">
    <Home_Project_Card_Container class="projects__card__container" >

        <Project_Card :image="project.image" :title="project.name" v-for="project in projects" :key="project.name" />


    </Home_Project_Card_Container>
  </section>
</template>

<script>
import {Home_Project_Card_Container} from "./home-projects.style"
import Project_Card from "~/components/Home_Projects/Project_Card";
export default {
  name : "Home_Project",
  components:{
    Project_Card,
    Home_Project_Card_Container
  },


  data() {
    return {
      projects : [
        { name:"Start Creation &co" , image: "./assets/images/startcreation.png" },
        /*  { name:"Samapass" , image: "./assets/images/samapass.png" },*/
        { name:"Buddy Belgium" , image: "./assets/images/buddybelgium.png" },
        { name:"Cercle D'histoire D'Auderghem" , image: "./assets/images/chauderghem.png" },

      ]
    }
  }
}


</script>

<style>
.projects__container {
  margin: 200px auto;
  max-width: 1280px;
  width: 100%;
  padding: 20px;

}
</style>
