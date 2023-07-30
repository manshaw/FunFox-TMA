import React, { useState } from "react";
import PropTypes from "prop-types";

export const UserContext = React.createContext({
  user: {},
  isSignedIn: false,
  setCurrentUser: () => {},
  signOut: () => {},
});

const UserContextProvider = (props) => {
  const [user, setUser] = useState({
    group: "",
    name: "",
    password: "",
    pictureUrl: "",
    userId: "",
  });
  const [isSignedIn, setSignedIn] = useState(false);

  const setCurrentUser = (user) => {
    setUser(user);
    setSignedIn(true);
  };

  const signOut = () => {
    setSignedIn(false);
    setCurrentUser({
      group: "",
      name: "",
      password: "",
      pictureUrl: "",
      userId: "",
    });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        isSignedIn,
        setCurrentUser,
        signOut,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

UserContextProvider.propTypes = {
  children: PropTypes.node,
};

export default UserContextProvider;
