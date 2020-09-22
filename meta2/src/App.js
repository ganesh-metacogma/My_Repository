import React, { Fragment } from "react";

import { Layout, Menu, Input, Button } from "antd";
import option from "./option.json";
import Objective from "./Components/Objective";
import Assessment from "./Components/Assessment";
import "./App.css";

const { Header, Content, Sider } = Layout;

const { Search } = Input;

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Layout>
          <Header className="header px-2">
            <Menu theme="dark" mode="horizontal" style={{ float: "left" }}>
              <Menu.Item key="1">Home</Menu.Item>

              <span>Xajcsdbcidcbiudc ch</span>
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
              <Menu.Item key="4">Share</Menu.Item>
              <Menu.Item key="5">DEPT</Menu.Item>
              <Search
                className="ml-4"
                placeholder="input search text"
                onSearch={(value) => console.log(value)}
                style={{ width: 200 }}
              />
            </Menu>
          </Header>
          <Layout>
            <Sider width={200} className="site-layout-background">
              <Menu
                mode="inline"
                defaultSelectedKeys={["0"]}
                style={{ height: "100%", borderRight: 0 }}
              >
                {option.map((elem, index) => {
                  return <Menu.Item key={index}>{elem.name}</Menu.Item>;
                })}
              </Menu>
            </Sider>
            <Layout>
              <Objective />
            </Layout>
          </Layout>
        </Layout>
      </Fragment>
    );
  }
}

export default App;
