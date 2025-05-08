import React, { useState } from 'react';
import { Layout, Menu, Button, Drawer, ConfigProvider } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { Link, Outlet, useLocation } from 'react-router-dom';
import zhCN from 'antd/lib/locale/zh_CN';
import '../styles/Layout.css';
import HeaderMenu from './Header';
import Footer from '../components/Footer';

const { Content } = Layout;

const MainLayout: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const menuItems = [
    { key: '/', label: '首页', link: '/' },
    { key: '/business', label: '我们', link: '/business' },
    { key: '/cases', label: '业务', link: '/cases' },
    { key: '/news', label: '案例', link: '/news' },
    { key: '/events', label: '资讯', link: '/events' },
    { key: '/technology', label: '大事记', link: '/technology' },
    { key: '/partners', label: '技术', link: '/partners' },
    { key: '/contact', label: '伙伴', link: '/contact' },
  ];
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <ConfigProvider locale={zhCN}>
      <Layout className="main-layout">
        <HeaderMenu />
        
        <Drawer
          title="菜单"
          placement="right"
          onClose={toggleMobileMenu}
          open={mobileMenuOpen}
          width={250}
        >
          <Menu 
            mode="vertical"
            selectedKeys={[location.pathname]}
            items={menuItems.map(item => ({
              key: item.key,
              label: <Link to={item.link} onClick={toggleMobileMenu}>{item.label}</Link>
            }))}
          />
          <div className="drawer-actions">
            <Button type="primary" block>
              <DownloadOutlined /> 下载App
            </Button>
          </div>
        </Drawer>
        
        <Content className="content">
          <Outlet />
        </Content>
        
        <Footer />
      </Layout>
    </ConfigProvider>
  );
};

export default MainLayout; 