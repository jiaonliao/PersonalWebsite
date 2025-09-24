// 技术栈分类映射
export const techCategoryMap = {
  // 后端技术
  backend: ['Java', 'Spring', 'SpringBoot', 'SpringCloud', 'SpringCloudAlibaba', 'MyBatis', 'Mybatis-Plus', 'JPA', 'Redisson', 'Mp-plus'],
  // 前端技术
  frontend: ['Vue', 'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'ElementUI'],
  // 区块链技术
  blockchain: ['Solidity', 'Web3j', 'Web3J', 'Web3Js', 'Ethereum', 'Smart Contract', 'DeFi', 'Bifj', 'Openzeppelin', 'Remixd'],
  // 数据库技术
  database: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'],
  // AI技术
  ai: ['SpringAI', 'Spring AI', '向量嵌入', '语义识别', '大模型集成'],
  // 消息队列和其他
  middleware: ['RabbitMQ', 'RocketMQ', 'Feign', 'Liquibase', 'BootStarter', 'Xxl-job', 'Seata', 'Open-Feign']
};

// 获取技术栈分类
export const getTechCategory = (tech: string): string => {
  for (const [category, techs] of Object.entries(techCategoryMap)) {
    if (techs.some(t => tech.toLowerCase().includes(t.toLowerCase()) || t.toLowerCase().includes(tech.toLowerCase()))) {
      return category;
    }
  }
  return 'default';
};

// 项目类型主题色彩
export const projectThemes = {
  '双碳': { primary: 'from-emerald-500 to-teal-500', accent: 'emerald' },
  '区块链': { primary: 'from-blue-500 to-cyan-500', accent: 'blue' },
  '医疗': { primary: 'from-green-500 to-lime-500', accent: 'green' },
  '金融': { primary: 'from-yellow-500 to-orange-500', accent: 'yellow' },
  '企业中台': { primary: 'from-purple-500 to-indigo-500', accent: 'purple' },
  '默认': { primary: 'from-gray-500 to-slate-500', accent: 'gray' }
};

// 获取项目主题
export const getProjectTheme = (title: string, description: string) => {
  if (title.includes('双碳') || title.includes('碳') || description.includes('碳')) return projectThemes['双碳'];
  if (title.includes('区块链') || description.includes('区块链') || description.includes('web3') || description.includes('NFT')) return projectThemes['区块链'];
  if (title.includes('医') || description.includes('医') || description.includes('LIS')) return projectThemes['医疗'];
  if (title.includes('金融') || description.includes('交易') || description.includes('投资')) return projectThemes['金融'];
  if (title.includes('中台') || description.includes('中台')) return projectThemes['企业中台'];
  return projectThemes['默认'];
};

export const personalInfo = {
  name: "焦竞健",
  title: "Java开发工程师",
  email: "wren.jiaocl@gmail.com",
  phone: "15683133790",
  location: "重庆市",
  summary: "5年Java开发工作经验，横跨医药、双碳、区块链等业务应用场景，具备扎实的理论基础及深厚的技术功底，有较强的数理思维、逻辑分析、创新技术驱动力，曾独立负责过多个系统及服务的0-1复杂研发案例。"
};

export const skills = {
  backend: [
    "Java", "Spring", "Spring Boot", "Spring Cloud", "Spring Cloud Alibaba",
    "MyBatis", "MyBatis-Plus", "JPA", "Redis", "RabbitMQ", "RocketMQ"
  ],
  frontend: [
    "Vue", "React", "TypeScript", "JavaScript", "HTML5", "CSS3", "ElementUI"
  ],
  blockchain: [
    "Solidity", "Web3j", "Web3.js", "Ethereum", "Smart Contract", "DeFi", "Bifj"
  ],
  database: [
    "MySQL", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch"
  ],
  devops: [
    "Docker", "Git", "Jenkins", "Linux", "Nginx", "CI/CD"
  ],
  ai: [
    "Spring AI", "向量嵌入", "语义识别", "大模型集成"
  ]
};

export const projects = [
  {
    id: 1,
    title: "SMARTZ数智双碳平台",
    company: "智中和（重庆）低碳科技有限公司",
    period: "2024.07 - 至今",
    description: "一款集LCIA产品碳足迹盘查、组织碳盘查、零碳工厂能碳管理、CBAM、供应商溯源等多个子系统构成的双碳数字管理平台",
    responsibilities: [
      "零碳工厂能碳管理系统的主体架构设计以及项目研发",
      "持续迭代优化已有的各类子系统模块",
      "重构碳足迹计算模块，极大优化其响应速度",
      "重构碳排放因子模块，结合大模型技术提供智能因子选择服务",
      "搭建微服务中台，全面升级所有系统的依赖及将其接入统一的微服务集群管理"
    ],
    tech: ["SpringCloudAlibaba", "Mybatis-Plus", "SpringAI", "Redisson", "Feign"],
    link: "https://s0ing.com"
  },
  {
    id: 2,
    title: "Ubit & OakSmart & TL",
    company: "重庆亿链纵横科技有限公司",
    period: "2023.12 - 2024.07",
    description: "Ubit新兴的加密货币交易所、OakSmart区块链资产托管平台、TL交易员投资者连接平台",
    responsibilities: [
      "TL交易员模块设计以及编写，接入第三方交易所，实现场外交易数据监控以及资金控制",
      "Oak投资平台组模块编写、分红模块编写、用户/团队模块编写",
      "Ubit理财模块基础框架编写、质押/复投主流程编写、分红逻辑编写"
    ],
    tech: ["SpringCloudAlibaba", "Mybaits-Plus", "Liquibase", "Redisson", "RocketMQ"],
    link: "https://www.oaksmart.com/"
  },
  {
    id: 3,
    title: "BlockChain-Repeater",
    company: "重庆亿链纵横科技有限公司",
    period: "2023.06 - 2023.08",
    description: "为公司的后端项目提供统一的区块链接入能力，消弭接入区块链服务时的复杂性",
    responsibilities: [
      "项目整体设计以及编码工作",
      "数据库结构设计",
      "Solidity合约开发",
      "使用此中继服务完成星火数艺、创益溯源、亿碳通等后端模块的合约开发与链上交互"
    ],
    tech: ["Bifj", "Solidity", "Remixd", "Spring", "Redisson", "Mp-plus"],
    link: ""
  },
  {
    id: 4,
    title: "Deviews",
    company: "重庆超鲸数字科技有限公司",
    period: "2022.09 - 2023.02",
    description: "世界上第一个针对NFTs、代币、Dapp、DAO、游戏和所有事物的web3用户审查应用",
    responsibilities: [
      "线性锁仓、奖金池、Token等Solidity合约编写",
      "区块链上数据与链下服务端的主要交互逻辑",
      "评论、奖金算法等主要模块的后端开发"
    ],
    tech: ["Web3J", "Web3Js", "SpringCloud", "Mybatis", "Redisson", "Solidity", "Openzeppelin"],
    link: "https://deviews.gitbook.io/whitepaper"
  },
  {
    id: 5,
    title: "超鲸SuperWahle企业中台",
    company: "重庆超鲸数字科技有限公司",
    period: "2022.06 - 2022.08",
    description: "解决公司内部项目过多，数据沟通困难，重复模块需要重新开发等问题的微服务企业中台",
    responsibilities: [
      "划分整体服务粒度、技术选型等前期工作",
      "编写服务间通用依赖，如Web-Starter、MQ-Starter、Task-Starter等",
      "编写整体的开发文档与编码规范",
      "开发UC、Asset、Web3、Pay、GateWay等项目模块"
    ],
    tech: ["SpringCloud", "Mybatis", "Redission", "BootStarter", "Xxl-job", "Seata", "Open-Feign"],
    link: ""
  },
  {
    id: 6,
    title: "NextSign",
    company: "重庆超鲸数字科技有限公司",
    period: "2022.06 - 2022.09",
    description: "依托于省心签电子签约重新开发的针对海外加密用户和普通用户的Web3.0时代线上签约管家",
    responsibilities: [
      "改造省心签服务，使其支持海外环境生态与区块链兼容",
      "接入超鲸微服务中台，统一鉴权、访问上下文等基础逻辑",
      "编写存证合约以及存证交互的后端项目逻辑"
    ],
    tech: ["Web3J", "SpringCloud", "Mybatis", "Redisson", "Solidity"],
    link: "https://nextsign.cc/"
  },
  {
    id: 7,
    title: "医星LIS系统",
    company: "成都成电医星数字健康软件有限公司",
    period: "2021.07 - 2021.10",
    description: "基于原Delphi项目陈旧、难维护等问题，重构开发医院信息系统中核心的LIS模块",
    responsibilities: [
      "样本与检验管理模块设计以及编码",
      "检验报告智能审查模块，自研规则引擎",
      "通用查询模块设计以及编码"
    ],
    tech: ["SpringCloud", "Mybatis", "Redis", "RabbitMQ", "Vue", "ElementUI"],
    link: ""
  }
];

export const experience = [
  {
    company: "智中和（重庆）低碳科技有限公司",
    position: "Java开发工程师",
    department: "研发交付部",
    period: "2024.07 - 2025.08",
    responsibilities: [
      "负责公司能碳/双碳相关产品线开发，重构LCI碳排放计算模块，优化其计算速度由2min降低至毫秒级响应",
      "积极接入大模型相关技术，通过向量嵌入、语义识别等技术开发排放因子智能匹配模块",
      "设计并搭建公司的微服务企业中台，整合可复用的功能模块",
      "成功交付SGS、中车、国际复材、重庆环科院等多家大型企业的双碳数智平台"
    ]
  },
  {
    company: "重庆亿链纵横科技有限公司",
    position: "Sol合约&Java后端开发",
    department: "开发部",
    period: "2023.06 - 2023.11",
    responsibilities: [
      "负责公司'星火·链网'相关产品线业务模块开发",
      "基于Spring、Solidity、Mybaits-plus、Web3j等技术栈完成程序设计与落地",
      "参与技术知识资源体系建设，编制使用手册、接入说明等标准化文档",
      "制定'国家级基础设施星火·链网'RFC-016异构链钱包接入标准",
      "设计BlockChain-Repeater中继模块，统一化公司后端应用与区块链服务桥接"
    ]
  },
  {
    company: "重庆超鲸数字科技有限公司",
    position: "Java开发工程师",
    department: "开发部",
    period: "2021.10 - 2023.06",
    responsibilities: [
      "0-1搭建公司区块链业务4个产品服务端系统",
      "基于Spring Cloud、Web3j、Solidity、RabbitMQ等技术栈规划系统架构",
      "主导合约项目Solidity合约、老旧区块链交易订阅系统重构等需求的前后端研发交付",
      "针对EVM交易订阅模型等重难点问题技术攻关",
      "基于去中心化后端业务发展规划，搭建公司微服务中台，打通全链路数据"
    ]
  },
  {
    company: "成都成电医星数字健康软件有限公司",
    position: "Java开发工程师",
    department: "药事管理部",
    period: "2020.06 - 2021.10",
    responsibilities: [
      "负责公司药事（合理用药）类产品的技术选型、实现方案制定",
      "承担山东大学第二附属医院合理用药系统群、新版合理用药系统、院内LIS系统等需求开发",
      "提供自研规则引擎等关键技术支持，优化系统智能性和查询效率",
      "为医院客户提供有效的技术支持"
    ]
  }
];