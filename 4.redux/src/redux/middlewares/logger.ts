import { Middleware } from "@reduxjs/toolkit";

const logger: Middleware = (state) => (next) => (action) => {
  console.log("current state", state.getState());
  console.log("action", action);
  next(action);
  console.log("updated state", state.getState());
};

export default logger;
