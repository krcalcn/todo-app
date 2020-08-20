<template>
  <q-page padding>
    <div class="row">

      <tasks-todo
        :tasksTodo="tasksTodo"
        @showaddtask="showAddTask = true"/>

      <tasks-completed
        :tasksCompleted="tasksCompleted"/>

      <div class="absolute-bottom text-center q-mb-lg">
        <q-btn
          @click="showAddTask = true"
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
import { mapGetters } from 'vuex';
import TasksTodoVue from 'src/components/Tasks/TasksTodo.vue';
import TasksCompletedVue from 'src/components/TasksCompleted.vue';

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
  },
  computed: {
    ...mapGetters('tasks', ['tasksTodo', 'tasksCompleted']),
  },
};
</script>
