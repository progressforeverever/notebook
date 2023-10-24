
/**
 * 基础
 */
fontEndItems = [
  {text:'html',link:'/fontEnd/html/'},
  {text:'javascript',link:'/fontEnd/javascript/'},
  {text:'Vue',link:'/fontEnd/Vue/'}
]

javaItems = [
  {text:'javaSE',link:'/java/javaSE/'},
  {text:'maven',link:'/java/maven/'},
  {text:'git',link:'/java/git/'},
  {text:'SpringBoot',link:'/java/springboot/'},
  {text:'Spring',link:'/java/Spring/'},
  {text:'SpringCloud',link:'/java/SpringCloud/'},
  {text:'SpringSecurity',link:'/java/SpringSecurity/'},
  {text:'DesignPattern',link:'/java/DesignPattern/'},
  {text:'开发与阅读',link:'/java/DevelopAndReading/'}
]

pythonItems = [
  {text:'pythonFundamentals',link:'/python/pythonFundamentals/'},
  {text:'fastAPI',link:'/python/fastAPI/'},
  {text:'Flask',link:'/python/Flask/'},
  {text:'爬虫',link:'/python/spider/'}
]


databaseItems = [
  {text:'MySQL',link:'/database/MySQL/'},
  {text:'MongoDB',link:'/database/MongoDB/'},
  {text:'Redis',link:'/database/Redis/'},
  {text:'Elatisearch',link:'/database/Elatisearch/'},
]


opsItems = [
  { text: 'Linux', link: '/ops/linux/' },
  { text: 'docker', link: '/ops/docker/' },
]


foundationItems = [
  { text: 'Leetcode', link: '/foundation/Leetcode/' },
  { text: '操作系统', link: '/foundation/os/' },
  { text: '计算机网络', link: '/foundation/network/' },
]

// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '前端',
    items: fontEndItems
  }, 
  {
    text: 'java',
    items: javaItems
  },
  {
    text: 'python',
    items: pythonItems
  },
  {
    text: '运维',
    items: opsItems
  },
  {
    text: '数据库与中间件',
    items: databaseItems,
  },
  {
    text: '计算机基础',
    items: foundationItems,
  },
]


