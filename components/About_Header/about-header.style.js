import styled from "vue-styled-components";

export const About_Header_Container = styled.header`
  width: 100%;
  max-width: 1300px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap-reverse;




`;


export const About_Header_Text = styled.div`
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
`;


export const About_Header_Image = styled.div`

  img {
    width: 100%;
  }
`;


export function ResponsiveHeader() {
  return css`

  `
}
