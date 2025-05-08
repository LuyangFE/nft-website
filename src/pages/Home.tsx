import React from 'react';
import { Typography, Card, Row, Col } from 'antd';
import '../styles/Home.css';
import logoBig from '../assets/logo_big.png';
import logo from '../assets/logo.jpg';
// 导入所有数据
import {
  advantages,
  services,
  works,
  news,
  events,
  technologies,
  partners,
  techIcons,
  calendarIcon,
  arrowIcon,
  scrollHintIcon,
  siteConfig
} from '../data';

const { Title, Paragraph } = Typography;

const Home: React.FC = () => {
  return (
    <div className="home-container">
      {/* 首页 - 特殊处理 */}
      <section className="hero-section" id="hero-section">
        <div className="glow-1"></div>
        <div className="glow-2"></div>
        <div className="glow-3"></div>
        <div className="glow-4"></div>
          <div className='index-slogen'>
            {siteConfig.company.slogan}
          </div>
      </section>

      {/* 我们 - section 1 白色背景 */}
      <section className="section ours section-odd" id="ours">
        <div className="section-header">
          <div className="logo-small"><img className='logo-title' src={logo}></img></div>
          <Title level={2} className="section-title">WHO WE ARE</Title>
        </div>
        
        <div className="who-we-are-content">
          <Paragraph className="who-we-are-desc">
          我们是国内<span className="blue-text">领先的数字藏品生态平台</span>，坚持以"用数字收藏美好生活"为使命，<br/>
          积极探索<span className="highlight-text">数字藏品与相关数字营销、IP孵化、创作者经济</span>结合的新模式，为文创产业发展赋能。
          </Paragraph>
          
          <Row gutter={[32, 32]} className="advantages-grid">
            {advantages.map((advantage, index) => (
              <Col xs={24} sm={24} md={8} key={index}>
                <div className={`advantage-card ${advantage.className}`}>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  
                  <h2 className="advantage-title">{advantage.title}</h2>
                  {advantage.description.map((line, i) => (
                    <p key={i} className="advantage-desc">{line}</p>
                  ))}
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* 业务 - section 2 黑色背景 */}
      <section className="section what-we-do section-even" id="what-we-do">
        <div className="section-header">
          <div className="logo-small">{siteConfig.company.shortName}</div>
          <Title level={2} className="section-title">WHAT WE DO</Title>
        </div>
        <Paragraph className="section-desc">
          {siteConfig.businessDescription}
        </Paragraph>
        
        <Row gutter={[32, 32]} className="services-grid">
          {services.map((service, index) => (
            <Col xs={24} sm={12} md={12} lg={6} key={index}>
              <div className="service-card">
                <div className="service-icon">{service.icon}</div>
                <Title level={3}>{service.title}</Title>
                <Paragraph style={{color: '#fff'}}>{service.description}</Paragraph>
              </div>
            </Col>
          ))}
        </Row>
      </section>

      {/* 作品展示 - section 3 白色背景 */}
      <section className="section works section-odd" id="works">
        <div className="section-header">
          <div className="logo-small"><img className='logo-title-big' src={logoBig}></img></div>
          <Title level={2} className="section-title">WORKS</Title>
        </div>
        
        <Row gutter={[24, 24]} className="works-grid">
          {works.map((work, index) => (
            <Col xs={24} sm={12} md={12} lg={6} key={index}>
              <Card
                hoverable
                cover={<img alt={work.title} src={work.image} />}
                className="work-card"
              >
                <Card.Meta title={work.title} />
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* 新闻 - section 4 黑色背景 */}
      <section className="section news section-even" id="news">
        <div className="section-header">
          <div className="logo-small">{siteConfig.company.shortName}</div>
          <Title level={2} className="section-title">NEWS</Title>
        </div>
        
        <Row gutter={[24, 24]} className="news-grid">
          {news.map((item, index) => (
            <Col xs={24} sm={12} md={12} lg={6} key={index}>
              <div className="news-card">
                <div className="news-card-tag">{item.tag}</div>
                <div className="news-card-img">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="news-card-content">
                  <div className="news-card-date">
                    {calendarIcon}
                    {item.date}
                  </div>
                  <h3 className="news-card-title">{item.title}</h3>
                  <p className="news-card-desc">{item.description}</p>
                  <a href="#" className="news-card-link">
                    阅读更多
                    {arrowIcon}
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </section>

      {/* 大事记 - section 5 白色背景 */}
      <section className="section events section-odd" id="events">
        <div className="section-header">
          <div className="logo-small"><img className='logo-title-big' src={logoBig}></img></div>
          <Title level={2} className="section-title">EVENTS</Title>
        </div>
        
        <div className="timeline-container">
          <div className="timeline">
            {/* 时间轴项目 */}
            {events.map((event, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-date">
                  <div className="timeline-date-wrapper">
                    <span className="timeline-year">{event.year}</span>
                    <span className="timeline-month">{event.month}</span>
                  </div>
                  <div className="timeline-dot"></div>
                </div>
                <div className="timeline-content">
                  <div className="timeline-img">
                    <img style={{objectFit: 'cover'}} src={event.image} alt={`${event.year}年${event.month}事件`} />
                  </div>
                  <h3 className="timeline-title">{event.title}</h3>
                  <p className="timeline-desc">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="scroll-hint">
          {scrollHintIcon}
          左右滑动查看更多
        </div>
      </section>

      {/* 技术优势 - section 6 黑色背景 */}
      <section className="section technology section-even" id="technology">
        <div className="section-header">
          <div className="logo-small">{siteConfig.company.shortName}</div>
          <Title level={2} className="section-title">TECHNOLOGY</Title>
        </div>
        
        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <div className="tech-card" key={index}>
              <div className="tech-icon">
                {techIcons[index]}
              </div>
              <div className="tech-content">
                <Title level={3} style={{color: '#fff'}} className={index % 2 === 0 ? 'blue-text' : ''}>{tech.title}</Title>
                <Paragraph style={{color: '#fff'}}>{tech.description}</Paragraph>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 合作伙伴 - section 7 白色背景 */}
      <section className="section partners section-odd" id="partners">
        <div className="section-header">
          <div className="logo-small"><img className='logo-title-big' src={logoBig}></img></div>
          <Title level={2} className="section-title">PARTNERS</Title>
        </div>
        
        <div className="partners-grid">
          {/* 第一组合作伙伴 */}
          {partners.map((partner, index) => (
            <div key={`first-${index}`} className="partner-logo">
              <img src={partner.logo} alt={partner.name} />
              <div className="partner-name">{partner.name}</div>
            </div>
          ))}
          {/* 复制一组合作伙伴，确保无缝衔接 */}
          {partners.map((partner, index) => (
            <div key={`second-${index}`} className="partner-logo">
              <img src={partner.logo} alt={partner.name} />
              <div className="partner-name">{partner.name}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home; 