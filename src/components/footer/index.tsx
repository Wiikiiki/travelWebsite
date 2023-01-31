import React from "react";
import { Layout, Typography } from "antd";
import styles from "./Footer.module.css";
import { useTranslation } from "react-i18next";

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  console.log("8, translation", t);

  return (
    <Layout.Footer className={styles["footer"]}>
      <Typography.Title level={3} style={{ marginTop: "0.5em" }}>
        {t("footer.detail")}
      </Typography.Title>
    </Layout.Footer>
  );
};
