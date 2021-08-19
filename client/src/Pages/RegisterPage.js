import React from "react";

//imported components
import Register from "../Components/Forms/Register/Register";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

function RegisterPage() {
  return (
    <div className="registerpage-container">
      <Header />
      <Register />
      <Footer />
    </div>
  );
}

export default RegisterPage;
