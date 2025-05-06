import React, { useState } from 'react';
import { Layout, Menu, Button, Drawer, ConfigProvider } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { Link, Outlet, useLocation } from 'react-router-dom';
import zhCN from 'antd/lib/locale/zh_CN';
import '../styles/Layout.css';
import HeaderMenu from './Header';
import { siteConfig } from '../data';

const { Content, Footer } = Layout;

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
        
        <Footer className="footer">
          <div className="footer-content">
            <div className="footer-section">
              <h3>联系我们</h3>
              <p>加入创作者生态</p>
              <p>若您和您的团队想发行推广数字藏品，请联系</p>
              <p>{siteConfig.contact.email.business}</p>
              <p>媒体采访: {siteConfig.contact.email.media}</p>
            </div>
            
            <div className="footer-section">
              <h3>公司信息</h3>
              <p>{siteConfig.company.name}</p>
              <p>用户协议</p>
              <p>网站公约</p>
              <p>ICP备2023XXXXXX号-1</p>
            </div>
            
            <div className="footer-section">
              <h3>关注我们</h3>
              <div className="social-icons">
                <span className="social-icon">微信</span>
                <span className="social-icon">微博</span>
                <span className="social-icon">抖音</span>
              </div>
            </div>
          </div>
          
          <div className="copyright">
            &copy; {new Date().getFullYear()} {siteConfig.company.name}. 保留所有权利.
          </div>
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default MainLayout; 