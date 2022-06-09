import styled from "styled-components";
import { motion } from "framer-motion";

/////mobile nav styles
export const MainLi = styled(motion.li)`
  font-size: 1.4rem;
  font-weight: 500;
  margin: 0.5rem 0;
  color: white;
  list-style: none;
  text-transform: capitalize;
  max-width: 80%;
  height: max-content;
  display: flex;
  flex-direction: column;
  transition: 0.5s;
  cursor: pointer;
  text-transform: capitalize;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    .icon {
      margin-left: 0.5rem;
      font-size: 1rem;
      transition: 0.6s;
    }
  }
  span {
    width: 0%;
    height: 2px !important;
    background: rgba(95, 116, 212);
    border-radius: 20px;
    transition: 0.4s;
  }
  &:hover,
  &:focus {
    color: rgba(95, 116, 212);
    span {
      width: 100%;
    }
  }
`;

export const Container = styled(motion.div)`
display: flex;
height: 100vh;
width: 100vw;
position: absolute;
overflow-y: auto;
background-image: linear-gradient(to top right, #1f1f1e, #0e0e0e);
color: white;
padding: 3rem;
padding-left: 1rem;
display: flex;
flex-direction: column;
align-items: flex-start;
background: black;
`;
/////styles
export const NavButtonContainer = styled.div`
position: absolute;
top: 20px;
right: 20px;
width: 50px;
height: 50px;
// background:grey;
// opacity:.1;
display: grid;
place-items: center;
z-index: 2;
`;

export const BtnStyles1 = {
  after: "transform: translate(-70%,30%) ; width:20px;",
  before: " transform: translate(-50%,-200%); width:30px;",
};
export const BtnStyles2 = {
  after: "transform: translate(-50%,-50%) rotate(-45deg);",
  before: " transform: translate(-50%,-50%) rotate(45deg);",
};

///////////////////////////navBody styles////////////////////////
 ////styles
 export const InnerLi = styled.li`
 list-style: none;
 font-size: 1rem;
 margin: 0.5rem 0;
 &:hover,
 &:focus {
   color: rgba(95, 116, 212);
 }
`;
export const DropContainer = styled(motion.div)`
 display: flex;
 flex-direction: column;
 width: 100%;
 // padding-left:1rem;
`;
