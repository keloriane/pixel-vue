import styled from "vue-styled-components";

export const Project_Header_Container = styled.header`
  width: 100%;
  height: 100vh;
  display: flex;
  .info__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
  }
  .info_title {
    width: 100%;
    max-width: 345px;
    margin-bottom: 15px;
  }
  .o-container {
    width: 100%;
    max-width: 1280px;
    margin: auto;
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
    }

    h2{
      font-size: 80px;
    }
  }
  .subinfo {
    margin-bottom: 15px;
    h3 {
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 98.5%;
    }
    p {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 35px;
      text-transform: capitalize;

      color: rgba(0, 0, 0, 0.7);
    }
  }

  @media

`;
