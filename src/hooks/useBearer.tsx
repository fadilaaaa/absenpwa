"use client";
import { useEffect, useState } from "react";

const useBearer = (bearerToken: string) => {
  const [token, setToken] = useState(() => {
    try {
      // Get from local storage by key
      if (typeof window !== "undefined") {
        // browser code
        const item = window.localStorage.getItem(bearerToken);
        // Parse stored json or if none return initialValue
        return item ? JSON.parse(item) : bearerToken;
      }
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return bearerToken;
    }
  });

  useEffect(() => {
    if (token) {
      window.localStorage.setItem("token", token);
    }
  }, [token]);
  return [token, setToken];
};
