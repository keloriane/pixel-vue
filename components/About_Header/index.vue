<template>

<div class="About_Header_Container">
  <div class="About_Header_Image">
    <img src="~/assets/images/about-header.png" />
  </div>
  <div class="About_Header_Text">
    <h2>About</h2>
    <h3>Who we are
      & how we do it </h3>
    <div class="text_about">
      <p>
        We don’t want to BS you with some technology name dropping. So i’ll just give you the tech icon. The guy on the
        left is kevin and the guy on the right is kevin. Confusing right ? Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud
      </p>

    </div>
  </div>


</div>
</template>

<script>

import {
  About_Header_Text,
  About_Header_Image,
  About_Header_Container,
} from './about-header.style';




export default {
  name: "About_Header",
  components: {
    About_Header_Container,
    About_Header_Text,
    About_Header_Image
  }
}
</script>

<style scoped lang="scss">
@media (max-width: 750px) {

  div.About_Header_Text {
    width: 330px;

  h2 {

  }
  h3 {
    font-size: 40px;


  }
  div.text_about {
    width: 325px;
    margin: auto;

  }
  }
  p {
    font-size: 14px;
  }
}


.About_Header_Container {
  width: 100%;
  max-width: 1300px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap-reverse;

}


.About_Header_Image {
  img {
    width: 100%;
  }
}
.About_Header_Text {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 445px;
  flex-wrap: wrap;

  h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 80.0097px;
    line-height: 87%;
    letter-spacing: -0.01em;
    color: #000000;
    margin-top: 8px;
  }

  .text_about {
    width: 100%;
    max-width: 385px;
    margin-top: 24px;



    p {
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 140%;
      /* or 25px */

      letter-spacing: 0.01em;

      color: rgba(0, 0, 0, 0.6);
    }

  }

  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 98.5%;
    display: flex;
    align-items: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #EB5757;
  }

}





</style>
