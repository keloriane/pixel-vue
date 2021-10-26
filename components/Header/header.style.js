import styled from "vue-styled-components";

export const HeaderStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 0fr;
  width: 100%;
  max-width: 883px;
  margin: auto;
  height: 100vh;
  .header__title {
    font-style: normal;
    font-weight: 600;
    font-size: 49.4384px;
    line-height: 98.5%;
  }
`;

export const HeaderTitleContainer = styled.div`
  width: 100%;
  max-width: 600px;
  z-index: 1;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  h2 {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 600px;
    top: 20%;
    left: 0;
    mix-blend-mode: difference;
    font-family: Clash Grotesk, sans-serif;
    font-style: normal;
    font-weight: 600;
    line-height: 98.5%;
    color: #100b2b;
    text-transform: capitalize;

    &.accent {
      color: #EB5757;
    }

    .chars {
      margin: 5px;
      overflow: hidden;
    }
  }

`;

export const HeaderImageContainer = styled.div`
  position: relative;

  .scroll-Down {
    position: absolute;
    left: 0;
    bottom: 0;
  }

  h2 div:nth-child(1) {
    color: blue;
    width: 900%;
  }


`
