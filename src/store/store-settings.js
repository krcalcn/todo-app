// import Vue from 'vue';
import { LocalStorage } from 'quasar';

const state = {
  settings: {
    show12HourTimeFormat: false,
    showTasksInOneList: false,
  },
};

const mutations = {
  set12HourTimeFormat(s, value) {
    s.settings.show12HourTimeFormat = value;
  },
  setTasksInOneList(s, value) {
    s.settings.showTasksInOneList = value;
  },
  setSettings(s, settings) {
    Object.assign(state.settings, settings);
  },
};

const actions = {
  set12HourTimeFormat({ commit, dispatch }, value) {
    commit('set12HourTimeFormat', value);
    dispatch('saveSettings');
  },
  setTasksInOneList({ commit, dispatch }, value) {
    commit('setTasksInOneList', value);
    dispatch('saveSettings');
  },
  saveSettings() {
    LocalStorage.set('settings', state.settings);
  },
  getSettings({ commit }) {
    const settings = LocalStorage.getItem('settings');
    if (settings) {
      commit('setSettings', settings);
    }
  },
};

const getters = {
  settings: (s) => s.settings,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
