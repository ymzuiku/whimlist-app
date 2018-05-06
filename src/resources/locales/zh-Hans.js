export default {
  appName: '一念清单',
  globals: {
  },
  components: {
    dialog: {
      ok: '确定',
      cancel: '取消',
      yes: '是',
      no: '否',
    },
    loader: {
      messageLoading: '正在加载...',
      messageProgressing: '正在执行...',
    },
  },
  screens: {
    example: {
      title: '示例',
    },
    forgotPassword: {
      title: '忘记密码',
      placeholderEmail: '邮箱',
      buttonSend: '发送重置密码邮件',
    },
    home: {
      title: '一念清单',
      drawerContent: {
        itemListOfToday: '今日',
        itemListOfUpcoming: '即将到来',
        buttonNewList: '新建清单',
      },
    },
    initialize: {
      title: '初始化',
    },
    listDetail: {
      title: '清单详情',
    },
    listEdit: {
      title: '编辑清单',
    },
    listNew: {
      title: '新建清单',
    },
    listOfSome: {
      title: 'Some',
    },
    listOfToday: {
      title: '今日',
      buttonNewTask: '新建任务',
    },
    listOfUpcoming: {
      title: '即将到来',
      listEmptyTitle: '没有任务',
      listEmptyMessage: '点击 + 按钮添加任务',
    },
    login: {
      title: '登录',
      placeholderEmail: '邮箱',
      placeholderPassword: '密码',
      messageDoNotHaveAnAccount: '还没有账号？',
      buttonLogin: '登录',
      buttonRegister: '注册',
      buttonForgotPassword: '忘记？',
    },
    register: {
      title: '注册',
      placeholderEmail: '邮箱',
      placeholderPassword: '密码',
      buttonRegister: '注册',
    },
    settings: {
      title: '设置',
      buttonLogout: '登出',
    },
    taskDetail: {
      title: '任务详情',
    },
    taskEdit: {
      title: '编辑任务',
    },
    taskNew: {
      title: '新建任务',
    },
    userProfile: {
      title: '用户资料',
    },
    userProfileEdit: {
      title: '编辑用户资料',
    },
  },
};
