import Vue from 'vue';
import Vuex, { Store, Plugin } from 'vuex';
import VuexORM from '@vuex-orm/core';
import { Article } from './models/articles';
import { Category } from './models/category';

Vue.use(Vuex);

const database = new VuexORM.Database();
database.register(Article);
database.register(Category);

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  plugins: [
    VuexORM.install(database)
  ]
});
