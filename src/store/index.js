import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
/*
 *@config:存储resume的所有索引字段
*/
export default new Vuex.Store({
  state: {
 
    selected: 'profile',
    resume: {
      config: [{
          field: 'profile',
          icon: 'id'
        },
        {
          field: 'workHistory',
          icon: 'work'
        },
        {
          field: 'education',
          icon: 'book'
        },
        {
          field: 'projects',
          icon: 'heart'
        },
        {
          field: 'awards',
          icon: 'cup'
        },
        {
          field: 'contacts',
          icon: 'phone'
        },
      ],
      profile: {
        '姓名': '吴毓鹏',
        '城市': '西安',
        '职位': 'WEB前端开发',
       '生日':'1994-09-10'
      },
      workHistory: [{
          '公司': 'xx公司',
          '介绍': `公司总部设在XXXX区，先后在全宇宙成立分公司。专注于移动XXX领域，主打产品XXXXX，它将资讯、报纸、杂志、图片、微信等众多内容，按照用户意愿聚合到一起，实现深度个性化 定制。
          我的主要工作有：
          1.按原型图完成产品需求
          2.修复各种bug和该需求`
        },
        {
          '公司': 'xx公司',
          '介绍': `公司总部设在XXXX区，先后在全宇宙成立分公司。专注于移动XXX领域，主打产品XXXXX，它将资讯、报纸、杂志、图片、微信等众多内容，按照用户意愿聚合到一起，实现深度个性化 定制。
          我的主要工作有：
          1.按原型图完成产品需求
          2.修复各种bug和该需求`
        },
      ],
      education: [{
          '学校': '非985大学',
          '专业': '全日制本科'
        },
        {
          '学校': '普通高中',
          '专业': '全日制高级中学'
        },
      ],
      projects: [{
          '项目': '项目1',
          '介绍': '文字'
        },
        {
          '项目': '项目2',
          '介绍': '文字'
        },
      ],
      awards: [{
            '奖项': 'awards A',
          '介绍': 'xxxxx'
        },
        {
            '奖项': 'awards B',
          '介绍': ' xxxxx'
        },
      ],
      contacts: [{
          '联系方式': 'tel',
          '具体内容': '13812345678'
        },
        {
          '联系方式': 'qq',
          '具体内容': '12345678'
        },
      ],
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
    switchTab(state, payload) {
      state.selected = payload //提交载荷  
    }
  }
})
