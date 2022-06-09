import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { AiFillCaretUp } from "react-icons/ai";
import { MainLi } from "./MobileNav";
import { Link } from "react-router-dom";

/////types
type obj = { li: string };
type Props = {
  heading: string;
  content: obj[];
  id?: number;
};

const NavBody = (props: Props) => {
  const [showContent, setShowContent] = useState(false);
  let heading = props.heading.replaceAll(" ", "-");

  ////styles
  const InnerLi = styled.li`
    list-style: none;
    font-size: 1rem;
    margin: 0.5rem 0;
    &:hover,
    &:focus {
      color: rgba(95, 116, 212);
    }
  `;
  const DropContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    width: 100%;
    // padding-left:1rem;
  `;

  ///Animations
  const liVariant = {
    visible: {
      opacity: 1,
      height: 30,
      transition: {
        duration: 0.4,
        type: "spring",
        damping: 18,
        striffness: 178,
      },
    },
    hidden: {
      marginTop: 30,
      opacity: 0,
      height: 0,
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
      },
    },
  };
  const BoxVariant = {
    visible: {
      opacity: 1,
      y: "0px",
      transition: {
        duration: 0.4,
        type: "spring",
        damping: 18,
        striffness: 178,
      },
    },
    hidden: {
      opacity: 0,
      y: "-20px",
    },
    exit: {
      opacity: 0.2,
      height: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <>
      <MainLi
        variants={liVariant}
        initial="hidden"
        animate="visible"
        key={3}
        exit="exit"
      >
        <div
          onClick={() => {
            setShowContent((show) => !show);
          }}
        >
          {props.heading}
          <AiFillCaretUp
            className="icon"
            style={
              showContent
                ? { transform: "rotate(0deg)" }
                : { transform: "rotate(180deg)" }
            }
          />
        </div>
        <span></span>
      </MainLi>
      <AnimatePresence exitBeforeEnter={true}>
        {showContent && (
          <DropContainer
            variants={BoxVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {props.content.map((item, i) => {
              let url = `/${heading}/${item.li.replaceAll(" ", "-")}`;
              return (
                //for routing
                //  <Link to={url}>

                <InnerLi key={i}>{item.li}</InnerLi>
                //  </Link>
              );
            })}
          </DropContainer>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBody;
