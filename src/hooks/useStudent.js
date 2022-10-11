import { useEffect, useState } from "react";
import Axios from "../baseAxios";
import { loadSession } from "../utils";

const useStudent = (id) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    Axios.get(`students/${id}`, {
      headers: {
        Authorization: `Bearer ${loadSession("appToken")}`,
      },
    })
      .then((res) => {
        const formData = res?.response?.data || {};
        const { hasError } = formData;
        if (hasError) {
          setError(formData.errors);
          return;
        }
        setData(res.data.student);
      })
      .catch((err) => setError(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data,
    loading: !data && !error,
    error,
  };
};

export default useStudent;
