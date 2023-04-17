
import React, { useEffect, useState } from "react";
import Service from "../service/Service";
import { useNavigate } from "react-router-dom";
// Create Context API
const AuthContext = React.createContext({
  userId: "",
  token: "",
  user:{},
  role:{},
  isAdmin: false,
  isMember: false,
  isRider: false,
  isPartner: false,
  isLoggedIn: false,
  redirectLogin: (role) => {},
  login: (token) => {},
  logout: () => {},
});

// Retrive Stored Token From Local Storage
const retriveStoredToken = () => {
  const storedToken = localStorage.getItem("token");

  return {
    token: storedToken,
  };
};

// Context Provider
export const AuthContextProvider = (props) => {
  const storedToken = retriveStoredToken();
  let initialToken;

  if (storedToken) {
    initialToken = storedToken.token;
  }

// USE STATE
const [token, setToken] = useState(initialToken);
const [userId, setUserId] = useState("");
const [role, setRole] = useState("");
const [isAdmin, setIsAdmin] = useState(false);
const [isMember, setIsMember] = useState(false);
const [isRider, setIsRider] = useState(false);
const [isPartner, setIsPartner] = useState(false);
const [user, setUser] = useState({});
const navigate = useNavigate();

// Check Token (!! = convert to Boolean)
const userIsLoggedIn = !!token;

// GET USER LOGIN DATA
useEffect(() => {
  if (token) {
    Service.getUser(token).then((res) => {
      setUserId(res.data._id);
      setRole(res.data.role);
      setUser(res.data);
    });
  }
  if (role && role !== "") {
    // MEMBER
    if (role === "MEMBER") {
      setIsMember(true);
    } else {
      setIsMember(false);
    }

    // RIDER
    if (role === "RIDER") {
      setIsRider(true);
    } else {
      setIsRider(false);
    }

    // PARTNER
    if (role === "PARTNER") {
      setIsPartner(true);
    } else {
      setIsPartner(false);
    }

    // ADMIN
    if (role === "ADMIN") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }
}, [token,role]);

  // LOGOUT
  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  // LOGIN
  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };
  const redirectHandler = (role) => {
    if (role === "ADMIN") {
      navigate("/admin");
    }
    if (role === "MEMBER") {
      navigate("/member");
    }
    if (role === "RIDER") {
      navigate("/rider");
    }
    if (role === "PARTNER") {
      navigate("/partnerhome");
    }
  };

  // Context Value
  const contextValue = {
    token: token,
    userId: userId,
    role: role,
    user: user,
    isAdmin: isAdmin,
    isMember: isMember,
    isRider: isRider,
    isPartner: isPartner,
    isLoggedIn: userIsLoggedIn,
    redirectLogin: redirectHandler,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
}; 

export default AuthContext;
