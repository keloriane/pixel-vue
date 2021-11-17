<template>
  <div class="story__section">
    <div class="background_pattern" :style="`background-image:url(${pattern})`">

    </div>
    <div class="story__text_container story_wrapper">
      <h2>The Story</h2>
    <p>
      {{story}}
    </p>

    </div>
    <div class="story__challenges_container story_wrapper">
    <h2>The Challenges</h2>
    <p>
      {{challenges}}    </p>

    </div>

  </div>
</template>


<style lang="scss" scoped>
.story__section {
  width: 100vw;
  height: 80vh;
  background-color: black;
  color: white;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .background_pattern {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-size: cover;
    z-index: 10;
  }
  .story_wrapper {
    max-width: 588px;
    width: 100%;
    margin: auto;
  }
  h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 50px;
    line-height: 98.5%;

    text-align: center;
    letter-spacing: -0.01em;
    text-transform: capitalize;
  }
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 140%;
    text-align: center;
    font-variant: small-caps;
    color: #F2F2F2;
  }
}
</style>
<script>
import pattern from '~/assets/images/patterns-background.png'
export default {
  name: "Project_Story",
  props:{
    story: String,
    challenges: String
  },
  data: function ( ) {
    return {
      pattern
    }
  }
}

</script>
