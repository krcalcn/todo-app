import Vue from 'vue';
import { uid } from 'quasar';

const state = {
  tasks: {
    ID1: {
      name: 'Go to shop',
      dueDate: '11/08/2020',
      dueTime: '10:00',
      completed: false,
    },
    ID2: {
      name: 'Get bananas',
      dueDate: '12/08/2020',
      dueTime: '11:00',
      completed: false,
    },
    ID3: {
      name: 'Get apples',
      dueDate: '13/08/2020',
      dueTime: '14:30',
      completed: true,
    },
  },
};

const mutations = {
  updateTask(s, payload) {
    Object.assign(s.tasks[payload.id], payload.updates);
  },
  deleteTask(s, id) {
    // delete s.tasks[id];
    Vue.delete(s.tasks, id);
  },
  addTask(s, payload) {
    Vue.set(s.tasks, payload.id, payload.committedTask);
  },
};

const actions = {
  updateTask({ commit }, payload) {
    commit('updateTask', payload);
  },
  deleteTask({ commit }, id) {
    commit('deleteTask', id);
  },
  addTask({ commit }, task) {
    const taskId = uid();
    const payload = {
      id: taskId,
      committedTask: task,
    };
    commit('addTask', payload);
  },
};

const getters = {
  tasks: (s) => s.tasks,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
