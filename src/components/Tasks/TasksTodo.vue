<template>
  <transition
    appear
    enter-active-class="animated slideInLeft"
    leave-active-class="animated slideOutLeft">
    <div :class="settings.showTasksInOneList ? 'col-12': 'col-6 q-mx-auto'">
      <list-header bgColor="bg-orange-5" v-if="!settings.showTasksInOneList">Todos</list-header>
      <q-list
        bordered
        separator>
        <q-separator spaced v-if="!settings.showTasksInOneList"/>
          <task
          v-for="(task, key) in tasksTodo"
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
  props: ['tasksTodo'],
  components: {
    task: TaskVue,
    'list-header': ListHeaderVue,
  },
  computed: {
    ...mapGetters('settings', ['settings']),
  },
};
</script>
