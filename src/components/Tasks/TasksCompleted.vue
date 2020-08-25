<template>
  <transition
    appear
    enter-active-class="animated slideInRight"
    leave-active-class="animated slideOutRight">
    <div class="col-6 q-mx-auto">
      <list-header bgColor="bg-green-5">Completed</list-header>
      <q-list
        bordered
        separator
        class="col-md-6 col-sm-12">
        <q-separator spaced />
          <task
          v-for="(task, key) in tasksCompleted"
          v-bind:key="key"
          :task="task"
          :id="key" />
      </q-list>
    </div>
  </transition>
</template>
<script>
import TaskVue from './Task.vue';
import ListHeaderVue from './Modals/Shared/ListHeader.vue';

export default {
  props: ['tasksCompleted'],
  components: {
    task: TaskVue,
    'list-header': ListHeaderVue,
  },
};
</script>
