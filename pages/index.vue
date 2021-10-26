<template>

  <main>
    <div class="main_site">
      <Menu />
    <Header/>
    <Home_About />
    <Home_Project />
    <Home_Skills />
    </div>
    <Footer />
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

export default {
  components: {Home_Skills, Home_Project, Home_About, About_Technologies, Header, Menu}
}
</script>

<style>
.main_site {

  background-color: #fff;
}

.projects__container {
}
</style>
