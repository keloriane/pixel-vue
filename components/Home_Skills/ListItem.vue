<template>
  <Flipped
    stagger="list-item"
    :flipId="flipId" :shouldInvert="shouldFlip"

  >

    <div class="list__item__container" :class="{isExpanded: expanded}">
      <Flipped :inverseFlipId="flipId">
        <div>
          <Flipped :flipId="flipIdAvatar">
            <p
              class="skill__name"
            >{{ skillName }}</p>

          </Flipped>
          <div class="additional-content" v-if="expanded">

            <div class="image__container">
              <img class="image-skill" :src="imageSkill" alt="">
            </div>
            <div class="text__skills__container">
              <p class="skill-description">
                {{ skillDescription }}
              </p>
            </div>
          </div>
        </div>
      </Flipped>

    </div>
  </Flipped>

</template>

<script>
import {Flipped} from "vue-flip-toolkit";
import {mount} from "@vue/test-utils";

export default {
  name: "ListItem",
  components: {
    Flipped
  },
  computed: {
    flipId() {
      return `listItem-${this.item}`

    },
    flipIdAvatar() {
      return `listItem-avatar-${this.item}`
    }
  },
  methods:{
    shouldFlip(prev , current) {

      return prev === this.item || current === this.item

    }
  },

  props: {
    imageSkill: String,
    skillDescription: String,
    expanded: Boolean,
    skillName: String,
    item: Number,


  }
}


</script>

<style>
.list__item__container {
  max-width: 800px;
  width: 100%;
  margin: auto;
  z-index: 2;


}

.skill-description {

  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 140%;

}

.text__skills__container {
  width: 100%;
  max-width: 394px;
}
.image-skill{
  position: absolute;
  right: -70%;
  top: 2%;
  z-index: -1;

}
.skill__name:hover{
  color: #EB5757;

}
.skill__name {
  font-weight: 800;
}

</style>
