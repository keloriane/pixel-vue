<script>
import Project_Header from "~/components/Project_Header";
import Project_Story from "~/components/Project_Story";
import "./../assets/main.css"
import Project_Gallery from "~/components/Project_Gallery";
import Footer from '~/components/Footer/Footer'
import Menu from "~/components/Menu";
import Project_Navigation from "~/components/Project_Navigation";
import _ from "lodash";

export default {
  name: "Project",
  components: {
    Project_Navigation,
    Menu,
    Project_Gallery,
    Project_Header,
    Project_Story,
    Footer

  },
  computed: {
    project() {
      return this.$store.getters.getProjectId(this.$route.params.projectid)
    },
    nextProject() {

      if(this.project.id <= 2 ) {
      return  this.$store.getters.getNextProject(this.project.id + 1)
      } else {
        return this.$store.getters.getNextProject(this.project.id - 1)
      }


    }


  },

  methods: {
  }



}


</script>
<template>
  <div id="o-main">
    <Menu />
<Project_Header :title="project.name" :image="project.headerImage" :platform="project.platform" :technologies="project.technology" :accent="project.accent" />
  <Project_Story :story="project.description" :challenges="project.challenges"/>
    <Project_Gallery :images="project.gallery" :accent="project.accent" />
    <Project_Navigation :next-project="nextProject.name" :url="`/${nextProject.slug}`" />
  <Footer />
  </div>
</template>
<style>

</style>
