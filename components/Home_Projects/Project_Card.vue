<template>

  <Project_Item_Card>
    <img :src="image" alt="">
    <Project_Item_Layer>
      <Project_Item_Layer_Content>
        <Project_Item_Layer_Content_Discipline>
           discipline
        </Project_Item_Layer_Content_Discipline>
        <Project_Item_Layer_Content_Title>
          <h2>
            {{title}}
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
  </Project_Item_Card>


</template>

<script>

import {Project_Item_Card ,
  Project_Item_Layer ,
  Project_Item_Layer_Content ,
  Project_Item_Layer_Content_Discipline ,
  Project_Item_Layer_Content_Title,
  Project_Item_Layer_Content_Index,
  Project_Item_Layer_Content_Link
} from "~/components/Home_Projects/home-projects.style";

export default {
  name: "Project_Card",
  components: {
    Project_Item_Card,Project_Item_Layer,
    Project_Item_Layer_Content ,
    Project_Item_Layer_Content_Link,
    Project_Item_Layer_Content_Discipline ,
    Project_Item_Layer_Content_Title,
    Project_Item_Layer_Content_Index,

  },
  props: [
    'image',
    'title'
  ]
}
</script>

<style>

</style>
