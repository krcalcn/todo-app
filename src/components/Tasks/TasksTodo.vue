<template>
  <div class="col-12">
    <list-header bgColor="bg-orange-5">Todos</list-header>
    <q-list
      bordered
      separator>
      <q-separator spaced />
        <task
        v-for="(task, key) in tasksTodo"
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
  props: ['tasksTodo'],
  components: {
    task: TaskVue,
    'list-header': ListHeaderVue,
  },
};
</script>
