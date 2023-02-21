import React from 'react';



// export const url = "http://localhost:5000/api";
// export const url = "http://localhost:3000/api";
export const url = "http://localhost:8080/api";
// export const url = "http://localhost:4242/api";

export const setHeaders = () => {
  const headers = {
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  };

  return headers;
};
