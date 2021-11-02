<template>
  <footer id="footer">
    <div class="contact_wrapper" :style="{ backgroundImage: `url(${contactBackground})`}">
      <div class="call_to_action">
        <div class="action_title">
          <h2>Contact us</h2>
        </div>
        <div class="action_call">
          <NuxtLink to="/contact">
            If you want to get in touch or want to know more, please contact us.
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="footer_info">
      <div class="page_footer">
        <ul>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/">Projects</NuxtLink></li>
          <li><NuxtLink to="contact">Contact</NuxtLink></li>

        </ul>
      </div>
      <div class="contact_footer">
        <div class="phone">
          <span>Mobile</span>
          <ul>
            <li><a href="">+32494430347</a></li>
            <li><a href="">+32499879896</a></li>
          </ul>
        </div>
        <div class="mail">
          <span>EMAIL</span>
          <a href="mailto:kevin@pixlstudio.com">kevin@pxlstudio.com</a>
        </div>
      </div>
      <div class="address_footer">
        <span>ADDRESS</span>
        <a href="">
          avenue émile de béco 83
          1050 IXELLES
        </a>
      </div>
    </div>
    <div class="legal">
      <div class="legal_wrapper">
        <div class="logo_container">
          <h2>PXLSTUDIO <span class="accent">.</span></h2>
        </div>
        <div class="legal_container">
          <p>
            © 2021 All Rights Reserved - pxl-studio.
          </p>
        </div>
      </div>

    </div>
  </footer>
</template>
<script>
import contactBackground from '~/assets/images/contactBlob.png';

export default {
  name: "Footer",
  data() {
    return {contactBackground}
  }
}

</script>
<style scoped lang="scss">

footer {
  width: 100vw;
  position: relative;
  z-index: 10;




  p {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 35px;
    text-transform: capitalize;
    color: rgba(255, 255, 255, 0.7);
  }

  .legal {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    flex-wrap: wrap;
    background-color: black;
    margin: auto;
    .legal_wrapper {
      display: flex;
      justify-content: space-between;
      width: 100%;
      max-width: 1300px;
      margin: auto;
    }
  }

  .logo_container {
    h2 {
      font-style: normal;
      font-weight: 600;
      font-size: 24.8137px;
      line-height: 130%;
      font-variant: small-caps;
      color: #FFFFFF;
    }
  }

  .legal_container {

  }

  .contact_wrapper {
    width: 100%;
    background-size: cover;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;

    .action_title {
      h2 {
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 98.5%;
        display: flex;
        align-items: center;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: #FFFFFF;
      }
    }

    .action_call {
      width: 100%;
      max-width: 443px;
    }

    a {
      font-style: normal;
      font-weight: 500;
      font-size: 36px;
      line-height: 102%;
      color: #FFFFFF;
    }

  }

  .footer_info {
    display: flex;
    justify-content: space-evenly;
    background-color: black;

    a {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 35px;
      text-transform: capitalize;
      color: rgba(255, 255, 255, 0.7);
    }

    span {
      color: #EB5783;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 98.5%;
      display: flex;
      align-items: center;
      letter-spacing: 0.04em;
      text-transform: uppercase;

    }

  }
}


</style>
