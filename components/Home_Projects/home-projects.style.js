import styled from "vue-styled-components";


export const Home_Project_Card_Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;


`;

export const Project_Item_Card = styled.a`
  width: 100%;
  max-width: 337px;
  height: 400px;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  overflow: hidden;
    img {
      position: absolute;
      top:0;
      left: 0;
      width: 100%;
    }
`;

export const Project_Item_Layer = styled.div `
  width: 304px;
  height: 364px;
  background: rgba(40, 32, 56, 0.78);
  border-radius: 2px;
  position: relative;
  z-index: 1;
  pointer-events: none;
`;


export const Project_Item_Layer_Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  position: relative;
`;
export const Project_Item_Layer_Content_Discipline = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 98.5%;
  display: flex;
  align-items: center;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  color: #FFFFFF;
`;
export const Project_Item_Layer_Content_Title = styled.div`
  width: 199px;
  height: 91.14px;
  position: relative;
  h2 {
    position: absolute;
    font-weight: 600;
    font-size: 50px;
    line-height: 90%;
    letter-spacing: -0.05rem;
    color: white;
    left: -10%;
  }
`;
export const Project_Item_Layer_Content_Link = styled.div`
  align-self: flex-end;
  color: white;
  margin-right: 9px;
`;
export const Project_Item_Layer_Content_Index = styled.span`
  text-align: left;
  margin-left: 20px;
  p {
    color: white;
    font-size: 14px;
    line-height: 98%;
    letter-spacing: 0.2rem;

  }
`;
