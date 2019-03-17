import { getNewsList } from '../api/news'

const types = {
  NEWS_LIST: 'NEWS_LIST'
}

export default {
  state: {
    [types.NEWS_LIST]: []
  },
  mutations: {
    [types.NEWS_LIST]: (state, res) => {
      state[types.NEWS_LIST] = res
    }
  },
  actions: {
    [types.NEWS_LIST]: async ({ commit }, params) => {
      const res = await getNewsList(params)
      return commit(types.NEWS_LIST, res)
    }
  },
  getters: {
    getNewsResponse (state) {
      return state[types.NEWS_LIST]
    }
  }
}
