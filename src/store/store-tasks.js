import Vue from 'vue';
import { uid } from 'quasar';

const state = {
  tasks: {
    ID1: {
      name: 'Go to shop',
      dueDate: '2020/08/11',
      dueTime: '10:00',
      completed: false,
    },
    ID2: {
      name: 'Get bananas',
      dueDate: '2020/08/12',
      dueTime: '11:00',
      completed: false,
    },
    ID3: {
      name: 'Get apples',
      dueDate: '2020/08/13',
      dueTime: '14:30',
      completed: false,
    },
  },
  search: '',
  sort: 'dueDate',
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
  setSearch(s, value) {
    s.search = value;
  },
  setSort(s, value) {
    s.sort = value;
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
  setSearch({ commit }, value) {
    commit('setSearch', value);
  },
  setSort({ commit }, value) {
    commit('setSort', value);
  },
};

const getters = {
  tasksSorted: (s) => {
    const tasksSorted = {};
    const keysOrdered = Object.keys(s.tasks);

    keysOrdered.sort((a, b) => {
      const taskAProp = s.tasks[a][s.sort].toLowerCase();
      const taskBProp = s.tasks[b][s.sort].toLowerCase();

      if (taskAProp > taskBProp) return 1;
      if (taskAProp < taskBProp) return -1;
      return 0;
    });

    keysOrdered.forEach((key) => {
      tasksSorted[key] = s.tasks[key];
    });

    return tasksSorted;
  },
  tasksFiltered: (s, g) => {
    const tasksS = g.tasksSorted;
    const tasksFiltered = {};
    if (s.search) {
      Object.keys(tasksS).forEach((key) => {
        const task = tasksS[key];
        const taskNameLowerCase = task.name.toLowerCase();
        const searchLowerCase = s.search.toLowerCase();
        if (taskNameLowerCase.includes(searchLowerCase)) {
          tasksFiltered[key] = task;
        }
      });
      return tasksFiltered;
    }
    return tasksS;
  },
  tasksTodo: (s, g) => {
    const tasksF = g.tasksFiltered;
    const tasks = {};
    Object.keys(tasksF).forEach((key) => {
      const task = tasksF[key];
      if (!task.completed) {
        tasks[key] = task;
      }
    });
    return tasks;
  },
  tasksCompleted: (s, g) => {
    const tasksF = g.tasksFiltered;
    const tasks = {};
    Object.keys(tasksF).forEach((key) => {
      const task = tasksF[key];
      if (task.completed) {
        tasks[key] = task;
      }
    });
    return tasks;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
