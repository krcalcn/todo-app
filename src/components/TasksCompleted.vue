<template>
  <div class="col-md-6 col-xs-12" :class="$q.screen.width > 1024 ? '' : 'q-mt-lg'">

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
</template>
<script>
import TaskVue from './Tasks/Task.vue';
import ListHeaderVue from './Tasks/Modals/Shared/ListHeader.vue';

export default {
  props: ['tasksCompleted'],
  components: {
    task: TaskVue,
    'list-header': ListHeaderVue,
  },
};
</script>
