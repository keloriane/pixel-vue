<template>

    <div class="list__item__container" :class="{isExpanded: expanded}">
        <div class="list-item-wrapper">
            <div class="inner-list-container">
              <li
                class="skill__name" :class="{skill__active: expanded}"
              >{{ skillName }}</li>
              <div class="additional-content" v-if="expanded">
                <div class="text__skills__container">
                  <p class="skill-description">
                    {{ skillDescription }}
                  </p>
                </div>
                <img :src="imageSkill" alt="" class="image-skill">
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import {Flipped} from "vue-flip-toolkit";
import {mount} from "@vue/test-utils";

export default {
  name: "ListItem",
  computed: {

  },
  methods: {

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
.list-item-wrapper {
  display: flex;
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

.image-skill {
  position: absolute;
  right: -50%;
  top: 2%;
  z-index: -1;
}

.skill__name:hover {
  color: #EB5757;
}

.skill__active {
  color: #EB5757;
}

.skill__name {
  font-weight: 800;
}

@keyframes fade_in {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100%{
    opacity: 1;
  }
}
.animated-in {
  animation: fade_in 0.5 forwards;
}

</style>
