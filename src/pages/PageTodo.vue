<template>
  <q-page padding>
   <q-list
    v-if="Object.keys(tasks).length"
    bordered
    separator>
      <task
      v-for="(task, key) in tasks"
      v-bind:key="key"
      :task="task"
      :id="key">
      </task>
    </q-list>
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
  </q-page>
</template>

<script>
import Task from 'components/Tasks/Task';
import AddTask from 'components/Tasks/Modals/AddTask';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      showAddTask: false,
    };
  },
  methods: {
  },
  components: {
    task: Task,
    'add-task': AddTask,
  },
  computed: {
    ...mapGetters('tasks', ['tasks']),
  },
};
</script>
