import React from "react";
import Header from "../header/header";
import AvtoInfo from "../avto-info/avto-info";
import Tabs from "../tabs/tabs";
import Footer from "../footer/footer";


const AvtoScreen = () => {
  return (
    <div className="page">
      <Header />

      <main>
        <AvtoInfo />

        <Tabs />
      </main>

      <Footer />
    </div>
  );
};

export default AvtoScreen;
