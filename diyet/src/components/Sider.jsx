import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

const AppSider = () => {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { key: '1', icon: <UserOutlined />, label: <Link to="/testler">Testler</Link> },
    { key: '2', icon: <VideoCameraOutlined />, label: <Link to="/sonuclar">Sonuçlarım</Link> },
    { key: '3', icon: <UserOutlined />, label: <Link to="/login">Giriş Yap</Link> },
  ];

  const logoutItem = [
    { key: '4', icon: <UserOutlined />, label: <Link to="/logout">Çıkış Yap</Link> },
  ];

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <div className="demo-logo-vertical" />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={menuItems} />
      <Menu theme="dark" mode="inline" items={logoutItem} style={{ marginTop: 'auto' }} />
    </Sider>
  );
};

export default AppSider;
