<script>
import gsap from "gsap";

export default {
  name: "Menu",

  methods: {
    handleOpen: function () {
      const menuTimelineOpen = gsap.timeline()
      const menuLinks = document.querySelectorAll('.menu_link')

      menuLinks.forEach((link, i) => {

        gsap.to("#main_menu", {top: 0, duration: .6, ease: "slow(.215,.61,.355,1)"})
        if (i % 2 === 0) {
          gsap.fromTo(link, {
              opacity: 0,
              x: -50
            }, {
              opacity: 1,
              stagger: .08,
              duration: .7,
              ease: "slow(.215,.61,.355,1)",
              delay: .9,
              x: 0
            }
          )

        } else if (i % 2 !== 0) {
          gsap.fromTo(link, {
              opacity: 0,
              x: 50
            }, {
              opacity: 1,
              stagger: .08,
              duration: .7,
              ease: "slow(.215,.61,.355,1)",
              delay: .9,
              x: 0
            }
          )
        }
      })


    },

    handleClose: function () {
      const menuLinks = document.querySelectorAll('.menu_link')

      const menuTimelineClose = gsap.timeline();
      menuLinks.forEach((link, i) => {
        if (i % 2 === 0) {
          gsap.fromTo(link, {
            y: 0,
            opacity: 1
          }, {
            x: 50,
            stagger: .1,
            duration: .3,
            opacity: 0
          })
        } else if (i % 2 !== 0) {
          gsap.fromTo(link, {
            y: 0,
            opacity: 1
          }, {
            x: -50,
            delay: .1,
            stagger: .1,
            duration: .3,
            opacity: 0
          })
          gsap.to("#main_menu", {top: "-103%", duration: .3, delay: .4})
        }
      })
      /*   menuTimelineClose
           .fromTo(menuLinks, {
             y:0,
             opacity:1
           },{
             y:50,
             stagger: .1,
             duration: .3,
             opacity:0
           })
           */


    }


  },
  mounted() {



    /*  const menuActionOpen = document.querySelector('#menu-button')
      const menuActionClose = document.querySelector('#close-button')
      menuActionOpen.addEventListener("click" , ()=> {
        menuTimelineOpen.play()
      })
      menuActionClose.addEventListener("click" , ()=> {
        menuTimelineClose.play()
      })*/

  }

}
</script>
<template>
  <div id="menu">
    <div class="menu_action">
      <h1>
        <NuxtLink to="/">
          <span class="accent">Pxl</span> Studio <span class="accent">.</span>
        </NuxtLink>
      </h1>
      <button id="menu-button" v-on:click="handleOpen">
        menu <span class="accent">.</span>
      </button>
    </div>
    <div id="main_menu">
      <div class="inner_menu">
        <nav class="menu_container">
          <div id="title">
            <NuxtLink to="/"><span class="accent">Pxl</span> Studio <span class="accent">.</span></NuxtLink>

          </div>

          <div class="menu_navigation_list">
            <ul>
              <li class="menu_item">
                <NuxtLink class="menu_link" to="/">
                  Home
                </NuxtLink>
              </li>
              <li class="menu_item">
                <NuxtLink class="menu_link" to="/about">

                  About
                </NuxtLink>
              </li>
<!--              <li class="menu_item">
                <NuxtLink class="menu_link" to="/projects">
                  Project
                </NuxtLink>
              </li>-->
              <li class="menu_item">
                <NuxtLink class="menu_link" to="/contact">
                  Contact
                </NuxtLink>
              </li>
            </ul>
          </div>
        </nav>
        <button id="close-button" v-on:click="handleClose">
          close <span class="accent">.</span>
        </button>

      </div>
    </div>
  </div>
</template>
<style lang="scss">

.menu_action {
  display: flex;
  justify-content: space-between;
  width: 80vw;
  margin: 20px auto;
  a {
    text-decoration: none;
    color: #282038;
  }

  h1 {
    font-size: 30px;
  }
}

#close-button {
  border: none;
  background: none;
  color: white;
  font-weight: 800;
  text-decoration: underline;
  font-size: 24px;
  height: 25px;
}

.inner_menu {
  width: 80vw;
  margin: 20px auto;
  display: flex;

  justify-content: space-between;

  button {
    font-size: 24px;
    font-weight: 800;
  }
}

#menu-button {
  border: none;
  background: none;
  color: #282038;
  font-weight: 800;
  text-decoration: underline;
  font-size: 24px;
  height: 25px;
}

#menu {
  position: fixed;
  z-index: 100;
  background-color: #fff;
  margin: auto;
  width: 100vw;

}

#title {
  position: absolute;
  left: 40px;
  top: 30px;
}

.menu_item {
  overflow: hidden;
  &:hover {
    color: #EB5757;
  }
}

.menu_link {
  display: block;
  text-decoration: none;
  color: white;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 10vw;
  &:hover {
    color: #EB5757;
  }

}

.menu_navigation_list {
  height: 100%;
}

#main_menu {
  width: 100vw;
  background-color: #282038;
  height: 100vh;
  position: fixed;
  z-index: 1000;
  top: -103%;
  /*  transition: 0.8s cubic-bezier(.215,.61,.355,1);*/
  display: flex;
  color: #FFFFFF;

  a {
    font-size: 38px;
    color: white;
    text-decoration: none;
    font-weight: 800;
  }
}

nav {
  display: flex;
  width: 800px;
  align-items: center;

  justify-content: space-around;
  margin-left: 50px;
  margin-top: 40px;


  ul {
    display: flex;
    grid-gap: 20px;
    gap: 20px;
    flex-direction: column;
    width: 100%;
    margin-left: 20px;
    height: 100%;
    justify-content: center;
    text-align: center;
    align-items: center;

    li {
      .menu_link {

      }
    }

  }
;
}

</style>
