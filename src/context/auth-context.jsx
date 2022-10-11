import { createContext, useState, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { saveSession, purgeSession, loadSession } from "../utils";
import Axios from "../baseAxios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  const loginService = async (email, password) => {
    try {
      const resp = await Axios.post("signin", { email, password });
      const formData = resp?.response?.data || {};
      // check server errors
      const { hasError, errors } = formData;

      if (hasError) return errors;

      // save to local storage
      saveSession("appToken", resp.data.token);
    } catch (err) {
      console.log(err);
      return err.response.data?.errors;
    }
  };

  const logoutService = () => {
    purgeSession("appToken");
    navigate("/login");
  };

  const authentiCate = async () => {
    try {
      const resp = await Axios.post(
        "authenticate",
        { token: loadSession("appToken") },
        {
          headers: {
            Authorization: `Bearer ${loadSession("appToken")}`,
          },
        }
      );
      setUser(resp.data);
    } catch (err) {
      console.log(err);
    }
  };

  const verifyLogin = () => {
    if (loadSession("appToken")) return true;
    return false;
  };

  const value = useMemo(
    () => ({
      user,
      loginService,
      logoutService,
      authentiCate,
      verifyLogin,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
