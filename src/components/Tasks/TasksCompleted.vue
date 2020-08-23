<template>
  <div class="col-12 q-mt-lg" :class="$q.screen.width > 1024 ? '' : 'q-mt-lg'">

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
