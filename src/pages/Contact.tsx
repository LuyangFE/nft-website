import React from 'react';
import { Typography, Form, Input, Button, Row, Col, Card } from 'antd';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined, SendOutlined } from '@ant-design/icons';
import '../styles/Contact.css';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const Contact: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('接收到的表单数据:', values);
    // 这里可以添加提交表单的逻辑
    form.resetFields();
  };

  return (
    <div className="contact-container">
      <Title level={2}>联系我们</Title>
      <Paragraph>
        感谢您对我们的关注！如有任何问题或合作意向，请随时与我们联系。
      </Paragraph>

      <Row gutter={[24, 24]} className="contact-content">
        <Col xs={24} md={10}>
          <div className="contact-info">
            <Card>
              <Title level={3}>联系方式</Title>
              <ul className="contact-list">
                <li>
                  <PhoneOutlined /> <span>电话：</span>
                  <a href="tel:+86123456789">+86 123 456 789</a>
                </li>
                <li>
                  <MailOutlined /> <span>邮箱：</span>
                  <a href="mailto:info@company.com">info@company.com</a>
                </li>
                <li>
                  <EnvironmentOutlined /> <span>地址：</span>
                  <p>北京市朝阳区XX大厦100号</p>
                </li>
              </ul>
              
              <Title level={4}>营业时间</Title>
              <p>周一至周五: 9:00 - 18:00</p>
              <p>周六至周日: 休息</p>
            </Card>
          </div>
        </Col>

        <Col xs={24} md={14}>
          <Card className="contact-form">
            <Title level={3}>发送消息</Title>
            <Form 
              form={form}
              layout="vertical" 
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item
                name="name"
                label="姓名"
                rules={[{ required: true, message: '请输入您的姓名' }]}
              >
                <Input placeholder="请输入您的姓名" />
              </Form.Item>

              <Form.Item
                name="email"
                label="邮箱"
                rules={[
                  { required: true, message: '请输入您的邮箱' },
                  { type: 'email', message: '请输入有效的邮箱地址' }
                ]}
              >
                <Input placeholder="请输入您的邮箱" />
              </Form.Item>

              <Form.Item
                name="phone"
                label="电话"
              >
                <Input placeholder="请输入您的电话号码" />
              </Form.Item>

              <Form.Item
                name="message"
                label="留言"
                rules={[{ required: true, message: '请输入您的留言内容' }]}
              >
                <TextArea 
                  placeholder="请输入您想咨询的内容" 
                  rows={4} 
                />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" icon={<SendOutlined />}>
                  发送消息
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Contact; 