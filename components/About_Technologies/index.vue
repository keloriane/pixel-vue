<template>
  <section class="about_technologies">
    <div class="title_container">
    <h3>

      {{title}}
    </h3>

    </div>
  <div class="text_container">
    <p>{{text}}</p>
  </div>

  <div class="technologies">

  <div class="card-container" v-for="tech in item" :key="tech.name">
      <img :src="tech.image" alt="">

  </div>


  </div>
  </section>
</template>
<script>
  import {mapState , mapGetters, mapActions } from "vuex"
  export default {
    name: "About_Technologies",
    computed: mapState(['users']),
    methods: {
      ...mapActions(['getUsers'])
    },
    props: {
      item : Array,
      title: String,
      text: String
    },

  }
</script>

<style scoped lang="scss">
.about_technologies {
  margin-top: 100px;
}
.technologies {

  display: flex;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;

  max-width: 915px;
  margin: auto;


}

.text_container {
  width: 100%;
  max-width: 515px;
  margin: 24px auto;



  p {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 140%;
    /* or 22px */

    text-align: center;
    letter-spacing: 0.01em;
  }
}

.title_container {
  width: 350px;
  margin: auto;
  display: flex;
  justify-content: center;
  h3 {
  text-align: center;
    font-style: normal;
    font-weight: 600;
    font-size: 50px;
    line-height: 84.5%;
    /* or 42px */

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.01em;

    /* Gray 1 */

    color: #333333;
  }
}
</style>
