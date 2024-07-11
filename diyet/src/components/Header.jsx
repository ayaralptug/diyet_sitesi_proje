import React from 'react';
import { Menu, Layout } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../assets/site_logo.png';
const { Header } = Layout;

const AppHeader = () => (
  <Header style={{ display: 'flex', alignItems: 'center' }}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={logo} alt="Logo" style={{ height: '32px', marginRight: '103px' }} />
    </div>
    <Menu
      theme="dark"
      mode="horizontal"
      style={{ flex: 1, minWidth: 3 }}
    >
      <Menu.Item key="1">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/login">Giriş Yap</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/Register">Kaydol</Link>
      </Menu.Item>
      {/* Diğer menü öğelerini buraya ekleyin */}
    </Menu>
  </Header>
);

export default AppHeader;
