<template>
  <q-card>

    <modal-header> Add Task</modal-header>

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
import ModalHeaderVue from './Shared/ModalHeader.vue';
import ModalTaskNameVue from './Shared/ModalTaskName.vue';
import ModalDueDateVue from './Shared/ModalDueDate.vue';
import ModalDueTimeVue from './Shared/ModalDueTime.vue';
import ModalButtonsVue from './Shared/ModalButtons.vue';

export default {
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
    ...mapActions('tasks', ['addTask']),
    submitForm() {
      this.$refs.modalTaskName.$refs.name.validate();
      if (!this.$refs.modalTaskName.$refs.name.hasError) {
        this.submitTask();
      }
    },
    submitTask() {
      this.addTask(this.taskToSubmit);
      this.$emit('close');
    },
  },
  components: {
    'modal-header': ModalHeaderVue,
    'modal-task-name': ModalTaskNameVue,
    'modal-due-date': ModalDueDateVue,
    'modal-due-time': ModalDueTimeVue,
    'modal-buttons': ModalButtonsVue,
  },
};
</script>
