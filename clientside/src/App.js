import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/Authentication/Register/Register";
import Login from "./pages/Authentication/Login/Login";


function App() {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    let user = localStorage.getItem("user");
    user && JSON.parse(user) ? setAuth(true) : setAuth(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("user", auth);
  }, [auth]);

  return (
    <Routes>
      {!auth && (
        <>
        <Route
          path="/login"
          element={<Login authenticate={() => setAuth(true)} />}
        />
        <Route
          path="/register"
          element={<Register authenticate={() => setAuth(true)}/>}
        />
        </>
      )}

      {auth && (
        <>
          <Route
            path="/"
            element={<Home logout={() => setAuth(false)} />}
          />
        </>
      )}
      <Route path="*" element={<Navigate to={auth ? "/" : "/login"} />} />
    </Routes>
  );
};

export default App;
