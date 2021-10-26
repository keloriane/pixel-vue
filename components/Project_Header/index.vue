<template>
  <Project_Header_Container>
    <div class="o-container">
      <div class="info__wrapper">
      <div class="info_title">
        <h2 :style="`color: ${accent}`">{{ title }}</h2>
      </div>
      <div class="info__platform subinfo">
        <h3 :style="`color: ${accent}`" >Platform</h3>
        <p>{{platform}}</p>
      </div>
      <div class="info__technology subinfo">
        <h3 :style="`color: ${accent}`">Technologies</h3>
        <p>{{technologies}}</p>
      </div>

      </div>
      <div class="image__project">
        <img :src="image" alt="">
      </div>
    </div>
  </Project_Header_Container>
</template>

<script>
import {Project_Header_Container} from "~/components/Project_Header/project-header.style";

export default {
  name: "Project_Header",
  components: {
    Project_Header_Container
  },

  props: {
    title: String,
    image: String,
    technologies: String,
    platform: String,
    accent: String

  }

}
</script>
