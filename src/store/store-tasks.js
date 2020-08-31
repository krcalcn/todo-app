import Vue from 'vue';
import { uid } from 'quasar';
import { firebaseDb, firebaseAuth } from 'boot/firebase';
import { showErrorMessage } from 'src/functions/function-show-error-message';

const state = {
  tasks: {
  },
  search: '',
  sort: 'dueDate',
  tasksDownloaded: false,
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
    Vue.set(s.tasks, payload.id, payload.task);
  },
  clearTasks(s) {
    s.tasks = {};
  },
  setSearch(s, value) {
    s.search = value;
  },
  setSort(s, value) {
    s.sort = value;
  },
  setTasksDownloaded(s, value) {
    s.tasksDownloaded = value;
  },
};

const actions = {
  updateTask({ dispatch }, payload) {
    dispatch('fbUpdateTask', payload);
  },
  deleteTask({ dispatch }, id) {
    dispatch('fbDeleteTask', id);
  },
  addTask({ dispatch }, task) {
    const taskId = uid();
    const payload = {
      id: taskId,
      task,
    };
    dispatch('fbAddTask', payload);
  },
  setSearch({ commit }, value) {
    commit('setSearch', value);
  },
  setSort({ commit }, value) {
    commit('setSort', value);
  },
  fbReadData({ commit }) {
    const userId = firebaseAuth.currentUser.uid;
    const userTasks = firebaseDb.ref(`tasks/${userId}`);

    userTasks.once('value', () => {
      commit('setTasksDownloaded', true);
    }, (error) => {
      showErrorMessage(error.message);
    });

    userTasks.on('child_added', (snapshot) => {
      const taskk = snapshot.val();
      const payload = {
        id: snapshot.key,
        task: taskk,
      };
      commit('addTask', payload);
    });

    userTasks.on('child_changed', (snapshot) => {
      const task = snapshot.val();
      const payload = {
        id: snapshot.key,
        updates: task,
      };
      commit('updateTask', payload);
    });

    userTasks.on('child_removed', (snapshot) => {
      const taskId = snapshot.key;
      commit('deleteTask', taskId);
    });
  },
  fbAddTask({}, payload) {
    const userId = firebaseAuth.currentUser.uid;
    const taskRef = firebaseDb.ref(`tasks/${userId}/${payload.id}`);
    taskRef.set(payload.task);
  },
  fbUpdateTask({}, payload) {
    const userId = firebaseAuth.currentUser.uid;
    const taskRef = firebaseDb.ref(`tasks/${userId}/${payload.id}`);
    taskRef.update(payload.updates);
  },
  fbDeleteTask({}, taskId) {
    const userId = firebaseAuth.currentUser.uid;
    const taskRef = firebaseDb.ref(`tasks/${userId}/${taskId}`);
    taskRef.remove();
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
