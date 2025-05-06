import React from 'react';
import { Typography, Card, Avatar, Row, Col, Timeline, Image } from 'antd';
import { ClockCircleOutlined, UserOutlined } from '@ant-design/icons';
import '../styles/About.css';

const { Title, Paragraph } = Typography;

const About: React.FC = () => {
  const teamMembers = [
    { name: '张三', position: '创始人 & CEO', bio: '拥有10年行业经验，曾任职于多家知名企业。' },
    { name: '李四', position: '技术总监', bio: '资深技术专家，专注于技术创新和产品研发。' },
    { name: '王五', position: '市场总监', bio: '营销专家，拥有丰富的市场推广和品牌建设经验。' },
  ];

  const companyHistory = [
    { year: '2020', event: '公司成立，开始提供基本服务。' },
    { year: '2021', event: '业务扩展，团队规模达到10人。' },
    { year: '2022', event: '推出创新产品，获得行业认可。' },
    { year: '2023', event: '完成A轮融资，业务进一步扩展。' },
    { year: '2024', event: '成为行业领先企业，客户遍布全国。' },
  ];

  return (
    <div className="about-container">
      <section className="company-intro">
        <Title level={2}>关于我们</Title>
        <Paragraph>
          我们是一家致力于为客户提供优质服务和创新解决方案的公司。自成立以来，
          我们一直秉持"客户至上，创新驱动"的理念，不断追求卓越。
        </Paragraph>
        <Paragraph>
          我们的使命是通过技术创新和优质服务，帮助客户实现业务增长和数字化转型。
          我们相信，只有真正理解客户需求，才能提供最适合的解决方案。
        </Paragraph>
      </section>

      <section className="company-history">
        <Title level={2}>发展历程</Title>
        <Timeline
          mode="left"
          items={companyHistory.map(item => ({
            label: item.year,
            children: item.event,
            dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
          }))}
        />
      </section>

      <section className="team-section">
        <Title level={2}>我们的团队</Title>
        <Row gutter={[24, 24]}>
          {teamMembers.map((member, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <Card className="team-card">
                <Avatar size={64} icon={<UserOutlined />} />
                <Title level={4}>{member.name}</Title>
                <Title level={5} type="secondary">{member.position}</Title>
                <Paragraph>{member.bio}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </div>
  );
};

export default About; 