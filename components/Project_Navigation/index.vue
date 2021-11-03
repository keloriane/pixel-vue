<script>
export default {
  name: "Project_Navigation",
  props: {
    nextProject: String,
    url: String
  }
}
</script>
<template>
  <div class="project__navigation">
    <div class="project_navigation_wrapper">
      <div class="next__title__project">
        <h3>
          Next Project
        </h3>
        <h2 class="next_project_title">
          {{nextProject}}
        </h2>
      </div>
      <div class="call_to_action">
        <NuxtLink :to="url">
          NEXT PROJECT
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<style scoped>
  h2 {
    font-size: 90px;
    width: 355px;
  }
</style>
