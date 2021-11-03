<script>
import gsap from 'gsap'
import Loader from './Loader';


export default {
  name: "Loader",
  mounted() {
    addEventListener('load', _ => {
      new Loader();
    })
  }
}
</script>
<template>
  <div id="loader-container">
    <div class="loader-text"></div>
    <div id="loader">

    </div>
  </div>
</template>
<style lang="scss">
canvas {
  position: absolute;

  left: 0;
  z-index: 2;
  pointer-events: none;

}

.loader-letter {
  z-index: 5;
  overflow: hidden;
}

.loader-letter:last-child {
  color: #EB5757;
}
.loader-letter:first-child {
  color: #EB5757;
}
.loader-text {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  font-weight: 800;
  text-transform: uppercase;
  justify-content: center;
  color: white;
  font-size: 14vw;
}
#loader-container {
  position: absolute;
}

</style>
