import React from "react";

//imported comp
import Login from "../Components/Forms/Login/Login";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

function LoginPage() {
  return (
    <div className="loginpage-container">
      <Header />
      <Login />
      <Footer />
    </div>
  );
}

export default LoginPage;
