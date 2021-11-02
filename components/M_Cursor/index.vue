<template>
  <div class="cursor">
    <p class="click-event">Click</p>
<!--    <p class="regular-event">hello :)</p>-->
  </div>
</template>

<script>
export default {
  name: "M_Cursor",
  mounted() {
    const hoverElements  = [
      "A",
      "BUTTON",
      "IMG"
    ]
    const page = document.querySelector("#o-main");
    const cursor = document.querySelector('.cursor');
    const clickEvent = document.querySelector('.click-event');
    const enterMouse= () => {
      gsap.to(cursor,{
        duration:1,
        ease: "slow(.215,.61,.355,1)",
        delay:.15
      })
    }
    const mouseMove = (e) => {

      const mousePos = {
        x: e.clientX,
        y: e.clientY
      }
      gsap.to(cursor, {
        x:mousePos.x,
        y:mousePos.y,

      })
    }
    const updateOnHover = (e) => {
      if(e.target.className.includes('home_skills_container')) {
        cursor.style.border = "1px solid white";
        console.log("hover");
      }
      if(hoverElements.includes(e.target.tagName)){

        gsap.to(cursor,{
          height: 50,
          width:50,
          background: "#EB5757",
          borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%"
        })
        gsap.fromTo(clickEvent, {
          opacity:0,
          y:20
        },{
          opacity:1,
          y:0,

        })
      }else{
        gsap.to(cursor,{
          height: 90,
          width:90,
          background: "transparent"
        })
        gsap.to(clickEvent, {
          opacity:0,
          y:-20
        })
      }
    }
    page.addEventListener('mouseenter' , enterMouse)
    page.addEventListener('mousemove' , mouseMove)
    page.addEventListener('mouseover' , updateOnHover)
    page.addEventListener('mouseout' , updateOnHover)
  }
}
</script>
<style>
.cursor {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 800;
  z-index: 101;
  left: -25px;
  top: -21px;
  pointer-events: none;
  animation: morph 5s linear infinite;
}
@keyframes morph{
  0%, 100% {
    border-radius: 40% 60% 70% 30% / 40% 40% 60% 50%;

  }
  34% {
    border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%;


  }
  67% {
    border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%;


  }
}



</style>
