<template>
  <HeaderStyle>
    <HeaderTitleContainer>
      <h2 class="header__title text-letter">Creating quality experiences for clients looking for the best solution.</h2>
    </HeaderTitleContainer>
      <HeaderImageContainer class="image__header__container">
        <img :src="imageHeader" alt="">
    <img :src="svgArrow" class="scroll-Down" alt="">
      </HeaderImageContainer>
  </HeaderStyle>
</template>
<script>
import {HeaderStyle} from './header.style.js';
import {HeaderTitleContainer} from "./header.style.js";
import {HeaderImageContainer} from "./header.style.js";
import gsap from 'gsap';

export default {

  name: 'Header',


  data() {
    return {
      imageHeader: "./assets/images/BlobComputer.png",
      svgArrow: "./assets/images/scroll-down.svg",
    }
  },




  components: {
    HeaderStyle,
    HeaderTitleContainer,
    HeaderImageContainer
  },



  mounted() {

    let titleArray = [];
    function splitText(text) {
      const wordSplitted = text.split(' ');
      return [...wordSplitted]
        .map(word => `<div class="chars"><div class="words-inside">${word}</div></div>`)
        .join("");
    }
    const words = [...document.querySelectorAll(".text-letter")];
    words.map(word => {
      word.innerHTML = splitText(word.textContent);
      const newLetter = [...word.querySelectorAll(".chars")];
      newLetter.map(letter => {
        titleArray.push(letter);
      });
    });
    let wordsSplitted = document.querySelectorAll('.words-inside');
    const headerTimeline = gsap.timeline();
    headerTimeline
      .from(wordsSplitted , {duration:.6 , y:200 ,stagger:0.02 , opacity:0 , delay:-.6})
  }
}
</script>
<style>
.chars:nth-last-child(-n+3) {
  color: #EB5757;
}
</style>
