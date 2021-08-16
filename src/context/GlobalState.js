import React, { createContext } from "react";
import axios from "axios";

const getCurrentStateFromDB = async () => {
  try {
    const res = await axios.get("https://kpcb9.sse.codesandbox.io/");
    return res.data;
  } catch (e) {
    return "Error";
  }
};

const initialState = {
  data: getCurrentStateFromDB()
};

export const GlobalContext = createContext(initialState);
