<template>
  <q-card>

    <modal-header> Edit Task</modal-header>

    <q-form @submit.prevent="submitForm" >
      <q-card-section>

        <modal-task-name
          :name.sync="taskToSubmit.name"
          ref="modalTaskName" />

        <modal-due-date
          :dueDate.sync="taskToSubmit.dueDate" />

        <modal-due-time
          :dueTime.sync="taskToSubmit.dueTime"
          v-if="taskToSubmit.dueDate"/>

      </q-card-section>

      <modal-buttons> </modal-buttons>

  </q-form>
  </q-card>
</template>
<script>
import { mapActions } from 'vuex';
import mixinAddEditTask from 'src/mixins/mixin-add-edit-task';

export default {
  mixins: [mixinAddEditTask],
  props: ['task', 'id'],
  data() {
    return {
      taskToSubmit: {
        name: '',
        dueDate: '',
        dueTime: '',
        completed: false,
      },
    };
  },
  methods: {
    ...mapActions('tasks', ['updateTask']),
    submitTask() {
      this.updateTask({
        id: this.id,
        updates: this.taskToSubmit,
      });
      this.$emit('close');
    },
  },
  mounted() {
    this.taskToSubmit = { ...this.task };
  },
};
</script>
