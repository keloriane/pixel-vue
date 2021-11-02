<script>
import gsap from 'gsap'

export default {
  name: "Loader",
  mounted() {

  }
}
</script>
<template>
  <div>
    <div id="loader">
      <div class="loader_title">
        <div class="loader_line">
          <span class="loader_letter">P</span><span class="loader_letter">I</span><span
          class="loader_letter">X</span><span class="loader_letter">E</span><span class="loader_letter">L</span>

        </div>
        <div class="loader_line">
          <span class="loader_letter">S</span><span class="loader_letter">T</span><span
          class="loader_letter">U</span><span class="loader_letter">D</span><span class="loader_letter">I</span><span
          class="loader_letter">O</span><span class="accent">.</span>
        </div>
      </div>
    </div>

  </div>

</template>
<style lang="scss">
#loader {
  width: 100vw;
  height: 100vh;
  background-color: #282038;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    display: block;
    position: relative;
  }
}

.loader_line {
  font-size: 10vw;
  font-weight: 800;
  color: white;
  display: flex;
  width: 100%;
  justify-content: center;

  .loader_title {
    display: flex;
  }

}
</style>
