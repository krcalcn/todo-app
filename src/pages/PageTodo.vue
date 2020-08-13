<template>
  <q-page padding>
   <q-list bordered separator>
      <task
      v-for="(task, key) in tasks"
      v-bind:key="key"
      :task="task"
      :id="key">
      </task>
   </q-list>
  </q-page>
</template>

<script>
import Task from 'components/Task';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {

    };
  },
  methods: {
  },
  components: {
    task: Task,
  },
  computed: {
    ...mapGetters('tasks', ['tasks']),
  },
};
</script>
