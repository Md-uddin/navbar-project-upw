import  { useState } from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import NavBody from "./NavBody";
import {
  BtnStyles1,
  BtnStyles2,
  Container,
  MainLi,
  Navbar,
  NavButtonContainer,
} from "./styles";
import { BackgroundVariant, liVariant } from "./animations";

const MobileNav = () => {
  const [menu, setmenu] = useState({
    show: false,
    BtnStyles: BtnStyles1,
  });

  const NavButton = styled.div`
    &:before {
      position: absolute;
      width: 30px;
      top: 50%;
      left: 50%;
      height: 0.2rem;
      // left: 0.75rem;
      transition: 0.3s;
      content: "";
      background: black;
      border-radius: 50px;
      transition: 5s;
      ${menu.BtnStyles.before}
    }
    &:after {
      width: 40px;
      background: black;
      height: 0.2rem;
      content: "";
      position: absolute;
      width: 30px;
      top: 50%;
      left: 50%;
      border-radius: 50px;
      transition: 5s;
      ${menu.BtnStyles.after}
    }
    width: 50px;
    height: 50px;
    background: black;
    border-radius: 50%;
    margin: auto;
    position: relative;
    transition: 0.8s;
    // background-color: rgba(74, 91, 175);
    background:white;
  `;

  return (
    <>
      <Navbar>
        <img src="/images/GCNLogo.svg" alt="logo"/>
      <NavButtonContainer>
        <NavButton
          onClick={() => {
            setmenu({
              show: !menu.show,
              BtnStyles: menu.show === true ? BtnStyles1 : BtnStyles2,
            });
          }}
        ></NavButton>
      </NavButtonContainer>
      </Navbar>
      <AnimatePresence exitBeforeEnter={true}>
        {menu.show && (
          <Container
            variants={BackgroundVariant}
            initial="hidden"
            animate={"visible"}
            key={1}
            exit="exit"
          >
            {/* <Link to="/new"> */}

            <MainLi
              variants={liVariant}
              initial="hidden"
              animate="visible"
              key={2}
              exit="exit"
            >
              New
              <span></span>
            </MainLi>
            {/* </Link> */}
            <NavBody
              id={21}
              heading="GCN CASTELLI KIT"
              content={[
                { li: "GCN Castelli Pro Team" },
                { li: "GCN Castelli Pro Training" },
                { li: "GCN Castelli Core Kit" },
                { li: "GCN Castelli Winter Kit" },
                { li: "Castelli Cycling Jerseys" },
                { li: "Castelli Cycling Bibshorts" },
                { li: "Castelli Cycling Bibtights" },
                { li: "Castelli Baselayers" },
                { li: "Castelli Cycling Vests" },
                { li: "Castelli Gabba Jackets" },
                { li: "Castelli Cycling Accessories" },
                { li: "Women's GCN Castelli Kit" },
                { li: "10% Off Castelli Bundles" },
              ]}
            />

            <NavBody
              heading="team KIT"
              content={[
                { li: "GCN Castelli Pro Team Kit" },
                { li: "GCN Castelli Pro Training" },
                { li: "GCN Castelli Core Kit" },
                { li: "GCN Castelli Winter Kit" },
                { li: "GCN Core Fan Kit" },
                { li: "Women's Cycling Kit" },
                { li: "Cycling Jerseys" },
                { li: "Bibshorts" },
                { li: "Bibtights" },
                { li: "Baselayers" },
                { li: "Cycling Jackets" },
                { li: "Cycling Vests" },
                { li: "Accessories" },
                { li: "10% Off Kit Bundles" },
              ]}
            />
            <NavBody
              heading="Casual clothing"
              content={[
                { li: "Sweatshirts" },
                { li: "T-Shirts" },
                { li: "Hoodies" },
                { li: "Casual Bundles" },
              ]}
            />
            <NavBody
              heading="accessories"
              content={[
                { li: "Socks" },
                { li: "Coffee" },
                { li: "Cups & Mugs" },
                { li: "Water Bottles" },
                { li: "On-Bike Accessories" },
                { li: "Beanies & Caps" },
                { li: "Towels" },
                { li: "Helmets" },
                { li: "Face Masks" },
              ]}
            />
            {/* <Link to="/books"> */}
            <MainLi
              variants={liVariant}
              initial="hidden"
              animate="visible"
              key={7}
              exit="exit"
            >
              books
              <span></span>
            </MainLi>
            {/* </Link> */}
            {/* <Link to="/gcn-club-exclusives"> */}
            <MainLi
              variants={liVariant}
              initial="hidden"
              animate="visible"
              key={8}
              exit="exit"
            >
              gcn club exclusives
              <span></span>
            </MainLi>
            {/* // </Link> */}
            {/* <Link to="/outlet"> */}
            <MainLi
              variants={liVariant}
              initial="hidden"
              animate="visible"
              key={9}
              exit="exit"
            >
              outlet
              <span></span>
            </MainLi>
            {/* // </Link> */}
          </Container>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;
