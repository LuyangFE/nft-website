// 网站全局配置
export const siteConfig = {
  // 公司信息
  company: {
    name: '杭州链盒科技有限公司',
    shortName: 'vBox',
    slogan: 'Make every collection count',
    description: '我们是国内领先的数字藏品生态平台，坚持以"用数字收藏美好生活"为使命，积极探索数字藏品与相关数字营销、IP孵化、创作者经济结合的新模式，为文创产业发展赋能。'
  },
  
  // 业务描述
  businessDescription: '依靠创新的业务模式，赋能数字藏品多元化应用场景。通过联动线下权益，进一步完善数字藏品的价值体系构建，为用户带来更优质的数字生活体验。',
  
  // 图片资源
  images: {
    logo: './assets/logo.jpg',
    logoBig: './assets/logo_big.png'
  },
  
  // 主题色
  colors: {
    primary: '#1b52f8',
    secondary: '#0fa',
    dark: '#1a1a1a',
    light: '#ffffff'
  },
  
  // 联系信息
  contact: {
    address: '浙江省杭州市西湖区',
    email: {
      business: 'ip@company.com',
      media: 'pr@company.com'
    },
    phone: '400-123-4567',
    social: {
      wechat: 'company_wechat',
      weibo: '@公司官方微博',
      douyin: '@公司抖音号'
    }
  },
  
  // 页面结构配置
  sections: [
    { id: 'hero-section', title: '首页', showInNav: true },
    { id: 'ours', title: '我们', showInNav: true },
    { id: 'what-we-do', title: '业务', showInNav: true },
    { id: 'works', title: '作品', showInNav: true },
    { id: 'news', title: '资讯', showInNav: true },
    { id: 'events', title: '大事记', showInNav: true },
    { id: 'technology', title: '技术', showInNav: true },
    { id: 'partners', title: '伙伴', showInNav: true }
  ]
}; 