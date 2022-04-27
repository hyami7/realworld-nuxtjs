const cookieparser = process.server ? require("cookieparser") : undefined;

// 在服务端渲染期间运行的为同一实例
// 为了防止数据冲突 所以定义为函数 并返回数据对象
export const state = () => {
  return {
    user: null,
  };
};

export const mutations = {
  setUser(state, data) {
    state.user = data;
  },
};

export const actions = {
  // nuxtServerInit是一个特殊的action方法 会在服务端渲染期间自动调用
  // 主要用来初始化容器数据，传递数据给客户端使用
  nuxtServerInit({ commit }, { req }) {
    let user = null;

    // 如果请求头中有cookie
    if (req.headers.cookie) {
      // 使用cookieparser把cookie字符串转为js对象
      const parsed = cookieparser.parse(req.headers.cookie);

      try {
        user = JSON.parse(parsed.user);
      } catch (error) {}
    }

    commit("setUser", user);
  },
};
