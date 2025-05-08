import React from 'react';
import '../styles/Footer.css';
import logoBig from '../assets/logo_big.png';
import wechatIcon from '../assets/wechat.svg';
import weiboIcon from '../assets/weibo.svg';

const Footer: React.FC = () => {
  return (
    <footer className="footer-root">
      <div className="footer-bg-grid">
        {/* 网格背景用CSS实现 */}
      </div>
      <div className="footer-main-new">
        <div className="footer-left">
          <div className="footer-contact-row">
            <span className="footer-contact-icon"></span>
            <span className="footer-contact-label">CONTACT US</span>
          </div>
          <div className="footer-title-new">加入创作者生态</div>
          <div className="footer-desc-new">若您和您的团队想发行推广数字藏品，请联系</div>
          <div className="footer-btns-row">
            <a className="footer-btn-green" href="mailto:ip@ibox.com">ip@ibox.com</a>
            <a className="footer-btn-green" href="mailto:ip2@ibox.com">ip2@ibox.com</a>
            <span className="footer-btn-white">媒体采访: pr@ibox.com</span>
          </div>
          <div className="footer-social-row">
            <img src={weiboIcon} alt="微博" />
            <img src={wechatIcon} alt="微信" />
          </div>
        </div>
        <div className="footer-right">
          <img src={logoBig} alt="logo" className="footer-logo-new" />
        </div>
      </div>
      <div className="footer-bottom-new">
        <span>VBOX用户协议</span>
        <span>浙ICP备xxxxxxxx号-1</span>
        <span>杭州链盒科技有限公司</span>
        <a href="#" className="footer-link-new">网站公约</a>
      </div>
    </footer>
  );
};

export default Footer; 