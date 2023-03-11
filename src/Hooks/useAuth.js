import { useEffect, useState } from "react";

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [errors, setErrors] = useState([]);
  const [token, setToken] = useState("");

  const logout = () => {
    localStorage.clear();
    setIsAuthorized(false);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
      setIsAuthorized(true);
    }
  }, [setToken, setIsAuthorized]);

  return {
    isAuthorized,
    setIsAuthorized,
    loading,
    setLoading,
    errors,
    setErrors,
    token,
    setToken,
    logout,
  };
};

export default useAuth;
