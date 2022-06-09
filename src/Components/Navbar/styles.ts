import styled from 'styled-components'
import { motion } from "framer-motion"

export const Container = styled(motion.header)`
display:flex;
background:Black;
height:100vh;
width:100vw;
position:fixed;
overflow-y:auto;
background:black;
`
export const NavButtonContainer = styled.div`
    position: absolute;
    top:20px;
    right:20px;
    width:80px;
    height:80px;
    background:grey;
    // opacity:.1;
    display:grid;
    place-items:center;
`
export const NavButton = styled.div`
&:before {
  position:absolute;
  width: 30px!important;
  transform: translate(-50%,-50%) rotate(45deg);
  top: 50%;
  left: 50%;
  height: 0.2rem;
  // left: 0.75rem;
  transition: .3s;
  content:'';
  background:green;
  border-radius:50px;
};
&:after {
  width:40px;
  background:green;
  height: 0.2rem;
  content:'';
  position:absolute;
  width: 30px!important;
  transform: translate(-50%,-50%) rotate(-45deg);
  top: 50%;
  left: 50%;
  border-radius:50px;
}
width:50px;
height:50px;
background:white;
border-radius:50%;
margin:auto;
position:relative;
`