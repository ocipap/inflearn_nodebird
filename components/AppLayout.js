import React from 'react';
import { Menu, Input } from 'antd';

const AppLayout = ({ children }) => (
  <div>
    <Menu mode="horizontal">
      <Menu.Item key="home">노드버드</Menu.Item>
      <Menu.Item key="profile">프로필</Menu.Item>
      <Menu.Item key="input">
        <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
      </Menu.Item>
    </Menu>
    {children}
  </div>
);

export default AppLayout;
