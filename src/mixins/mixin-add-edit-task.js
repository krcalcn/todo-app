import ModalHeaderVue from 'components/Tasks/Modals/Shared/ModalHeader.vue';
import ModalTaskNameVue from 'components/Tasks/Modals/Shared/ModalTaskName.vue';
import ModalDueDateVue from 'components/Tasks/Modals/Shared/ModalDueDate.vue';
import ModalDueTimeVue from 'components/Tasks/Modals/Shared/ModalDueTime.vue';
import ModalButtonsVue from 'components/Tasks/Modals/Shared/ModalButtons.vue';

export default {
  methods: {
    submitForm() {
      this.$refs.modalTaskName.$refs.name.validate();
      if (!this.$refs.modalTaskName.$refs.name.hasError) {
        this.submitTask();
      }
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
