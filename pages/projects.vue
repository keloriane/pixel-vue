<script>
import {mapState} from 'vuex';
import Menu from "~/components/Menu";
    import gsap from 'gsap';
import M_Cursor from "~/components/M_Cursor";
export default {
  pageTransition: {
    mode: 'out-in',

  },
  components: {M_Cursor, Menu},
  computed: {
    ...mapState([
      'projects'
    ])
  },
  mounted() {
    const allProjectLinks = gsap.utils.toArray('project_links')
    const imageInside = document.querySelector('.image_inside')

    function createProjectHover() {
      console.log("hover");
    }

    function initAnimation () {
      allProjectLinks.forEach(link => {
        link.addEventListener('mouseenter' , craeteProjectHover);
        link.addEventListener('mouseeleave' , craeteProjectHover);
      })
    }
  }
}

</script>
<template>
<div id="projects_main"  class="main_site">
  <Menu />
  <M_Cursor />
  <div class="project_header">

  </div>
  <div class="projects_page_container">
    <ul class="projects_card_container">
      <li v-for="project in projects" class="project_links" :data-image="project.image">
        <NuxtLink :to="`/${project.slug}`" >
          <p class="project_name">{{ project.name }}</p>
          <img :src="project.image" alt="">
        </NuxtLink>
        <div class="image_inside">

        </div>
      </li>
    </ul>
  </div>
</div>
</template>

  <style lang="scss">


    .projects_page_container {
      width: 100%;
      max-width: 1280px;
      height: 100vh;
      margin: auto;
      .projects_card_container {
      height: 100%;
        display: flex;
        flex-flow: column;
        align-items: flex-start;

        justify-content: center;

      }

      img {
        position: absolute;
        display: none;
      }
      .project_name {
        margin-top: 30px;
        padding: 10px;
        text-align: left;
        font-size: 4.5vw;
        font-weight: 800;
        -webkit-text-stroke: 1px #EB5757;
        color: transparent;
        &:hover {
          color: #282038;
        }
      }

    }
  </style>

