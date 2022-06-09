import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { AiFillCaretUp } from "react-icons/ai";
import { DropContainer, InnerLi, MainLi } from "./styles";
import { BoxVariant, liVariant } from "./animations";
// import { Link } from "react-router-dom";

/////types
type obj = { li: string };
type Props = {
  heading: string;
  content: obj[];
  id?: number;
};

const NavBody = (props: Props) => {
  const [showContent, setShowContent] = useState(false);
  //for link
  // let heading = props.heading.replaceAll(" ", "-");

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
              // let url = `/${heading}/${item.li.replaceAll(" ", "-")}`;
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
