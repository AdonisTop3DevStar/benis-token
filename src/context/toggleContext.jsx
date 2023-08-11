import { createContext, useState } from "react";
import PropTypes from "prop-types";


const ToggleContext = createContext();

const ToggleProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <ToggleContext.Provider value={{ toggle, handleToggle }}>
      {children}
    </ToggleContext.Provider>
  );
};

ToggleProvider.propTypes = {
  children: PropTypes.node,
};

export {ToggleContext, ToggleProvider}
