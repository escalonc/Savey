import React, { Component } from "react";

import { Layout, Menu, Icon } from "antd";
import { Link } from "@reach/router";
import "./index.css";
import SubMenu from "antd/lib/menu/SubMenu";

const { Header, Sider, Content } = Layout;

class Dashboard extends Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const { children } = this.props;
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Link to="members/add">
                <Icon type="user" />
                <span>Members</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="loans/add">
                <Icon type="video-camera" />
                <span>Laons</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="payments/add">
                <Icon type="upload" />
                <span>Payments</span>
              </Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="fund" />
                  <span>User</span>
                </span>
              }
            >
              <Menu.Item key="4">
                <Link to="reports/dividends">Dividendos</Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to="reports/members">Afiliados</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 280
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Dashboard;
