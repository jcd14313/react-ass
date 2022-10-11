import { createContext, useContext } from "react";
import Axios from "../baseAxios";
import { loadSession } from "../utils";

const MainContext = createContext({});

export const MainProvider = ({ children }) => {
  const fetchAllStudents = async () => {
    try {
      const resp = await Axios.get("students", {
        headers: {
          Authorization: `Bearer ${loadSession("appToken")}`,
        },
      });
      const formData = resp?.response?.data || {};
      const { hasError } = formData;
      if (hasError) return formData;
      return resp.data;
    } catch (err) {
      console.log(err);
    }
  };

  const getStudentById = async (id) => {
    try {
      const resp = await Axios.get(`students/${id}`, {
        headers: {
          Authorization: `Bearer ${loadSession("appToken")}`,
        },
      });
      const formData = resp?.response?.data || {};
      const { hasError } = formData;
      if (hasError) return formData;
      return resp.data;
    } catch (err) {
      console.log(err);
    }
  };

  const createStudentService = async (data) => {
    try {
      const resp = await Axios.post("students", data, {
        headers: {
          Authorization: `Bearer ${loadSession("appToken")}`,
        },
      });
      const formData = resp?.response?.data || {};
      const { hasError } = formData;
      if (hasError) return formData;
      return resp.data;
    } catch (err) {
      console.log(err);
    }
  };

  const updateStudentService = async (data, id) => {
    try {
      const resp = await Axios.put(`students/${id}`, data, {
        headers: {
          Authorization: `Bearer ${loadSession("appToken")}`,
        },
      });
      const formData = resp?.response?.data || {};
      const { hasError } = formData;
      if (hasError) return formData;
      return resp.data;
    } catch (err) {
      console.log(err);
    }
  };

  const deleteStudentService = async (id) => {
    try {
      const resp = await Axios.delete(`students/${id}`, {
        headers: {
          Authorization: `Bearer ${loadSession("appToken")}`,
        },
      });
      const formData = resp?.response?.data || {};
      const { hasError } = formData;
      if (hasError) return formData;
      return resp.data.success;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <MainContext.Provider
      value={{
        fetchAllStudents,
        getStudentById,
        createStudentService,
        updateStudentService,
        deleteStudentService,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export const useMain = () => {
  return useContext(MainContext);
};
