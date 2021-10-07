<template>
  <section class="technologies">
  <div class="card-container" v-for="tech in techno" :key="techno.name">
      <img :src="tech.image" alt="">
      <p>{{ tech.name }}</p>
  </div>
    <div class="users">
      <ul v-for="user in users" :key="user.id">

        <li>
            {{user}}
        </li>
      </ul>
      <button :on-click="getUsers"> get user</button>
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
    data() {
      return {
      techno : [
        {name: "vue js " , image: "./assets/images/vuejs.png"},
        {name: "React js " , image: "./assets/images/react.png"},
        {name: "Node js" , image: "./assets/images/nodejs.png"},
        {name: "php" , image: "./assets/images/php.png"},
      ]

      }
    }
  }
</script>
