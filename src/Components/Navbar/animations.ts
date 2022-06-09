////////animations
export const BackgroundVariant = {
  visible: {
    y: "0px",
    opacity: 1,
    transition: {
      duration: 0.4,
      type: "spring",
      damping: 18,
      striffness: 178,
    },
  },
  hidden: {
    y: "-100vh",
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
      delay: 0.3,
    },
  },
};
export const liVariant = {
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

/////////////////nav body variants

export const BoxVariant = {
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
