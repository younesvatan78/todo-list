import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state(){
    return{
      title : null,
      tasks : null
    }
  },
  mutations: {
    SET_TITLE(state,data){
      state.title = data
    },
    SET_TASKS(state,data){
      state.tasks = data
    }
  },
  actions: {
    getTitle(ctx,data){
      ctx.commit('SET_TITLE',data)
    },
    getLocalStorageTasks(ctx,data){
        ctx.commit('SET_TASKS',data)
    }
  },
  modules: {
  }
})
