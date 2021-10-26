<script>
export default {
  name:"Menu",

}
</script>
<template>
  <nav class="menu_container">
    <div id="title">
    <h1>PixelStudio <span class="accent">.</span></h1>

    </div>

  <ul>
    <li class="menu_item">
      <NuxtLink to="/">
        Home
      </NuxtLink>
    </li>
    <li class="menu_item">
      <NuxtLink to="/about">
        About
      </NuxtLink>
    </li>
    <li class="menu_item">
      <NuxtLink to="/projects">
        Project
      </NuxtLink>
    </li>
    <li class="menu_item">
      <NuxtLink to="/contact">
      Contact
      </NuxtLink>
    </li>
  </ul>
  </nav>
</template>
<style lang="scss">
h1 {
  font-size: 30px;
}

nav {
  display: flex;
  width: 800px;
  align-items: center;

  justify-content: space-around;
  margin-left: 50px;
  margin-top: 40px;


  ul {
    display:flex;
    justify-content: space-evenly;

    width: 70%;
    margin-left: 20px;
    li {
      a{
        text-decoration: none;
        color: black;
        transition: all .15s ease-in;
        &:hover {
          color: #EB5757;
        }

      }
    }

  }
;
}

</style>
