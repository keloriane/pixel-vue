<template>
  <section id="project_gallery" :style="`background-color:${accent}`">
    <div class="gallery__wrapper" >
    <div class="main-gallery" >
    <div v-for="image in images">
      <img :src="image.src" alt="screenshots">
    </div>

    </div>

    </div>
  </section>
</template>
<style lang="scss">
.gallery__wrapper {
  width: 100%;
  max-width: 1280px;
  margin: auto;
}
.main-gallery{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  img {
    width: 100%;
  }
}

</style>
<script>

export default {
  name: "Project_Gallery",
  props: {
    images: Array,
    accent: String
  }
}

</script>
