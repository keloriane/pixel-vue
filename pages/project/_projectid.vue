<template>
  <div>
    <Project_Header :title="project.name" :image="project.headerImage"/>

    <section id="story" data-scroll>
      <div id="canvas">
        <h2 class="story_title">the story</h2>
      </div>

    </section>
  </div>
</template>
<script>

import "./../../assets/main.css";
import Project_Header from "~/components/Project_Header";


export default {
  name: "Project",
  components: {Project_Header},
  computed: {
    project() {
      return this.$store.getters.getProjectId(this.$route.params.projectid)
    }
  },


  mounted() {
    const ratio = 0.6
    /*const threshold = 0.2;
    const activate = function (elem) {
      const id  = elem.getAttribute('id');
      const anchor = document.querySelector(`a[href="#${id}"]`)
      if(anchor === null) {
        return null
      }
      anchor.parentElement
      .querySelector('.active')
      .forEach(node => node.classList.remove('active'))
      anchor.classList.add('active')
    }
    if(process.browser){
      const y = Math.round(window.innerHeight * ratio)
      const callback = (entries , observer) => {
        entries.forEach(function(entry){
          if(entry.intersectionRatio > threshold ) {
            console.log(entry);
              const canvas = documet
            const Scene = require('~/scene/scene')
            new Scene.Scene(canvas);
          }
        })
      }
      const spies = document.querySelectorAll('[data-scroll]');
      if(spies.length > 0) {
        const observer = new IntersectionObserver(callback,{
          rootMargin: `-${window.innerHeight - y - 1}px 0px -${y}px 0px`
        })
        spies.forEach(function (spy){
          observer.observe(spy)
        })
      }

    }*/


    if (process.browser) {
      const Scene = require('~/scene/scene')
      const canvas = document.querySelector('#canvas')
      const gl = new Scene.Scene(canvas , document.querySelector("#story"));
      window.addEventListener('resize', () => {
        gl.onResize();
      })

    }

  },


}


</script>
<style scoped>
#story {
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: pink;
}
.story_title{
  font-style: normal;
  font-weight: 600;
  font-size: 50px;
  line-height: 98.5%;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.01em;
  text-transform: capitalize;
  color: white;
  position: relative;
  z-index: 2;
}

* {
  margin: 0;
  padding: 0;
}

.wrap {
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

h2 {
  display: flex;
  overflow: hidden;
  line-height: 1;
}

h2 span {
  font-size: 40vw;
  font-weight: 500;
  transform: translateY(100%);
  color: #fff;
}

#canvas canvas {
  position: absolute;
  top: 0;
}

</style>
