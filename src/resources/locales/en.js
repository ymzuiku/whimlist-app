export default {
  appName: 'WhimList',
  globals: {
    messageTokenExpired: 'Session expired. Please login again.',
  },
  modules: {
    alert: {
      ok: 'Ok',
      cancel: 'Cancel',
      yes: 'Yes',
      no: 'No',
    },
  },
  components: {
    dialog: {
      ok: 'Ok',
      cancel: 'Cancel',
      yes: 'Yes',
      no: 'No',
    },
    loader: {
      messageLoading: 'Loading...',
      messageProgressing: 'Progressing...',
    },
  },
  screens: {
    example: {
      title: 'Example',
    },
    forgotPassword: {
      title: 'Forgot Password',
      placeholderEmail: 'Email',
      buttonSend: 'Send reset password email',
    },
    home: {
      title: 'Whim List',
      drawerContent: {
        itemListOfToday: 'Today',
        itemListOfUpcoming: 'Upcoming',
        buttonNewList: 'New List',
      },
    },
    initialize: {
      title: 'Initialize',
    },
    listDetail: {
      title: 'List Detail',
    },
    listEdit: {
      title: 'Edit List',
    },
    listNew: {
      title: 'New List',
    },
    listOfSome: {
      title: 'Some',
    },
    listOfToday: {
      title: 'Today',
      buttonNewTask: 'New Task',
    },
    listOfUpcoming: {
      title: 'Upcoming',
      listEmptyTitle: 'No task',
      listEmptyMessage: 'Click + button to add a task',
    },
    login: {
      title: 'Login',
      placeholderEmail: 'Email',
      placeholderPassword: 'Password',
      messageDoNotHaveAnAccount: 'Don\'t have an account?',
      buttonLogin: 'Login',
      buttonRegister: 'Register',
      buttonForgotPassword: 'Forgot?',
    },
    register: {
      title: 'Register',
      placeholderEmail: 'Email',
      placeholderPassword: 'Password',
      buttonRegister: 'Register',
    },
    settings: {
      title: 'Settings',
      buttonLogout: 'Logout',
    },
    taskDetail: {
      title: 'Task Detail',
    },
    taskEdit: {
      title: 'Edit Task',
    },
    taskNew: {
      title: 'New Task',
    },
    userProfile: {
      title: 'User Profile',
    },
    userProfileEdit: {
      title: 'Edit User Profile',
    },
  },
};
