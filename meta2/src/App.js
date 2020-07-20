import React, { Fragment } from "react";

import { Layout, Menu, Breadcrumb } from "antd";
import "./App.css";

const { Header, Content, Sider } = Layout;

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Layout>
          <Header className="header">
            <Menu theme="dark" mode="horizontal" style={{ float: "left" }}>
              <Menu.Item key="1">Home</Menu.Item>
            </Menu>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              style={{ float: "right" }}
            >
              <Menu.Item key="1">Data Mode</Menu.Item>
              <Menu.Item key="2">Test Mode</Menu.Item>
              <Menu.Item key="3">View Mode</Menu.Item>
              <Menu.Item key="3">Share</Menu.Item>
              <Menu.Item key="3">DEPT</Menu.Item>
            </Menu>
          </Header>
          <Layout>
            <Sider width={200} className="site-layout-background">
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                style={{ height: "100%", borderRight: 0 }}
              >
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              {" "}
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                Content
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </Fragment>
    );
  }
}

export default App;
