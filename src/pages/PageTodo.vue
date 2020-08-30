<template>
  <q-page padding>
    <div class="row">
        <search />
        <sort/>
      <p
        v-if="search && !Object.keys(tasksTodo).length && !Object.keys(tasksCompleted).length">
          No search results.
        </p>
      <no-tasks
        v-if="!Object.keys(tasksTodo).length && !search && !settings.showTasksInOneList"
        @showaddtask="showAddTask = true"/>
      <tasks-todo
        :tasksTodo="tasksTodo"
        v-if="Object.keys(tasksTodo).length"/>

      <tasks-completed
        :tasksCompleted="tasksCompleted"
        v-if="Object.keys(tasksCompleted).length"/>

      <div class="absolute-bottom text-center q-mb-lg no-pointer-events">
        <q-btn
          @click="showAddTask = true"
          class="all-pointer-events"
          round
          color="primary"
          size="24px"
          icon="add"/>
      </div>
      <q-dialog v-model="showAddTask">

        <add-task @close="showAddTask = false" />

      </q-dialog>
    </div>
  </q-page>
</template>

<script>
import AddTask from 'components/Tasks/Modals/AddTask';
import { mapGetters, mapState } from 'vuex';
import TasksTodoVue from 'src/components/Tasks/TasksTodo.vue';
import TasksCompletedVue from 'src/components/Tasks/TasksCompleted.vue';
import SearchVue from 'src/components/Tasks/Tools/Search.vue';
import NoTasksVue from 'src/components/Tasks/NoTasks.vue';
import SortVue from 'src/components/Tasks/Tools/Sort.vue';

export default {
  data() {
    return {
      showAddTask: false,
    };
  },
  methods: {
  },
  components: {
    'add-task': AddTask,
    'tasks-todo': TasksTodoVue,
    'tasks-completed': TasksCompletedVue,
    'no-tasks': NoTasksVue,
    search: SearchVue,
    sort: SortVue,
  },
  computed: {
    ...mapGetters('tasks', ['tasksTodo', 'tasksCompleted']),
    ...mapGetters('settings', ['settings']),
    ...mapState('tasks', ['search']),
  },
};
</script>
