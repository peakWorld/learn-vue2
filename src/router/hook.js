import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style

NProgress.configure({
  showSpinner: false,
});

// Define hooks
const hooks = {
  beforeEach: [
    function progressStart(to, from, next) {
      // to 将要进入的目标 Route 路由对象
      // from 正要离开的 Route 路由对象
      // next 调用该方法来 resolve 这个钩子
      NProgress.start();

      next(); // 
      // next(false); // 中断当前的导航
      // next('/')    // 中断当前的导航, 进行一个新的导航; 跳转到指定地址
    },
  ],
  afterEach: [
    function progressEnd() {
      NProgress.done();
    },
  ],
};

export default (router) => {
  const actions = Object.keys(hooks);
  if (!router || actions.length <= 0) {
    return;
  }

  // Add hooks
  actions.forEach((action) => {
    if (router[action]) {
      if (Array.isArray(hooks[action])) {
        for (const item of hooks[action]) {
          router[action](item);
        }
      } else if (typeof hooks[action] === 'function') {
        router[action](hooks[action]);
      }
    }
  });
};
