import React from 'react';
import { Layout, theme } from 'antd';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Logout from '../pages/Logout';


const { Content } = Layout;

const AppContent = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Content style={{ padding: '0 24px', minHeight: 280 }}>
      <div
        style={{
          background: colorBgContainer,
          minHeight: 360,
          padding: 24,
          borderRadius: borderRadiusLG,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logout" element={<Logout />} />
          


          
        </Routes>
      </div>
    </Content>
  );
};

export default AppContent;
