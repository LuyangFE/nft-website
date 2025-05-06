import { MenuOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../assets/logo_big.png';
import { siteConfig } from '../data';

const HeaderMenu: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('hero-section');
    const location = useLocation();

    // 监听滚动事件并确定当前活动section
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            // 确定当前活动section
            const sections = document.querySelectorAll('section[id]');
            let current = '';

            sections.forEach((section) => {
                const sectionTop = (section as HTMLElement).offsetTop;
                const sectionHeight = (section as HTMLElement).offsetHeight;
                
                if (offset >= sectionTop - 150 && offset < sectionTop + sectionHeight - 150) {
                    current = section.getAttribute('id') || '';
                }
            });

            if (current && current !== activeSection) {
                setActiveSection(current);
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        // 初始加载时也执行一次，确保正确设置初始activeSection
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [activeSection]);

    // 菜单项，使用siteConfig中的配置
    const menuItems = siteConfig.sections.filter(section => section.showInNav);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    // 处理锚点点击，滚动到对应section
    const handleScrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            // 设置当前活动section
            setActiveSection(id);
            
            // 使用平滑滚动到目标位置
            window.scrollTo({
                top: element.offsetTop - 80, // 考虑导航栏高度
                behavior: 'smooth'
            });
            
            // 关闭移动端菜单（如果打开）
            if (mobileMenuOpen) {
                setMobileMenuOpen(false);
            }
        }
    };

    return (
        <div className={`header-container ${scrolled ? 'header-scrolled' : ''}`}>
            <div className="logo">
                <img src={logo} alt={siteConfig.company.name} className="logo-image" />
                <span className="company-name">{siteConfig.company.name}</span>
            </div>

            <div className="desktop-menu">
                <div className="desktop-menu-items">
                    {
                        menuItems.map(item => (
                            <div key={item.id}>
                                <a 
                                    href={`#${item.id}`} 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleScrollToSection(item.id);
                                    }}
                                    className={activeSection === item.id ? 'active-nav-link' : ''}
                                >
                                    {item.title}
                                </a>
                            </div>
                        ))
                    }
                </div>
                <div className="header-actions">
                    <Button className="download-button">
                        <span>下载App</span>
                    </Button>

                    <Button
                        className="mobile-menu-button"
                        type="text"
                        icon={<MenuOutlined />}
                        onClick={toggleMobileMenu}
                    />
                </div>
            </div>
        </div>
    )
};

export default HeaderMenu; 