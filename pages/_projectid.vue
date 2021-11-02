<script>
import {projects} from "~/store/data";
import Project_Header from "~/components/Project_Header";
import Project_Story from "~/components/Project_Story";
import "./../assets/main.css"
import Project_Gallery from "~/components/Project_Gallery";
import Footer from '~/components/Footer/Footer'
import Menu from "~/components/Menu";

export default {
  name: "Project",
  components: {
    Menu,
    Project_Gallery,
    Project_Header,
    Project_Story,
    Footer

  },
  computed: {
    project() {
      return this.$store.getters.getProjectId(this.$route.params.projectid)
    }
  }

}


</script>
<template>
  <div id="o-main">
    <Menu />
<Project_Header :title="project.name" :image="project.headerImage" :platform="project.platform" :technologies="project.technology" :accent="project.accent" />
  <Project_Story />
    <Project_Gallery :images="project.gallery" :accent="project.accent" />
  <Footer />
  </div>
</template>
<style>

</style>
