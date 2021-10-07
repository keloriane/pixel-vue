<template>
  <section id="home_skills_container" :style="cssProps">
    <div class="skills__container">
      <Flipper :flipKey="active"
               spring="gentle"
               :decisionData="active"

      >
      <ListContainer  class="skill-list-container">
        <li v-for="(item , i) in skills " :key="i+1" @click="handleClick(i)" class="skill-items">
          <ListItem
            :item="i"
            :expanded="active === i"
            :imageSkill="item.image"
            :skillName="item.name"
            :skillDescription="item.description"


          />

        </li>
      </ListContainer>
      </Flipper>
    </div>
  </section>
</template>
<script>
import blobImage from '~/assets/images/blobservice.png';
import {ListContainer} from "./home-skills"
import ListItem from "~/components/Home_Skills/ListItem";
import {Flipper} from 'vue-flip-toolkit';
  export default {
    name: "Home_Skills",
    components: {
      ListContainer,
      ListItem,
      Flipper
    },
    methods: {
      handleClick(item) {
        this.active = this.active === item ? 0 :item
      }
    },
    data() {
      return {
        skills : [
          {name: "UX/UI Design", image:"./assets/images/uxui.png", description:"Since we’re creative thinkers, our code is always customized. We leverage custom development to make sure your website is supported oSince we’re creative thinkers, our code is always customized. We leverage custom development to make sure your website is supported on all browsers/devices with fun and engaging interactions. " },
          {name: "Web Development", image:"./assets/images/computer.png", description:"Since we’re creative thinkers, our code is always customized. We leverage custom development to make sure your website is supported oSince we’re creative thinkers, our code is always customized. We leverage custom development to make sure your website is supported on all browsers/devices with fun and engaging interactions. "  },
          {name: "Sys-Admin & Devops", image:"./assets/images/computer.png", description: "Since we’re creative thinkers, our code is always customized. We leverage custom development to make sure your website is supported oSince we’re creative thinkers, our code is always customized. We leverage custom development to make sure your website is supported on all browsers/devices with fun and engaging interactions. " },
          {name: "Branding", image:"./assets/images/computer.png", description: "Since we’re creative thinkers, our code is always customized. We leverage custom development to make sure your website is supported oSince we’re creative thinkers, our code is always customized. We leverage custom development to make sure your website is supported on all browsers/devices with fun and engaging interactions. " },
          {name: "SEO/SEA", image:"./assets/images/computer.png", description: "Since we’re creative thinkers, our code is always customized. We leverage custom development to make sure your website is supported oSince we’re creative thinkers, our code is always customized. We leverage custom development to make sure your website is supported on all browsers/devices with fun and engaging interactions. " },
        ],
        cssProps: {
          backgroundImage: `url(${blobImage})`
        },
        item:[0,1,2,3,4],
        active:0
      }
    }
  }
</script>

<style scoped>
#home_skills_container {
  min-height: 850px;
  background-size:cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}
.skills__container {
  position: relative;
  z-index: 1;
}
.skill-items {

  z-index: 2;
  margin-top: 30px;

}



</style>
