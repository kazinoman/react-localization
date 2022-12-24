import React from "react";
import { useTranslation, Trans } from "react-i18next";

const Home = () => {
  const { t } = useTranslation(["home"]);
  return (
    <div>
      <p>{t("home")}</p>
      <p>{t("details")}</p>
      {/* <Trans>home</Trans> */}
    </div>
  );
};

export default Home;
