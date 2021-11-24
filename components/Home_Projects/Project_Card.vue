<template>

  <Project_Item_Card class="hover-state-true" >
    <NuxtLink :to="url" class="layer_blue">
      <img :src="image" :alt="title" class="project_home_image" >
      <Project_Item_Layer>
        <Project_Item_Layer_Content>
          <Project_Item_Layer_Content_Discipline>
            discipline
          </Project_Item_Layer_Content_Discipline>
          <Project_Item_Layer_Content_Title>
            <h2>
              {{ title }}
            </h2>
          </Project_Item_Layer_Content_Title>
          <Project_Item_Layer_Content_Index>
            <p>
              index
            </p>
          </Project_Item_Layer_Content_Index>
          <Project_Item_Layer_Content_Link>
          </Project_Item_Layer_Content_Link>
        </Project_Item_Layer_Content>
      </Project_Item_Layer>
</NuxtLink>
  </Project_Item_Card>


</template>

<script>

import {
  Project_Item_Card,
  Project_Item_Layer,
  Project_Item_Layer_Content,
  Project_Item_Layer_Content_Discipline,
  Project_Item_Layer_Content_Title,
  Project_Item_Layer_Content_Index,
  Project_Item_Layer_Content_Link
} from "~/components/Home_Projects/home-projects.style";
import gsap from 'gsap';


export default {
  name: "Project_Card",
  components: {
    Project_Item_Card, Project_Item_Layer,
    Project_Item_Layer_Content,
    Project_Item_Layer_Content_Link,
    Project_Item_Layer_Content_Discipline,
    Project_Item_Layer_Content_Title,
    Project_Item_Layer_Content_Index,

  },
  mounted() {

    gsap.registerPlugin(ScrollTrigger)


  },
  props: [
    'image',
    'title',
    'url'
  ]
}
</script>

<style>

</style>
