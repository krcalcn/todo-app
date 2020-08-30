<template>
  <transition
    appear
    enter-active-class="animated slideInRight"
    leave-active-class="animated slideOutRight">
    <div :class="settings.showTasksInOneList ? 'col-12': 'col-6 q-mx-auto'">
      <list-header bgColor="bg-green-5" v-if="!settings.showTasksInOneList">Completed</list-header>
      <q-list
        bordered
        separator
        class="col-md-6 col-sm-12">
        <q-separator spaced v-if="!settings.showTasksInOneList"/>
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
import { mapGetters } from 'vuex';
import TaskVue from './Task.vue';
import ListHeaderVue from './Modals/Shared/ListHeader.vue';

export default {
  props: ['tasksCompleted'],
  components: {
    task: TaskVue,
    'list-header': ListHeaderVue,
  },
  computed: {
    ...mapGetters('settings', ['settings']),
  },
};
</script>
