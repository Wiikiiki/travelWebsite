import React from "react";
import logo from "./logo.svg";
import styles from "./App.module.css";
import { Button, Dropdown, Input, Layout, Menu, Typography } from "antd";
import { GlobalOutlined } from "@ant-design/icons";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles["app-header"]}>
        <div className={styles["top-header"]}>
          <div className={styles.inner}>
            <Typography.Text>让旅游触手可及</Typography.Text>
            <Dropdown.Button
              style={{ marginLeft: 15 }}
              overlay={
                <Menu
                  items={[
                    { key: "1", label: "中文" },
                    { key: "2", label: "English" },
                  ]}
                />
              }
              icon={<GlobalOutlined />}
            >
              语言
            </Dropdown.Button>
            <Button.Group className={styles["button-group"]}>
              <Button>注册</Button>
              <Button>登录</Button>
            </Button.Group>
          </div>
        </div>
        <Layout.Header className={styles["main-header"]}>
          <img src={logo} alt="" className={styles["App-logo"]} />
          <Typography.Title level={3} className={styles["title"]}>
            React 旅游网
          </Typography.Title>
          <Input.Search
            placeholder={"请输入旅游目的地、主题或关键字"}
            className={styles["search-input"]}
          />
        </Layout.Header>
      </div>
    </div>
  );
}

export default App;
