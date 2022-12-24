import logo from "./logo.svg";
import "./App.css";
import React, { Suspense } from "react";
import { useTranslation, Trans } from "react-i18next";
import Home from "./components/home";
import Profile from "./components/profile";

function App() {
  const { t, i18n } = useTranslation();
  const onChange = (e) => {
    console.log(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  return (
    <Suspense fallback={null}>
      <div className="App">
        <select onChange={onChange}>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="bn">Bangla</option>
        </select>

        {/* <h1>{t("welcome")}</h1> */}
        <h1>This app for test localization.</h1>
        <p>Home page </p>
        <Home />
        <p>Profile page</p>
        <Profile />
      </div>
    </Suspense>
  );
}

export default App;
