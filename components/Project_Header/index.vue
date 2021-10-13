<template>
  <Project_Header_Container>
    <div class="info__project info-container">
      <h2>{{ title }}</h2>
    </div>
    <div class="image__project">
      <img :src="image" alt="">
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

  }

}
</script>
