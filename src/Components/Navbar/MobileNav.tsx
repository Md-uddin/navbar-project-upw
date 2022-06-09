import React,{useState,useEffect} from 'react'
// import { Container, NavButton, NavButtonContainer } from './styles'
import styled from 'styled-components'
import {motion,AnimatePresence} from "framer-motion"
import {AiFillCaretDown, AiFillCaretUp} from 'react-icons/ai'
import NavBody from './NavBody'


export const MainLi = styled(motion.li)`
font-size:1.4rem;
font-weight:500;
margin:.5rem 0;
color:white;
list-style:none;
text-transform:capitalize;
max-width:80%;
height:max-content;
display:flex;
flex-direction: column;
transition:.5s;
cursor:pointer;
text-transform:capitalize;
div{ 
  display:flex;
  flex-direction: row;
  align-items: center;
  .icon{
    margin-left:.5rem;
    font-size:1rem;
  }
}
span{ 
  width:0%;
  height:2px !important;
  background:rgba(95,116,212);
  border-radius:20px;
  transition:.4s;
  }
&:hover,&:focus{
  color: rgba(95,116,212);
  span{width:100%}
}
`
const MobileNav = () => {
  let BtnStyles1 = {
    after: "transform: translate(-70%,30%) ; width:20px;",
    before: " transform: translate(-50%,-200%); width:30px;"
  }
  let BtnStyles2 = {
    after: "transform: translate(-50%,-50%) rotate(-45deg);", before: " transform: translate(-50%,-50%) rotate(45deg);"
  }
  const [menu, setmenu] = useState({
    show: false,
    BtnStyles:BtnStyles1
  });
  const [dropId, setDropId] = useState([-1]);
  const OpenNav = (link:number) => {
    if (dropId.includes(link)) {
      let newList = dropId.filter((nav) => nav !== link);
      setDropId(newList);
    } else {
      setDropId([...dropId, link]);
    }
  };
  const changeNav = (setDropId:React.Dispatch<React.SetStateAction<Boolean>>) => {
    setDropId(nav => !nav)
  }
  const NavButtonContainer = styled.div`
      position: absolute;
      top:20px;
      right:20px;
      width:50px;
      height:50px;
      // background:grey;
      // opacity:.1;
      display:grid;
      place-items:center;
      z-index:2;
      
  `
  const NavButton = styled.div`
  &:before {
    position:absolute;
    width: 30px;
    top: 50%;
    left: 50%;
    height: 0.2rem;
    // left: 0.75rem;
    transition: .3s;
    content:'';
    background:white;
    border-radius:50px;
    transition:5s;
    ${menu.BtnStyles.before}
  };
  &:after {
    width:40px;
    background:white;
    height: 0.2rem;
    content:'';
    position:absolute;
    width: 30px;
    top: 50%;
    left: 50%;
    border-radius:50px;
    transition:5s;
    ${menu.BtnStyles.after}
  }
  width:50px;
  height:50px;
  background:white;
  border-radius:50%;
  margin:auto;
  position:relative;
  transition:.8s;
  background-color: rgba(74,91,175);
  `
  const Container = styled(motion.div)`
  display:flex;
  height:100vh;
  width:100vw;
  position:absolute;
  overflow-y:auto;
  background-image: linear-gradient(to top right, #1F1F1E,#0E0E0E);
  color:white;
  padding:3rem ;
  padding-left:1rem;
  display:flex;
  flex-direction: column;
  align-items: flex-start;
  background:black;
  `

  const DropContainer = styled(motion.div)`
  display:flex;
  flex-direction:column;
  width:100%;
  padding-left:1rem;
  `

  const BackgroundVariant = {

    visible: {
      y: '0px',
      opacity: 1,
      transition: {
        duration: .4,
        type: "spring",
        damping: 18,
        striffness: 178
      }
    },
    hidden: {
      y: '-100vh',
      opacity: 0,
    },
    exit: {
      y: "100vh",
      // opacity: 0,
      transition: {
        duration: 8,
        type: "spring",
        damping: 25,
        striffness: 178,
        delay: .3,
      }
    }
  };
  const liVariant = {
    visible: {
      opacity: 1,
      height:30,
      transition: {
        duration: .4,
        type: "spring",
        damping: 18,
        striffness: 178
      }
    },
    hidden: {
      marginTop:30,
      opacity: 0,
      height:0,
    },
    exit: {
      opacity: 0,
      height:0,
      transition: {
        duration: .2,
      }
    }
  }
  console.log(menu);
  let showAnimation = true;
  useEffect(() => {
    showAnimation = false;
  
    return () => {
      showAnimation = true;
    }
  }, [])

  return (
    <>
    <NavButtonContainer>
        <NavButton onClick={() => {
          setmenu({
            show: !menu.show, BtnStyles:menu.show === true ? BtnStyles1 : BtnStyles2
          })
        }}>
          
      </NavButton>
    </NavButtonContainer>
    < AnimatePresence
    exitBeforeEnter={true}
    >
      {menu.show &&
        <Container
          variants={BackgroundVariant}
          initial="hidden"
          animate={showAnimation && "visible"}
          key={1}
            exit="exit"

          >
                <MainLi  variants={liVariant}
                initial="hidden"
                animate="visible"
                key={2}
                exit="exit">
                New
                  <span></span>
              </MainLi>
            <NavBody heading="GCN CASTELLI KIT " content={[
            { li:" GCN Castelli Pro Team"},
            { li:" GCN Castelli Pro Training"},
            { li:" GCN Castelli Core Kit"},
            { li:" GCN Castelli Winter Kit"},
            { li:"  Castelli Cycling Jerseys"},
            { li:" Castelli Cycling Bibshorts"},
            { li:" Castelli Cycling Bibtights"},
            { li:" Castelli Baselayers"},
            { li:"  Castelli Cycling Vests"},
             { li:" Castelli Gabba Jackets"},
             { li:" Castelli Cycling Accessories"},
             { li:" Women's GCN Castelli Kit"},
              { li:"10% Off Castelli Bundles"}
            ] }/>
            {/* {dropId.includes(1) &&
              <DropContainer
              >
                <li> GCN Castelli Pro Team</li>
                <li> GCN Castelli Pro Training</li>
                <li> GCN Castelli Core Kit</li>
                <li> GCN Castelli Winter Kit</li>
                <li> Castelli Cycling Jerseys</li>
                <li> Castelli Cycling Bibshorts</li>
                <li> Castelli Cycling Bibtights</li>
                <li> Castelli Baselayers</li>
                <li> Castelli Cycling Vests</li>
                <li> Castelli Gabba Jackets</li>
                <li> Castelli Cycling Accessories</li>
                <li>  Women's GCN Castelli Kit</li>
                <li> 10% Off Castelli Bundles</li>
              </DropContainer>} */}
            <NavBody heading="team KIT " content={[
        {li:" GCN Castelli Pro Team Kit"},
        {li:" GCN Castelli Pro Training"},
        {li:" GCN Castelli Core Kit"},
        {li:" GCN Castelli Winter Kit"},
        {li:" GCN Core Fan Kit"},
        {li:" Women's Cycling Kit"},
        {li:" Cycling Jerseys"},
        {li:" Bibshorts"},
        {li:" Bibtights"},
        {li:" Baselayers"},
        {li:" Cycling Jackets"},
        {li:" Cycling Vests"},
        {li:" Accessories"},
        {li:" 10% Off Kit Bundles"},

            ]}/>
            <NavBody heading="Casual clothing" content={[
                {li:"  Sweatshirts"},
                {li:" T-Shirts"},
                {li:"  Hoodies"},
                {li:"  Casual Bundles"},
               ]}/>
               <NavBody heading="accessories" content={[
               {li:"Socks"},
               {li:" Coffee"},
              {li:"  Cups & Mugs"},
               {li:" Water Bottles"},
              {li:"  On-Bike Accessories"},
              {li:"  Beanies & Caps"},
              {li:"  Towels"},
              {li:"  Helmets"},
              {li:"  Face Masks"},
               ]}/>
               
                <MainLi  variants={liVariant}
                initial="hidden"
                animate="visible"
                key={7}
                exit="exit">
                books
                  <span></span>
              </MainLi>
                <MainLi  variants={liVariant}
                initial="hidden"
                animate="visible"
                key={8}
                exit="exit">
                gcn club exclusives
                  <span></span>
              </MainLi>
                <MainLi  variants={liVariant}
                initial="hidden"
                animate="visible"
                key={9}
                exit="exit">
                outlet
                  <span></span>
              </MainLi>
        </Container>
      }
  </ AnimatePresence>
    </>
  )
}

export default MobileNav