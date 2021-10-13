<template>
  <main>

    <About_Header/>
    <About_Technologies :item="techno.icons" :title="techno.title" :text="techno.text"/>
    <About_Technologies :item="software.icons" :title="software.title" :text="software.text"/>

  </main>

</template>

<script>

import About_Header from "~/components/About_Header/";
import About_Technologies from "~/components/About_Technologies";

export default {
  components: {
    About_Technologies,
    About_Header,

  },
  data() {
    return {
      techno: {
        icons: [
          {name: "Node js", image: "./assets/images/nodejs.png"},
          {name: "git", image: "./assets/images/git.png"},
          {name: "php", image: "./assets/images/php.png"},
          {name: "Typescript", image: "./assets/images/typescript.png"},
          {name: "docker", image: "./assets/images/docker.png"},
          {name: "Webgl", image: "./assets/images/webgl.png"},
          {name: "React js ", image: "./assets/images/react.png"},
          {name: "Vue js", image: "./assets/images/vuejs.png"},
          {name: "Wordpress", image: "./assets/images/wordpress.png"},
          {name: "GraphQL", image: "./assets/images/graphql.png"},
          {name: "Sass", image: "./assets/images/sass.png"},
        ],
        title: "Technologies we uses",
        text: "Since we’re creative thinkers, our code is always customized. We leverage custom development to make sure your website is supported on all browsers/devices with fun and engaging interactions. Our services are flexible for both your users and your business. We provide seamless integrations and automations to meet your marketing goals, a precise content management system for your growing business."

      },
      software : {
        icons: [
          {name: "Adobe Illustrator ", image: "./assets/images/illustrator.png"},
          {name: "XD ", image: "./assets/images/xd.png"},
          {name: "Photoshop", image: "./assets/images/photoshop.png"},
          {name: "figma", image: "./assets/images/figma.png"},
        ],
        title: "Design tools we work with",
        text: "Each website we design is unique, meaning no templates and no recycled work. We want to make sure each client’s vision is represented in its truest form, so we start from the beginning. Our process varies from client to client and is broken up into curated phases. It goes something like this: discovery, web structure,  web design and web development. Don’t worry, we’ll explain all of this to you during the process."
      }
    }
  }
}

</script>

